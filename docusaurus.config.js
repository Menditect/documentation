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
              label: '2.0.0',
              path: '/',
            },
          },
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
      require.resolve('./plugins/page-linker'),
      /** @type {import('./plugins/page-linker/options').PageLinkerOptions} */
      ({
        nonVersionedLinks: [
          { id: 'record-user-actions', content: '@site/additional/01-howtos/record-user-actions.md' },
          { id: 'privacy-policy', content: '@site/terms-of-use/pp.md' },
          { id: 'eula', content: '@site/terms-of-use/eula.md' },
          { id: 'sla', content: '@site/terms-of-use/sla.md' },
        ],
        versionedLinks: [
          { id: 'application-revision', content: 'application-revision.md', versions: 'ALL' },
          { id: 'test-configuration', content: 'test-configuration.md', versions: 'ALL' },
          { id: 'test-suite', content: 'test-suite.md', versions: 'ALL' },
          { id: 'test-run', content: 'test-run.md', versions: 'ALL' },
          { id: 'assert-attribute-value', content: 'assert-attribute-value.md', versions: 'ALL' },
          { id: 'assert-object-count', content: 'assert-object-count.md', versions: 'ALL' },
          { id: 'datavariation', content: 'datavariation.md', versions: 'ALL' },
          { id: 'test-case', content: 'test-case.md', versions: 'ALL' },
          { id: 'test-instruction', content: 'test-case.md', versions: 'ALL' },
          { id: 'teststep', content: 'Teststep/index.md', versions: 'ALL' },
        ],
      }),
    ],
    [
      require.resolve('@docusaurus/plugin-content-docs'),
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'additional',
        path: 'additional',
        routeBasePath: 'additional',
        sidebarPath: require.resolve('./sidebars.js'),
      }),
    ],
    [
      require.resolve('@docusaurus/plugin-content-docs'),
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'release-notes',
        path: 'release-notes',
        routeBasePath: 'release-notes',
        async sidebarItemsGenerator({ defaultSidebarItemsGenerator, ...args }) {
          const sidebarItems = await defaultSidebarItemsGenerator(args);
          return sortReleaseNotesSideBar(sidebarItems);
        },
      }),
    ],
    [
      require.resolve('@docusaurus/plugin-content-docs'),
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'terms-of-use',
        path: 'terms-of-use',
        routeBasePath: 'terms-of-use',
        sidebarPath: require.resolve('./sidebars.js'),
      }),
    ],
  ],

  themes: [
    [
      // @ts-ignore
      require.resolve('@easyops-cn/docusaurus-search-local'),
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
            position: 'left',
          },
          {
            label: 'Additional',
            position: 'left',
            items: [
              {
                to: 'additional/howtos/access-environment',
                label: 'How to?',
              },
              {
                to: 'additional/bestpractice/processtest',
                label: 'Best Practice',
              },
              {
                to: 'additional/blogs/direct-model-testing',
                label: 'Blogs',
              },
              {
                to: 'additional/knownissues/java-action-not-implemented',
                label: 'Known Issues',
              },
            ],
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            label: 'Terms of Use',
            position: 'right',
            items: [
              {
                to: 'terms-of-use/eula',
                label: 'End User License Agreement',
              },
              {
                to: 'terms-of-use/pp',
                label: 'Privacy Policy',
              },
              {
                to: 'terms-of-use/sla',
                label: 'Service Level Agreement',
              },
            ],
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
