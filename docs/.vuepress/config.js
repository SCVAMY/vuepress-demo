const configureWebpack = require("./webpack.base.conf");
const sidebar = {
  "/api/": [
    {
      title: "组件",
      collapsable: false,
      children: ["content-block/content-block"]
    },
    {
      title: "规范",
      collapsable: false,
      children: ["guide/LTE"]
    }
  ]
};

module.exports = {
  locales: {
    "/": {
      lang: "zh-CN",
      title: "components",
      description: "components"
    }
  },
  title: "components",
  description: "components",
  devServer: {
    proxy: {
      "/api": {
        target: "https://yth.dev.cscec82.com:9999",
        changeOrigin: true, // needed for virtual hosted sites
        ws: true // proxy websockets
      }
    }
  },
  configureWebpack,
  themeConfig: {
    lastUpdated: "最后更新时间",
    activeHeaderLinks: true,
    locales: {
      "/": {
        label: "简体中文",
        selectText: "选择语言",
        nav: [
          {
            text: "组件",
            link: "/api/"
          },
          {
            text: "规范",
            link: "/guide/"
          }
        ],
        sidebar
      }
    }
  }
};
