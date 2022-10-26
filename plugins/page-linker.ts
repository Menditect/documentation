import { LoadContext, LoadedPlugin, Plugin, PluginModule, PluginOptions, Props, RouteConfig } from '@docusaurus/types';
import { promises as fs } from 'fs';
import Joi, { version } from 'joi';
import { join } from 'path';

/* OPTIONS */
interface NonVersionedLinksOptions {
  /** Should be unique */
  id: string;
  /** e.g., @site/additional/01-howtos/cicd.md */
  content: string;
}

interface VersionedLinkOptions {
  /** Should be unique inside the given versions */
  id: string;
  /** e.g., application-revision.md */
  content: string;
  /** e.g., ['1.8.0'] */
  versions: string[] | 'ALL';
}

export interface PageLinkerOptions extends PluginOptions {
  versionedLinks: VersionedLinkOptions[];
  nonVersionedLinks: NonVersionedLinksOptions[];
}

/* JOI SCHEMA - OPTIONS */
const nonVersionedLinkOptionsSchema = Joi.object({
  id: Joi.string(),
  // Content should end with a .md file extension
  content: Joi.string().pattern(/(.*?)\.(md)$/),
});

const versionedLinkOptionsSchema = Joi.object({
  id: Joi.string(),
  // Content should end with a .md file extension
  content: Joi.string().pattern(/(.*?)\.(md)$/),
  versions: Joi.alternatives().try(
    Joi.string().valid('ALL'),
    // Should be a valid version, e.g.: 1.8.0
    Joi.array().items(Joi.string().pattern(/^([1-9]\d*|0)(\.(([1-9]\d*)|0)){2}$/)),
  ),
});

const pageLinkerOptionsSchema = Joi.object({
  versionedLinks: Joi.array().items(versionedLinkOptionsSchema),
  nonVersionedLinks: Joi.array().items(nonVersionedLinkOptionsSchema),
});

/* VALIDATE OPTIONS */
function hasDuplicates<T>(input: Array<T>) {
  return new Set(input).size !== input.length;
}

function checkNonVersionLinks(options: PageLinkerOptions) {
  if (hasDuplicates(options.nonVersionedLinks.map((x) => x.id))) {
    throw new Error('The non-versioned links contains a duplicate id');
  }
}

function checkVersionLinks(options: PageLinkerOptions) {
  const versions = new Set(options.versionedLinks.flatMap((x) => x.versions));
  for (const version of versions) {
    const versionedLinks = options.versionedLinks.filter((x) => x.versions.includes(version) || x.versions === 'ALL');
    if (hasDuplicates(versionedLinks.map((x) => x.id))) {
      throw new Error(`The versioned links contains a duplicate id in version '${version}'`);
    }
  }
}

export function validateOptions({ options, validate }: { options: PageLinkerOptions; validate: any }) {
  const validatedOptions = validate(pageLinkerOptionsSchema, options);

  checkNonVersionLinks(options);
  checkVersionLinks(options);

  return validatedOptions;
}

/* RESULTS */
type Content = string;
type Path = string;
type Version = string;
type Id = string;

/* FUNCTIONS */
function buildListOfContentAndPaths(routes: RouteConfig[]): [string, string][] {
  if (!routes) {
    return [];
  }
  return routes.flatMap((route) => {
    const results = buildListOfContentAndPaths(route.routes);
    if (route.modules && typeof route.modules.content === 'string') {
      results.push([route.modules.content, route.path]);
    }
    return results;
  });
}

function getLoadedVersions(plugins: LoadedPlugin[]) {
  const { loadedVersions } = plugins[0].content as any;
  return loadedVersions;
}

function buildMapOfVersionToContent(loadedVersions: any) {
  return loadedVersions.reduce((prev, cur) => {
    const content = cur.versionName === 'current' ? '@site/docs' : `@site/versioned_docs/version-${cur.label}`;

    return {
      [cur.label]: content,
      ...prev,
    };
  }, {});
}

function getPathForVersion(
  mappedContentToPath: Map<Content, Path>,
  mappedVersionToContent: Record<Version, Content>,
  prev: Record<Version, Record<Id, Path>>,
  version: Version,
  content: Content,
  id: Id,
) {
  const path = mappedContentToPath.get(`${mappedVersionToContent[version]}/${content}`);

  return {
    ...prev,
    [version]: {
      [id]: path,
      ...prev[version],
    },
  };
}

function mapVersionLinks(
  options: PageLinkerOptions,
  mappedContentToPath: Map<Content, Path>,
  mappedVersionToContent: Record<Version, Content>,
  loadedVersionLabels: Version[],
) {
  return options.versionedLinks?.reduce((prev, cur) => {
    const versions = cur.versions === 'ALL' ? loadedVersionLabels : cur.versions;
    for (const version of versions) {
      prev = getPathForVersion(mappedContentToPath, mappedVersionToContent, prev, version, cur.content, cur.id);
    }
    return prev;
  }, {});
}

function mapNonVersionLinks(options: PageLinkerOptions, mappedContentToPath: Map<Content, Path>) {
  return options.nonVersionedLinks?.reduce((prev, cur) => {
    const path = mappedContentToPath.get(cur.content);

    return {
      [cur.id]: path,
      ...prev,
    };
  }, {});
}

/* PLUGIN */
async function pageLinkerPlugin(context: LoadContext, options: PageLinkerOptions): Promise<Plugin> {
  return {
    name: 'page-linker',

    async postBuild({ routes, outDir, plugins }: Props) {
      const mappedContentToPath = new Map<Content, Path>(buildListOfContentAndPaths(routes));

      const loadedVersions = getLoadedVersions(plugins);
      const loadedVersionLabels = loadedVersions.map((x) => x.label);
      const mappedVersionToContent = buildMapOfVersionToContent(loadedVersions);

      const mappedNonVersionLinks = mapNonVersionLinks(options, mappedContentToPath);
      const mappedVersionLinks = mapVersionLinks(
        options,
        mappedContentToPath,
        mappedVersionToContent,
        loadedVersionLabels,
      );
      const mappedLinks = { versions: mappedVersionLinks, nonVersions: mappedNonVersionLinks };

      if (mappedLinks) {
        await fs.writeFile(join(outDir, 'page-linker-index.json'), JSON.stringify(mappedLinks));
      }
    },
  };
}

export default pageLinkerPlugin;
