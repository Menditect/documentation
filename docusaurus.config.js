// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// @ts-ignore
const lightCodeTheme = require('prism-react-renderer/themes/github');
// @ts-ignore
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const sortReleaseNotesSideBar = require('./release-notes/sidebar');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MTA', //title is used when viewing older versions
  tagline: 'Go test it!',
  url: 'https://documentation.menditect.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'menditect',
  projectName: 'documentation',
  trailingSlash: false,

  scripts: [{ src: 'https://kit.fontawesome.com/1558fb2e32.js', crossorigin: 'anonymous' }],

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
              label: '2.4.0',
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
          { id: 'privacy-policy', content: '@site/legal/pp.md' },
          { id: 'eula', content: '@site/legal/eula.md' },
          { id: 'sla', content: '@site/legal/sla.md' },
        ],
        versionedLinks: [
          { id: 'application', content: 'application.md', versions: 'ALL' },
          { id: 'application-branch', content: 'application-branch.md', versions: 'ALL' },
          { id: 'application-instance', content: 'application-instance.md', versions: 'ALL' },
          { id: 'application-revision', content: 'application-revision.md', versions: 'ALL' },
          { id: 'archive', content: 'archive.md', versions: 'ALL' },
          { id: 'cicd', content: 'cicd.md', versions: 'ALL' },
          { id: 'assert-attribute', content: 'Assert/assert-attribute.md', versions: 'ALL' },
          { id: 'assert-microflow-output', content: 'Assert/assert-microflow-output.md', versions: 'ALL' },
          { id: 'assert-object-count', content: 'Assert/assert-object-count.md', versions: 'ALL' },
          { id: 'datavariation', content: 'datavariation.md', versions: 'ALL' },
          { id: 'snapshot', content: 'snapshot.md', versions: ['2.4.0'] },
          { id: 'test-case', content: 'test-case.md', versions: 'ALL' },
          { id: 'test-configuration', content: 'test-configuration.md', versions: 'ALL' },
          { id: 'test-instruction', content: 'test-instruction.md', versions: 'ALL' },
          { id: 'test-run', content: 'test-run.md', versions: 'ALL' },
          { id: 'test-suite', content: 'test-suite.md', versions: 'ALL' },
          { id: 'test-setting', content: 'test-setting.md', versions: 'ALL' },
          { id: 'Teststep', content: 'Teststep/index.md', versions: 'ALL' },
          { id: 'feedback-message', content: 'feedback-message.md', versions: 'ALL' },
          { id: 'generated-test', content: 'generated-test.md', versions: 'ALL' },
        ],
      }),
    ],
    [
      require.resolve('@docusaurus/plugin-content-docs'),
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'howto',
        path: 'additional/01-howtos',
        routeBasePath: 'additional/howtos',
        sidebarPath: require.resolve('./sidebars.js'),
      }),
    ],
    [
      require.resolve('@docusaurus/plugin-content-docs'),
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'bestpractice',
        path: 'additional/02-bestpractice',
        routeBasePath: 'additional/bestpractice',
        sidebarPath: require.resolve('./sidebars.js'),
      }),
    ],
    [
      require.resolve('@docusaurus/plugin-content-docs'),
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'knownissues',
        path: 'additional/04-knownissues',
        routeBasePath: 'additional/knownissues',
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
        id: 'legal',
        path: 'legal',
        routeBasePath: 'legal',
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
            docId: 'reference-guide',
            position: 'left',
            label: 'Reference guide',
          },
          {
            to: 'release-notes',
            label: 'Release notes',
            position: 'left',
          },
          {
            to: 'additional/howtos',
            label: 'How to?',
            position: 'left',
          },
          {
            to: 'additional/bestpractice',
            label: 'Best Practice',
            position: 'left',
          },
          {
            to: 'additional/knownissues',
            label: 'Known Issues',
            position: 'left',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            label: 'Legal',
            position: 'right',
            items: [
              {
                to: 'legal/eula',
                label: 'End User License Agreement',
              },
              {
                to: 'legal/pp',
                label: 'Privacy Policy',
              },
              {
                to: 'legal/sla',
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
        additionalLanguages: ['java', 'json', 'powershell'],
      },
    }),
};

module.exports = config;
