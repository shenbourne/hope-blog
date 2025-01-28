import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "目录",
    icon: "circle-info",
    link: "intro.md",
  },
  {
    text: "部署教程",
    icon: "pen-to-square",
    prefix: "/",
    children: [
      "local/",
      "cloud/",
      "personal/",
    ]
  },

  {
    text: "Wiki",
    icon: "pen-to-square",
    children: [
      {
        text: "Markdown语法教程",
        icon: "markdown",
        link: "https://wiki.shenbourne.com/Languages/Markdown/Markdown-Cheat-Sheet.html",
      },
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
