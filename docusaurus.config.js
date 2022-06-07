// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

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
          routeBasePath: '/',
          exclude: [ 'refguidenew' ],                  //exclude directories that are WORK IN PROGRESS here
          sidebarPath: require.resolve('./sidebars.js'),
          // routeBasePath: '/',
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
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
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexBlog: false
      },
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
            href: 'https://github.com/menditect/documentation',
            label: 'GitHub',
            position: 'right',
          },
          // {
          //   type: 'docsVersionDropdown',
          // },
        ],
      },
      //  footer: {
      //   style: 'light',
      //   links: [],
      //    copyright: `Copyright © ${new Date().getFullYear()} Menditect`,
      //  },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
