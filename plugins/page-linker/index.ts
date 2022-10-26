import { LoadContext, LoadedPlugin, Plugin, Props, RouteConfig } from '@docusaurus/types';
import { promises as fs } from 'fs';
import { join } from 'path';
import { PageLinkerOptions } from './options';
import { validateOptions } from './validate';

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
): Record<Version, Record<Id, Path>> {
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
): Record<Version, Record<Id, Path>> {
  return options.versionedLinks?.reduce((prev, cur) => {
    const versions = cur.versions === 'ALL' ? loadedVersionLabels : cur.versions;
    for (const version of versions) {
      prev = getPathForVersion(mappedContentToPath, mappedVersionToContent, prev, version, cur.content, cur.id);
    }
    return prev;
  }, {});
}

function mapNonVersionLinks(
  options: PageLinkerOptions,
  mappedContentToPath: Map<Content, Path>,
): Record<Version, Record<Id, Path>> {
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

pageLinkerPlugin.validateOptions = validateOptions;

export default pageLinkerPlugin;
