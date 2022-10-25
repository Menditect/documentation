import { LoadContext, Plugin, PluginOptions, Props, RouteConfig } from "@docusaurus/types";
import { promises as fs } from 'fs';
import { join } from 'path';

export interface PageLinkerOptions {
    links: [{
        id: string; // Example: 1.5.0-intro
        content: string; // Example: @site/versioned_docs/version-1.5.0/intro.md
    }]
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

async function pageLinker(context: LoadContext, options: PageLinkerOptions): Promise<Plugin> {
    return {
        name: 'page-linker',

        async postBuild({ routes, outDir }: Props) {
            const mapContentPath = new Map<String, String>(buildListOfContentAndPaths(routes));
            const mappedLinks = options.links?.reduce((prev, cur) => ({ [cur.id]: mapContentPath.get(cur.content), ...prev }), {})

            if (mappedLinks) {
                await fs.writeFile(join(outDir, 'page-linker-index.json'), JSON.stringify(mappedLinks));
            }
        },
    }
}

export default pageLinker;