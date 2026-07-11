export default {
    rewrites: {
    'README.md': 'index.md'
  },
  title: "RIVETFORCE",
  themeConfig: {
    nav: [
      { text: "首页", link: "/README" }
    ],
    sidebar: {
      "/首页/": [
        { text: "首页", link: "/README" }
      ]
    }
  }
}