// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer")
const lightTheme = themes.github
const darkTheme = themes.dracula

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Tunez",
  tagline: "The React audio player you've been ",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://tunez.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "tunez", // Usually your GitHub org/user name.
  projectName: "tunez", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/mvhmxud/tunez/tree/main/docs/",
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css"), require.resolve("./src/css/navbar.css") , require.resolve("./src/css/footer.css")],
        },
      }), 
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/tunez-social-card.jpg",
      navbar: {
        title: "Tunez",
        logo: {
          alt: "Tunez Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "right",
            label: "Docs",
          },
          {
            href: "https://github.com/mvhmxud/tunez",
            label: "GitHub",
            position: "right",
          },
          {
            type: "html",
            position: "right",
            value: '<a href="https://www.npmjs.com/package/tunez"  class="navbar__version">v1.0.0-Beta </a>',
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Introduction",
                to: "/docs/intro",
              },
              {
                label: "Getting Started",
                to: "/docs/getting-started",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/tunez",
              },
              {
                label: "Discord",
                href: "https://discord.gg/tunez",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/tunezplayer",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/mvhmxud/tunez",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Tunez. Built with Docusaurus.`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
}

module.exports = config

