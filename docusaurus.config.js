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
  onBrokenMarkdownLinks: 'throw',
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
              label: '3.0',
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
          {
            id: 'privacy-policy',
            content: '@site/legal/pp.md'
          },
          {
            id: 'eula',
            content: '@site/legal/eula.md'
          },
          {
            id: 'sla',
            content: '@site/legal/sla.md'
          },
          {
            id: 'microflow-call-hierarchy-extension',
            content: '@site/additional/01-howtos/02-connect-mta/use-microflow-call-hierarchy-extension.md',
          },
          {
            id: 'import-plugin',
            content: '@site/docs/tools/mta-plugin.md',
          },
          {
            id: 'pat',
            content: '@site/additional/01-howtos/03-configure-mta/access-mendix-model.md',
          },
          {
            id: 'howto-byomeal',
            content: '@site/additional/01-howtos/01-host-and-deploy/manage-mta-deployment.md',
          },
          {
            id: 'generate-test',
            content: '@site/additional/01-howtos/04-design-tests/generate-test.md',
          },
          {
            id: 'ui-testing',
            content: '@site/additional/01-howtos/04-design-tests/frontend-test-with-mta.md',
          },
          {
            id: 'frontend-testing',
            content: '@site/additional/01-howtos/04-design-tests/frontend-test-with-mta.md',
          },
          {
            id: 'mta-intergration-mch-extension',
            content: '@site/additional/01-howtos/01-connect-mta/connect-menditect-extension-to-mta.md',
          },
        ],
        versionedLinks: [
          { id: 'application', content: 'mta/application.md', versions: 'ALL' },
          { id: 'api', content: 'api.md', versions: 'ALL' },
          { id: 'application-branch', content: 'mta/application-branch.md', versions: 'ALL' },
          { id: 'application-instance', content: 'mta/application-instance.md', versions: 'ALL' },
          { id: 'application-revision', content: 'mta/application-revision.md', versions: 'ALL' },
          { id: 'archive', content: 'mta/archive.md', versions: 'ALL' },
          { id: 'assert-attribute', content: 'mta/Assert/assert-attribute.md', versions: 'ALL' },
          { id: 'assert-microflow-output', content: 'mta/Assert/assert-microflow-output.md', versions: 'ALL' },
          { id: 'assert-object-count', content: 'mta/Assert/assert-object-count.md', versions: 'ALL' },
          { id: 'branch-subscription', content: 'mta/branch-subscription.md', versions: 'ALL' },
          { id: 'coverage-calculation', content: 'mta/coverage-calculation.md', versions: 'ALL' },
          { id: 'coverage-exception', content: 'mta/coverage-exception.md', versions: 'ALL' },
          { id: 'coverage-exclude-filter', content: 'mta/coverage-exclude-filter.md', versions: 'ALL' },
          { id: 'coverage-goal', content: 'mta/coverage-goal.md', versions: 'ALL' },
          { id: 'datavariation', content: 'mta/datavariation.md', versions: 'ALL' },
          { id: 'snapshot', content: 'mta/snapshot.md', versions: 'ALL' },
          { id: 'generated-test', content: 'mta/recording.md', versions: 'ALL' },
          { id: 'test-case', content: 'mta/test-case.md', versions: 'ALL' },
          { id: 'test-configuration', content: 'mta/test-configuration.md', versions: 'ALL' },
          { id: 'test-instruction', content: 'mta/test-instruction.md', versions: 'ALL' },
          { id: 'test-run', content: 'mta/test-run.md', versions: 'ALL' },
          { id: 'test-suite', content: 'mta/test-suite.md', versions: 'ALL' },
          { id: 'test-setting', content: 'mta/test-setting.md', versions: 'ALL' },
          { id: 'Teststep', content: 'mta/Teststep/index.md', versions: 'ALL' },
          { id: 'feedback-message', content: 'mta/feedback-message.md', versions: 'ALL' },
          { id: 'construction-error', content: 'mta/construction-error.md', versions: 'ALL' },
          { id: 'mta-plugin', content: 'tools/mta-plugin.md', versions: 'ALL' },
        ],
      }),
    ],
    [
      require.resolve('@docusaurus/plugin-content-docs'),
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'installation',
        path: 'additional/00-installation',
        routeBasePath: 'additional/installation',
        sidebarPath: require.resolve('./sidebars.js'),
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
        id: 'knowledge-base',
        path: 'additional/03-knowledge-base',
        routeBasePath: 'additional/knowledge-base',
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
            to: 'additional/installation',
            label: 'Installation',
            position: 'left',
          },
          {
            label: 'Reference guide',
            to: '/',
            position: 'left',
            items: [
              {
                type: 'docsVersion',
                to: '/2.10.0',
                label: '2.10 Reference guide',
              }
            ]
          },
          {
            to: 'release-notes',
            label: 'Release notes',
            position: 'left',
          },
          {
            to: 'additional/howtos',
            label: 'How to?',
            position: 'right',
          },
          {
            to: 'additional/bestpractice',
            label: 'Best Practice',
            position: 'right',
          },
          {
            to: 'additional/knowledge-base',
            label: 'Knowledge base',
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
