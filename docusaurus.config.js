module.exports = {
  title: 'Grafik Programlama Notlarım',
  tagline: 'Grafik Programlama Üzerine Aldığım Şahsi Notlar',
  url: 'https://graphic.notlarim.dev',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'cevherkarakoc', // Usually your GitHub org/user name.
  projectName: 'graphic.notlarim', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: false,
    navbar: {
      title: 'Grafik Notlarım',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          href: 'https://github.com/cevherkarakoc/graphic.notlarim',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `CC0 1.0 Universal (CC0 1.0) Public Domain Dedication, Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '', 
          editUrl: 'https://github.com/cevherkarakoc/graphic.notlarim/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  stylesheets: [
    'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css',
  ],
};
