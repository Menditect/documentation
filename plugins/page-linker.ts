import { LoadContext, Plugin, PluginModule, PluginOptions, Props, RouteConfig } from "@docusaurus/types";
import { promises as fs } from 'fs';
import { join } from 'path';

export interface PageLinkerOptions extends PluginOptions {
    nonVersionedLinks: {
        id: string; // how-to-cicd
        content: string; // @site/additional/01-howtos/cicd.md
    }[];

    versionedLinks: {
        id: string; // app-rev
        version: string; // 1.8.0
        content: string; // application-revision.md
    }[];
}

function buildListOfContentAndPaths(routes: RouteConfig[]): [string, string][] {
    if (!routes) { return []; }
    return routes.flatMap(route => {
        const results = buildListOfContentAndPaths(route.routes);
        if (route.modules && typeof(route.modules.content) === "string") {
            results.push([route.modules.content, route.path])
        }
        return results;
    })
} 

function buildMapOfVersionToContent(plugins: any) {
    return plugins[0].content.loadedVersions
        .reduce((prev, cur) => {
            const content = cur.versionName === 'current' 
                ? '@site/docs' 
                : `@site/versioned_docs/version-${cur.label}`;

            return { 
                [cur.label]: content,
                ...prev,
            }
        }, {})
}

function mapVersionLinks(options: PageLinkerOptions, mappedContentToPath: Map<String, String>, mappedVersionToContent: any) {
    return options.versionedLinks?.reduce((prev, cur) => {
        const path = mappedContentToPath.get(`${mappedVersionToContent[cur.version]}/${cur.content}`);

        return {
            ...prev,
            [cur.version]: {
                [cur.id]: path,
                ...prev[cur.version]
            },
        }
    }, {});
}

function mapNonVersionLinks(options: PageLinkerOptions, mappedContentToPath: Map<String, String>) {
    return options.nonVersionedLinks?.reduce((prev, cur) => {
        const path = mappedContentToPath.get(cur.content);

        return {
            [cur.id]: path,
            ...prev,
        }
    }, {});
}

async function pageLinker(context: LoadContext, options: PageLinkerOptions): Promise<Plugin> {
    return {
        name: 'page-linker',

        async postBuild({ routes, outDir, plugins }: Props) {
            const mappedContentToPath = new Map<String, String>(buildListOfContentAndPaths(routes));
            const mappedVersionToContent = buildMapOfVersionToContent(plugins);

            const mappedNonVersionLinks = mapNonVersionLinks(options, mappedContentToPath)
            const mappedVersionLinks = mapVersionLinks(options, mappedContentToPath, mappedVersionToContent);
            const mappedLinks = { versions: mappedVersionLinks, nonVersions: mappedNonVersionLinks };

            if (mappedLinks) {
                await fs.writeFile(join(outDir, 'page-linker-index.json'), JSON.stringify(mappedLinks));
            }
        },
    }
}

export default pageLinker;