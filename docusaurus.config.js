// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// @ts-ignore
const lightCodeTheme = require('prism-react-renderer/themes/github');
// @ts-ignore
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const sortReleaseNotesSideBar = require('./release-notes/sidebar');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Menditect Documentation',
  tagline: 'Go test it!',
  url: 'https://documentation.menditect.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'menditect',
  projectName: 'documentation',
  trailingSlash: false,

  scripts: [{ src: 'https://kit.fontawesome.com/56b32f0d6e.js', defer: true, crossorigin: 'anonymous' }],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          lastVersion: 'current',
          versions: {
            current: {
              label: '1.8.0',
              path: '/',
            }
          }
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve("@docusaurus/plugin-content-docs"),
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'additional',
        path: 'additional',
        routeBasePath: 'additional',
        sidebarPath: require.resolve('./sidebars.js'),
      }),
    ],
    [
      require.resolve("@docusaurus/plugin-content-docs"),
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'release-notes',
        path: 'release-notes',
        routeBasePath: 'release-notes',
        async sidebarItemsGenerator({defaultSidebarItemsGenerator, ...args}) {
          const sidebarItems = await defaultSidebarItemsGenerator(args);
          return sortReleaseNotesSideBar(sidebarItems);
        }
      }),
    ]
  ],

  themes: [
    [
      // @ts-ignore
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      // @ts-ignore
      ({
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: '/',
        explicitSearchResultPath: true,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Menditect',
          src: 'img/menditect-logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: 'release-notes',
            label: 'Release notes',
            position: 'left'
          },
          {
            to: 'additional',
            label: 'Additional',
            position: 'left',
            items: [
              {
                to: 'additional/howtos/access-environment',
                label: 'How to?'
              },
              {
                to: 'additional/knownissues/java-action-not-implemented',
                label: 'Known Issues',
              },
              {
                to: 'additional/explanatory/direct-model-testing',
                label: 'Explanatory',
              },
              {
                to: 'additional/bestpractice/processtest',
                label: 'Best Practice',
              },
            ],
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/menditect/documentation',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
