---
title: VuePress-theme-hope2 部署个人网站
icon: page
order: 2
category:
  - 安装教程
tags:
  - VuePress
  - GitHub
  - Git
cover: https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-7805ce56c9ab4c47a392f782f3f0a509~tplv-k3u1fbpfcp-zoom-in-crop-mark_1512_0_0_0.webp
---
VuePress 是一个以 Markdown 为中心的静态网站生成器。好处是可以使用 Markdown 来书写内容文档或者博客。

VuePress 诞生的初衷是为了支持 Vue.js 及其子项目的文档需求。

在明确你的目标之后，先不着急立马搭建项目。

## 一、你喜欢哪个主题

因为VuePress除了默认的主题外，提供了扩展主题、扩展插件的能力，不同的主题又组织了不同的插件集合来完成开箱即用的功能，

所以，你首先应该使用哪款主题作为你的个人完整风格。

比较热门的主题有：

- [vuepress默认主题](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fvuejs%2Fvuepress "https://github.com/vuejs/vuepress") 21.7k⭐
- [vuepress-theme-hope](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fvuepress-theme-hope%2Fvuepress-theme-hope "https://github.com/vuepress-theme-hope/vuepress-theme-hope") 1.4k⭐
- [vuepress-theme-reco，（2.0还在测试阶段）](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fvuepress-reco%2Fvuepress-theme-reco-1.x "https://github.com/vuepress-reco/vuepress-theme-reco-1.x") 1.6k⭐
- [vuepress-theme-vdoing](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fxugaoyi%2Fvuepress-theme-vdoing "https://github.com/xugaoyi/vuepress-theme-vdoing") 3.5k⭐

不同主题的之间的最明显的差异就是默认的样式不同，其次就是默认提供的功能不同。

我们看看各个主题默认的样式

### 1. [默认主题](https://vuepress.vuejs.org/) 案例

vue系列早先版本的官网大多数都是默认主题

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-7805ce56c9ab4c47a392f782f3f0a509~tplv-k3u1fbpfcp-zoom-in-crop-mark_1512_0_0_0.webp)

### 2. [vuepress-theme-hope](https://theme-hope.vuejs.press/) 案例 

蝉沐风的码场：[www.chanmufeng.com/](https://www.chanmufeng.com/)

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-aa13444c25f46fc1028f935fab84932c_MD5.jpeg)

更多案例：[真实项目 | vuepress-theme-hope](https://theme-hope.vuejs.press/zh/demo/projects.html#%E4%BD%BF%E7%94%A8-vuepress-theme-hope-%E7%9A%84%E6%96%87%E6%A1%A3)

### 3. [vuepress-theme-reco](http://v1.vuepress-reco.recoluan.com/) 案例 

Chivas-Regal的博客：[Chivas-Regal](https://tech.chivas-regal.top/)

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-5f5f76ddcbbddc12e11ec888c99f06d3_MD5.jpeg)

更多案例：[优秀博客案例 | vuepress-theme-reco](http://v1.vuepress-reco.recoluan.com/views/other/theme-example.html)

### 4. [vuepress-theme-reco 2.0](https://vuepress-theme-reco.recoluan.com/) 案例 

 SlovinG's Blog：[SlovinG's Blog](https://sloving.top/)

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-a4fc5d567fcf3f8ef1c439f05e75aa30_MD5.jpeg)

更多案例：[案例 | vuepress-reco](https://vuepress-theme-reco.recoluan.com/docs/others/examples.html)

### 5. [vuepress-theme-vdoing](https://doc.xugaoyi.com/) 案例 

Evan's blog：[Evan's blog](https://xugaoyi.com/)

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-6f1884a664145f9a4a2117cd5271943d_MD5.jpeg)

更多案例：[案例 | vuepress-theme-vdoing](https://doc.xugaoyi.com/pages/5d571c/#%E7%89%B9%E5%88%AB%E7%94%A8%E6%88%B7)

大家可自行选择主题，此处以vuepress-theme-hope为例搭建博客。

主要功能是新增了一些图标、新增了Tag、新增了时间轴等常用功能，

缺点是：功能还不够丰富，图标比较少，无法有效添加摘要、阅读时间、字数统计等功能。

相反，vuepress-theme-hope 这些做的都不错，成为我新的选择。

## 二、本地部署

### 1. 运行环境设置

#### ① 编辑器

一个方便快捷的编辑器在博客的搭建过程是功不可没的。推荐用VSCode编写和运行VuePress项目

1. 在[下载界面](https://code.visualstudio.com/)点击左侧的蓝色按钮，选择你的操作系统，并下载。

2. 双击安装包打开，同意用户协议。

3. 在下载过程中 ，请务必**全选**下列选项：

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-2ee74344037e2e7951a0807c042cd89c_MD5.jpeg)

4. 在 VS Code 初次启动后，若未提前安装 Git 可能会提示未找到 Git 软件，忽略即可。

5. 推荐立即执行简体中文扩展安装以保证界面语言为简体中文。操作方法：

	1. 单击左侧导航栏的“Extensions”按钮。
	2. 在弹出的输入框中输入“chinese”。
	3. 点击第一个选项卡上的“Install”按钮。若是繁体用户，则应点击第二个选项卡上的“Install”按钮。
	4. 在下载完成后，左下角会出现弹窗，点击弹窗中的“Change Language and Restart”，等待重启后即安装完毕。

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-c046280014369794e10d2751ecaaf526_MD5.jpeg)

> [!tip]
>当你安装 VS Code 并第一次打开的时候，VS Code 会自动检测当前系统语言并在右下角推荐你安装对应语言的扩展，点击按钮即可自动安装。

#### ② Node.js

> [!Introduce]
> [Node.js®open in new window](https://nodejs.org/zh-cn/) 是一个基于 [Chrome V8 引擎open in new window](https://v8.dev/) 的 JavaScript 运行时环境。

你需要下载并安装最新的长期维护版。

1. 点击 [下载地址](https://nodejs.org/en) 左侧的绿色按钮 (LTS)。

2. 运行安装包，保持全部默认即可

> [!important]
>如果你真的是个小白，请不要改默认安装目录，以免你在出现问题时找不到对应的文件夹。

Node.js 本身只会占据几十 M 的空间!

#### ③ pnpm

在你安装 Node.js 之后，在终端中输入下列命令启用 corepack:

```shell
corepack enable
```

> [!tip]
>我们推荐你使用 pnpm 作为项目管理器，因为 VuePress 和 VuePress Theme Hope 都是通过 pnpm 来管理依赖的。
>
>pnpm 的一些功能可以保证你拥有正确的依赖，并且它能加速安装。

但是如果在使用pnpm安装的时候出现了错误，改为使用npm是一种不赖的选择

### 2. 搭建项目

#### ① 选择项目位置

为了避免偶然间触发一些奇怪的问题，而你自己不会解决，请尽量避免使用包含中文文字、表情符号或空格的文件路径 (不好的例子: `C:\Users\小张\Desktop\VuePress 项目\Hope 主题❤️\`)。

建议使用纯英文路径 (好的例子: `D:\projects\vuepress-theme-hope\`)

#### ② 初始化项目

如果你选择了一个主题，请务必使用该主题提供的脚手架工具创建项目。这样可以减少很多配置上的麻烦。

在选定的文件夹中打开终端。

::: tabs

@tab 在Mac中打开终端

右键点击文件夹，然后选择”New Terminal at Folder”。

@tab 在Ubuntu中打开终端

右键点击文件夹，然后选择”Open in Terminal”。

@tab:active 在Windows中打开终端

使用文件管理器打开对应文件夹，然后在上方的地址栏中输入 `cmd` 并按下回车。

:::

::: code-tabs#shell

@tab pnpm

```shell
pnpm create vuepress-theme-hope my-docs
```

@tab yarn

```shell
yarn create vuepress-theme-hope my-docs
```

@tab:active npm

```shell
npm init vuepress-theme-hope my-docs
```

:::

::: tip 文件夹参数

这里的 `my-docs` 是一个参数，代表 VuePress Theme Hope 项目的文件夹名称，在本教程中，我们将项目生成至当前目录下的 `my-docs` 文件夹。

如果你有需求，你可以更改此参数来使用一个新文件夹名称。

:::

::: tip 中文显示

如果你的英语很不好，请在第一次选择中通过键盘 `↓` 选择 `简体中文` 并回车来在后续流程中使用中文进行显示。

:::

::: tip 开发服务器

如果你在模板初始化成功后选择立即启动开发服务器，稍等片刻，你就可以在浏览器地址栏输入 `localhost:8080/` 访问开发服务器了。

:::

```js title="output"
Need to install the following packages:
	create-vuepress-theme-hope@2.0.0-beta.233 
Ok to proceed? (y) y
? Select a language to display / 选择显示语言 简体中文
? 选择包管理器 npm
? 你想要使用哪个打包器？ vite
生成 package.json...
? 设置应用名称 shenb-blog
? 设置应用版本号 2.0.0
? 设置应用描述 A project of vuepress-theme-hope
? 设置协议 MIT
? 项目需要用到多语言么？ No
? 是否需要一个自动部署文档到 GitHub Pages 的工作流？ Yes
? 你想要创建什么类型的项目？ blog
生成模板...
? 选择你想使用的源 当前源
安装依赖...
这可能需要数分钟，请耐心等待.
我们无法正确输出子进程的进度条，所以进程可能会看似未响应
added 293 packages in 26s
模板已成功生成!
```

初始化目录结构如下

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-d6c8fb22be4f418abf38ef344030fd7c~tplv-k3u1fbpfcp-zoom-in-crop-mark_1512_0_0_0.webp)

### 3.1 首页配置

其中，src 目录下的 `README.md`即为博客或者文档的首页。

等待下载完毕，执行 `npm run docs:dev`

打开页面，可以看到博客的首页如下：

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-adc22b537dca1536f0fb1e74f80eca9e_MD5.jpeg)

可以通过设置`heroFullScreen: false`，关闭hero背景全屏。

下滑之后文章的列表如下：

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-715154480d5ac408e5dad8b62398cd75_MD5.jpeg)

文章的列表来自于项目中所有的markdown文件，你可以在每个md文件的frontmatter中设置文章的标题、封面、分类、标签、日期、是否在文章列表中显示。

```md
---
title: 🚀🚀vue3自定义指令实践
isTimeLine: true
date: 2023-07-03
category:
  - 前端
tag:
  - JavaScript
  - Vue
---
```


通过设置`article` 为 `false`将文章在列表中排除。

站点的基本信息、顶部的hero信息、项目链接、底部的footer信息都可以在`README.md`中配置。

我的配置如下：具体可以参考：[博客主页 Frontmatter 配置 | vuepress-theme-hope](https://theme-hope.vuejs.press/zh/config/frontmatter/blog-home.html)

```
home: false
layout: BlogHome
icon: home
title: 首页
heroImage: /logo.svg
heroText: 萌萌哒草头将军
heroFullScreen: false
tagline: 千里之行，始于足下
projects:
  - icon: react
    name: RaETable
    desc: 一款开箱即用的antd表格组件库
    link: https://mmdctjj.github.io/raetable
  - icon: setting
    name: console-loader
    desc: 自动清除其他开发者console的loader
    link: https://github.com/mmdctjj/remove-others-console-loader


footer: 萌萌哒草头将军

```

### 3.2 导航栏配置

在开始之前你需要明确，你的导航栏需求是啥样的（大白话就是哪些栏目需要在侧边栏展示，哪些在侧边栏展示）

我的思路是，根据文章的分类，将相同的分类文章放在同一目录下，每个目录对应一个导航栏目。

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-afe5a87db78a22a56906383692d3af57_MD5.jpeg)

导航栏的相关设置在 `navbar.ts`文件中。

默认为字符串，对应 src 目录下的文件路径，你可以省略 `.md` 扩展名，以 `/` 结尾的路径会被推断为 `/README.md`。

例如：

```js title="\src\.vuepress\navbar.ts"
import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/", // 对应首页，即src/README.md
  '/react/', // 对应src/react/README.md
]);

```

也可以是对象，基本格式如下：


```js title="\src\.vuepress\navbar.ts"
import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/", // 对应 src/posts 目录
    children: [
      {
        text: "苹果",
        icon: "pen-to-square",
        prefix: "apple/", // 对应 src/posts/apple 目录
        children: [
          { text: "苹果1", icon: "pen-to-square", link: "1" },
          { text: "苹果2", icon: "pen-to-square", link: "2" },
          "3",
          "4",
        ],
      },
      "tomato",
      "strawberry",
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/", // link代码外链地址
  },
]);

```

我的设置为：

```js title="\src\.vuepress\navbar.ts"
import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: 'React系列',
    icon: 'react',
    link: '/react/'
  },
  {
    text: 'Vue系列',
    icon: 'vue',
    link: '/vue/'
  },
  {
    text: 'Vite系列',
    icon: 'tool',
    link: '/vite/'
  },
  {
    text: '新框架尝鲜系列',
    icon: 'geometry',
    link: '/framework/'
  },
  {
    text: '杂谈',
    icon: 'article',
    link: '/posts/'
  },
  {
    text: '标签',
    icon: 'tag',
    link: '/tag/javascript/'
  },
  {
    text: '分类',
    icon: 'categoryselected',
    link: '/category/前端/'
  },
  {
    text: '时间轴',
    icon: 'time',
    link: '/timeline/'
  },
]);

```

我将一些默认的路由也加进了导航栏配置中，比如时间轴、标签、分类等。

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-9cc52ff1585e6e6202033698b3484606_MD5.jpeg)

### 3.3 侧边栏配置

侧边栏的配置在 `sidebar.ts`中

侧边栏的配置，我们可以分两种情况：全局导航栏、根据每个导航栏栏目分离式导航栏。

#### ① 全局侧边栏配置

你可以设置侧边栏导航和导航栏的路由一一对应，这样就相当于是全局的侧边栏。

对于侧边栏的具体条目，可以通过设置`children: "structure"`根据当前目录下的文件名称自动生成。


```js title="\src\.vuepress\sidebar.ts"
import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "React系列",
      icon: "react",
      prefix: "react/",
      children: "structure",
    },
    {
      text: "Vue系列",
      icon: "vue",
      prefix: "vue/",
      children: "structure",
    },
    {
      text: "Vite系列",
      icon: "tool",
      prefix: "vite/",
      children: "structure",
    },
    {
      text: "新框架尝鲜系列",
      icon: "geometry",
      prefix: "framework/",
      children: "structure",
    },
    {
      text: "杂谈",
      icon: "study",
      prefix: "posts/",
      children: "structure",
    },
    // "intro",
    // "slides",
  ],
});


```

此时页面侧边栏如下图

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-750678252dca76d05e961648cd4c4603_MD5.jpeg)

#### ② 分离式导航栏

分离式菜单配置更简洁，如下所示：当设置`structure`时，默认根据目录下的文件自动生成侧边栏。

```js title="\src\.vuepress\sidebar.ts"
import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/react/":  "structure",
  "/framework/":  "structure",
  "/vite/":  "structure",
  "/vue/":  "structure",
  "/posts/":  "structure",
});

```

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-cc16a07b5d6cdcc2ce8bd805dfe53dd2_MD5.jpeg)

#### ③ 自动生成目录页面

另外，我们还根据文件夹下的文件列表自动为每个文件夹生成目录页面。我们只需要在`theme.ts`中添加如下设置。


```js title="\src\.vuepress\theme.ts"
plugins: {
    autoCatalog: {
      index: true
    },
}
```

就可以自动生成目录页面了。例如：

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-9b379d0629ac655174377c76c8f00c1d_MD5.jpeg)


### 3.4 [搜索](https://theme-hope.vuejs.press/zh/guide/feature/search.html)功能

该主题内置了几种常见搜索插件的支持，你只需下载你喜欢的插件和配置文件即可，我使用的是`vuepress-plugin-search-pro`插件，配置参考的官方配置。

1. 安装 `vuepress-plugin-search-pro`

::: code-tabs#shell

@tab pnpm

```sh
pnpm add -D vuepress-plugin-search-pro
```

@tab yarn

```sh
yarn add -D vuepress-plugin-search-pro
```

@tab:active

```sh
npm i -D vuepress-plugin-search-pro
```

:::

2. 在主题选项中配置 `plugins.searchPro`。

你可以将 `plugins.searchPro` 设置为 `true` 来直接启用它，或者将其设置为一个对象来自定义插件。

%%
```js
plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category as any,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag as any,
          formatter: "标签：$content",
        },
      ],
    }),
  ]

```
%%

```js title="\src\.vuepress\config.ts"
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  theme: hopeTheme({
    plugins: {
      searchPro: true,
      // searchPro: {
      //   插件选项
      // },
    },
  }),
});

```
效果如下：

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-fb8aa9698875c3683416ea56928db52b_MD5.jpeg)

## 三、使用Git上传到GitHub

### 1.1 安装git

1. 打开[Windows下载界面](https://git-scm.com/download/win)，点击正文最前面的“Click here to download”超链接下载git（或者点击[此处](https://github.com/git-for-windows/git/releases/download/v2.43.0.windows.1/Git-2.43.0-64-bit.exe)直接下载git）。

::: tip

其他操作系统请去[Git官网](https://git-scm.com/)自行选择下载版本

:::

2. 双击安装程序，其中选项全部保持默认即可。

3. 安装完成后，在任一文件夹右键打开菜单，如果出现`Open Git GUI here`和`Open Git Bash here`，则说明安装成功。

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-fdab1192e7c25f6e4e916c95e3209318_MD5.jpeg)

### 1.2 将选定仓库初始化为git仓库

1. 在指定文件夹空白处右键鼠标，单击`Open Git Bash here`打开git终端，输入`git init`

```shell
git init
```

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-b06e48a1494862051793abd10fdeb2dc_MD5.jpeg)

文件夹中出现`.git`文件，则说明初始化成功

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-956ea4c7e5ae605e24b3fd2b4c9d1640_MD5.jpeg)

### 1.3 将本地代码上传至git版本库

1. 将本地代码放入暂存区，输入`git add .`

```shell
git add .
```

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-40d6636cd494153fa6a17508ccf0ee00_MD5.jpeg)

检查：输入`git status`文件都显示绿色即成功

```shell
git status
```

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-b6afea351cbbf9aa195ca0371595b1d7_MD5.jpeg)

2. 输入`git commit -m '提交信息'`把暂存区文件放到版本库中

```shell
git commit -m '提交信息'
```

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-c49d04ce6bec29d45d13203ba703ad5c_MD5.jpeg)

如果没有创建用户信息，则会让你创建一个，账户密码随便填即可。例：

```shell
git config --global user.email "<>"
```

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-b6c6f0089f486bf05aea89f9d2fa0204_MD5.jpeg)

### 1.4 将本地git库与GitHub库连接

1. 创建新的GitHub库

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-92418a072cf36f81ea35b827074ae6e3_MD5.jpeg)

::: tip
 
为方便其他操作，一般建议将库命名为`<username>.github.io`（如图）

:::

2. 如果第一次使用，需要部署公钥(如果在最后一步将代码提交到github出现因为公钥报错，那就新建一个公钥)

生成公钥指令：

```shell
ssh-keygen -t rsa -C "*@*.com"    #邮箱可以任意填写
```

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-a52270fa564e3a1af368c77e6689dab6_MD5.jpeg)

查看公钥指令：

```shell
cat ~/.ssh/id_rsa.pub    #查看之后copy 
```

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-2b7cec9fa59c3303a4a3120cb8378b31_MD5.jpeg)

GitHub线上添加公钥：项目仓库 > Settings > Deploy keys > Add deploy key

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-a1d0113f27c075b2779427922a3b2bd4_MD5.jpeg)

注意勾选“Allow write access”

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-8a1f8430f1ec199f9b9ee6bc023bf38f_MD5.jpeg)

3. 本地仓库与远程仓库建立连接，添加远程源，这里我们采用ssh协议的remote源

```shell
git remote add origin <url>    #origin是远程源的名字
```

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-80c02e42c1030d27db3e94fc9dd5009f_MD5.jpeg)

### 2. 提交和拉取远程仓库

::: tip

 origin是远程源的源名，可以自定义；master是分支名，是默认的主分支

:::

1. 提交本地仓库代码到远程仓库 \*若本地仓库名称改为“main”，则应将下文代码中的“master”改为“main”

```shell
git push -u origin master    
```

2. 拉取远程仓库 \*若本地仓库名称改为“main”，则应将下文代码中的“master”改为“main”

```shell
git pull origin master
```

::: details Git错误 error: src refspec xxx does not match any / error: failed to push some refs to 解决方法

**错误原因**：GitHub仓库和本地Git仓库默认名不同。

（由于受到"Black Lives Matter"运动的影响，GitHub 从今年 10 月 1 日起，在该平台上创建的所有新的源代码仓库将默认被命名为 “main”，而不是原先的"master"。）

**解决方法**：把本地的 master 仓库名称修改为远端的 main。命令如下：

```shell
git branch -m oldBranchName newBranchName
```

:::

::: details Git错误 error：src refspec master does not match any 解决方法

**错误原因**：

- 本地需要提交的目录中存在空目录

- 本地的origin和remote origin/master 没有建立关联

**解决方法**：

- 针对第一种错误情况，应在空目录中创建项目

```shell
touch README
git add README
git commit -m "change"
git push origin master
```

- 针对第二种错误情况，应重新建立本地和远程关联

```shell
git remote remove origin
git remote add origin git@github.com:XXX/XXX.github.io.git
git push origin master
```

:::

### 3. git 回滚到指定版本并推送到远程分支

-- 本地分支回滚到指定版本 

```shell
git reset --hard <commit ID号> 
```

::: tip 获取commit ID号的方法

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/Use-Git-to-Submit-Local-Code-to-GitHub-b04a8595f9db44dfcb62727c10636f58_MD5.jpeg)

复制下来的ji即为该版本的commit ID号

-- 强制推送到远程分支 

```shell
git push -f origin <branch name>
```

:::

出处：

[提交本地代码到github - 只会玩辅助 - 博客园](https://www.cnblogs.com/wangcuican/p/12522239.html)

[Git 常见错误 之 error: src refspec xxx does not match any / error: failed to push some refs to 简单解决方法\_error: src refspec master does not match any-CSDN博客](https://blog.csdn.net/u014361280/article/details/109703556)

## 四、本地部署

### 1. 运行环境设置

#### ① 编辑器

一个方便快捷的编辑器在博客的搭建过程是功不可没的。推荐用VSCode编写和运行VuePress项目

1. 在[下载界面](https://code.visualstudio.com/)点击左侧的蓝色按钮，选择你的操作系统，并下载。

2. 双击安装包打开，同意用户协议。

3. 在下载过程中 ，请务必**全选**下列选项：

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-2ee74344037e2e7951a0807c042cd89c_MD5.jpeg)

4. 在 VS Code 初次启动后，若未提前安装 Git 可能会提示未找到 Git 软件，忽略即可。

5. 推荐立即执行简体中文扩展安装以保证界面语言为简体中文。操作方法：

	1. 单击左侧导航栏的“Extensions”按钮。
	2. 在弹出的输入框中输入“chinese”。
	3. 点击第一个选项卡上的“Install”按钮。若是繁体用户，则应点击第二个选项卡上的“Install”按钮。
	4. 在下载完成后，左下角会出现弹窗，点击弹窗中的“Change Language and Restart”，等待重启后即安装完毕。

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-c046280014369794e10d2751ecaaf526_MD5.jpeg)

> [!tip]
>当你安装 VS Code 并第一次打开的时候，VS Code 会自动检测当前系统语言并在右下角推荐你安装对应语言的扩展，点击按钮即可自动安装。

#### ② Node.js

> [!Introduce]
> [Node.js®open in new window](https://nodejs.org/zh-cn/) 是一个基于 [Chrome V8 引擎open in new window](https://v8.dev/) 的 JavaScript 运行时环境。

你需要下载并安装最新的长期维护版。

1. 点击 [下载地址](https://nodejs.org/en) 左侧的绿色按钮 (LTS)。

2. 运行安装包，保持全部默认即可

> [!important]
>如果你真的是个小白，请不要改默认安装目录，以免你在出现问题时找不到对应的文件夹。

Node.js 本身只会占据几十 M 的空间!

#### ③ pnpm

在你安装 Node.js 之后，在终端中输入下列命令启用 corepack:

```shell
corepack enable
```

> [!tip]
>我们推荐你使用 pnpm 作为项目管理器，因为 VuePress 和 VuePress Theme Hope 都是通过 pnpm 来管理依赖的。
>
>pnpm 的一些功能可以保证你拥有正确的依赖，并且它能加速安装。

但是如果在使用pnpm安装的时候出现了错误，改为使用npm是一种不赖的选择

### 2. 搭建项目

#### ① 选择项目位置

为了避免偶然间触发一些奇怪的问题，而你自己不会解决，请尽量避免使用包含中文文字、表情符号或空格的文件路径 (不好的例子: `C:\Users\小张\Desktop\VuePress 项目\Hope 主题❤️\`)。

建议使用纯英文路径 (好的例子: `D:\projects\vuepress-theme-hope\`)

#### ② 初始化项目

如果你选择了一个主题，请务必使用该主题提供的脚手架工具创建项目。这样可以减少很多配置上的麻烦。

在选定的文件夹中打开终端。

::: tabs

@tab 在Mac中打开终端

右键点击文件夹，然后选择”New Terminal at Folder”。

@tab 在Ubuntu中打开终端

右键点击文件夹，然后选择”Open in Terminal”。

@tab:active 在Windows中打开终端

使用文件管理器打开对应文件夹，然后在上方的地址栏中输入 `cmd` 并按下回车。

:::

::: code-tabs#shell

@tab pnpm

```shell
pnpm create vuepress-theme-hope my-docs
```

@tab yarn

```shell
yarn create vuepress-theme-hope my-docs
```

@tab:active npm

```shell
npm init vuepress-theme-hope my-docs
```

:::

::: tip 文件夹参数

这里的 `my-docs` 是一个参数，代表 VuePress Theme Hope 项目的文件夹名称，在本教程中，我们将项目生成至当前目录下的 `my-docs` 文件夹。

如果你有需求，你可以更改此参数来使用一个新文件夹名称。

:::

::: tip 中文显示

如果你的英语很不好，请在第一次选择中通过键盘 `↓` 选择 `简体中文` 并回车来在后续流程中使用中文进行显示。

:::

::: tip 开发服务器

如果你在模板初始化成功后选择立即启动开发服务器，稍等片刻，你就可以在浏览器地址栏输入 `localhost:8080/` 访问开发服务器了。

:::

```js title="output"
Need to install the following packages:
	create-vuepress-theme-hope@2.0.0-beta.233 
Ok to proceed? (y) y
? Select a language to display / 选择显示语言 简体中文
? 选择包管理器 npm
? 你想要使用哪个打包器？ vite
生成 package.json...
? 设置应用名称 shenb-blog
? 设置应用版本号 2.0.0
? 设置应用描述 A project of vuepress-theme-hope
? 设置协议 MIT
? 项目需要用到多语言么？ No
? 是否需要一个自动部署文档到 GitHub Pages 的工作流？ Yes
? 你想要创建什么类型的项目？ blog
生成模板...
? 选择你想使用的源 当前源
安装依赖...
这可能需要数分钟，请耐心等待.
我们无法正确输出子进程的进度条，所以进程可能会看似未响应
added 293 packages in 26s
模板已成功生成!
```

初始化目录结构如下

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-d6c8fb22be4f418abf38ef344030fd7c~tplv-k3u1fbpfcp-zoom-in-crop-mark_1512_0_0_0.webp)

### 3.1 首页配置

其中，src 目录下的 `README.md`即为博客或者文档的首页。

等待下载完毕，执行 `npm run docs:dev`

打开页面，可以看到博客的首页如下：

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-adc22b537dca1536f0fb1e74f80eca9e_MD5.jpeg)

可以通过设置`heroFullScreen: false`，关闭hero背景全屏。

下滑之后文章的列表如下：

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-715154480d5ac408e5dad8b62398cd75_MD5.jpeg)

文章的列表来自于项目中所有的markdown文件，你可以在每个md文件的frontmatter中设置文章的标题、封面、分类、标签、日期、是否在文章列表中显示。

```md
---
title: 🚀🚀vue3自定义指令实践
isTimeLine: true
date: 2023-07-03
category:
  - 前端
tag:
  - JavaScript
  - Vue
---
```


通过设置`article` 为 `false`将文章在列表中排除。

站点的基本信息、顶部的hero信息、项目链接、底部的footer信息都可以在`README.md`中配置。

我的配置如下：具体可以参考：[博客主页 Frontmatter 配置 | vuepress-theme-hope](https://theme-hope.vuejs.press/zh/config/frontmatter/blog-home.html)

```
home: false
layout: BlogHome
icon: home
title: 首页
heroImage: /logo.svg
heroText: 萌萌哒草头将军
heroFullScreen: false
tagline: 千里之行，始于足下
projects:
  - icon: react
    name: RaETable
    desc: 一款开箱即用的antd表格组件库
    link: https://mmdctjj.github.io/raetable
  - icon: setting
    name: console-loader
    desc: 自动清除其他开发者console的loader
    link: https://github.com/mmdctjj/remove-others-console-loader


footer: 萌萌哒草头将军

```

### 3.2 导航栏配置

在开始之前你需要明确，你的导航栏需求是啥样的（大白话就是哪些栏目需要在侧边栏展示，哪些在侧边栏展示）

我的思路是，根据文章的分类，将相同的分类文章放在同一目录下，每个目录对应一个导航栏目。

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-afe5a87db78a22a56906383692d3af57_MD5.jpeg)

导航栏的相关设置在 `navbar.ts`文件中。

默认为字符串，对应 src 目录下的文件路径，你可以省略 `.md` 扩展名，以 `/` 结尾的路径会被推断为 `/README.md`。

例如：

```js title="\src\.vuepress\navbar.ts"
import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/", // 对应首页，即src/README.md
  '/react/', // 对应src/react/README.md
]);

```

也可以是对象，基本格式如下：


```js title="\src\.vuepress\navbar.ts"
import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/", // 对应 src/posts 目录
    children: [
      {
        text: "苹果",
        icon: "pen-to-square",
        prefix: "apple/", // 对应 src/posts/apple 目录
        children: [
          { text: "苹果1", icon: "pen-to-square", link: "1" },
          { text: "苹果2", icon: "pen-to-square", link: "2" },
          "3",
          "4",
        ],
      },
      "tomato",
      "strawberry",
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/", // link代码外链地址
  },
]);

```

我的设置为：

```js title="\src\.vuepress\navbar.ts"
import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: 'React系列',
    icon: 'react',
    link: '/react/'
  },
  {
    text: 'Vue系列',
    icon: 'vue',
    link: '/vue/'
  },
  {
    text: 'Vite系列',
    icon: 'tool',
    link: '/vite/'
  },
  {
    text: '新框架尝鲜系列',
    icon: 'geometry',
    link: '/framework/'
  },
  {
    text: '杂谈',
    icon: 'article',
    link: '/posts/'
  },
  {
    text: '标签',
    icon: 'tag',
    link: '/tag/javascript/'
  },
  {
    text: '分类',
    icon: 'categoryselected',
    link: '/category/前端/'
  },
  {
    text: '时间轴',
    icon: 'time',
    link: '/timeline/'
  },
]);

```

我将一些默认的路由也加进了导航栏配置中，比如时间轴、标签、分类等。

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-9cc52ff1585e6e6202033698b3484606_MD5.jpeg)

### 3.3 侧边栏配置

侧边栏的配置在 `sidebar.ts`中

侧边栏的配置，我们可以分两种情况：全局导航栏、根据每个导航栏栏目分离式导航栏。

#### ① 全局侧边栏配置

你可以设置侧边栏导航和导航栏的路由一一对应，这样就相当于是全局的侧边栏。

对于侧边栏的具体条目，可以通过设置`children: "structure"`根据当前目录下的文件名称自动生成。


```js title="\src\.vuepress\sidebar.ts"
import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "React系列",
      icon: "react",
      prefix: "react/",
      children: "structure",
    },
    {
      text: "Vue系列",
      icon: "vue",
      prefix: "vue/",
      children: "structure",
    },
    {
      text: "Vite系列",
      icon: "tool",
      prefix: "vite/",
      children: "structure",
    },
    {
      text: "新框架尝鲜系列",
      icon: "geometry",
      prefix: "framework/",
      children: "structure",
    },
    {
      text: "杂谈",
      icon: "study",
      prefix: "posts/",
      children: "structure",
    },
    // "intro",
    // "slides",
  ],
});


```

此时页面侧边栏如下图

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-750678252dca76d05e961648cd4c4603_MD5.jpeg)

#### ② 分离式导航栏

分离式菜单配置更简洁，如下所示：当设置`structure`时，默认根据目录下的文件自动生成侧边栏。

```js title="\src\.vuepress\sidebar.ts"
import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/react/":  "structure",
  "/framework/":  "structure",
  "/vite/":  "structure",
  "/vue/":  "structure",
  "/posts/":  "structure",
});

```

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-cc16a07b5d6cdcc2ce8bd805dfe53dd2_MD5.jpeg)

#### ③ 自动生成目录页面

另外，我们还根据文件夹下的文件列表自动为每个文件夹生成目录页面。我们只需要在`theme.ts`中添加如下设置。


```js title="\src\.vuepress\theme.ts"
plugins: {
    autoCatalog: {
      index: true
    },
}
```

就可以自动生成目录页面了。例如：

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-9b379d0629ac655174377c76c8f00c1d_MD5.jpeg)


### 3.4 [搜索](https://theme-hope.vuejs.press/zh/guide/feature/search.html)功能

该主题内置了几种常见搜索插件的支持，你只需下载你喜欢的插件和配置文件即可，我使用的是`vuepress-plugin-search-pro`插件，配置参考的官方配置。

1. 安装 `vuepress-plugin-search-pro`

::: code-tabs#shell

@tab pnpm

```sh
pnpm add -D vuepress-plugin-search-pro
```

@tab yarn

```sh
yarn add -D vuepress-plugin-search-pro
```

@tab:active

```sh
npm i -D vuepress-plugin-search-pro
```

:::

2. 在主题选项中配置 `plugins.searchPro`。

你可以将 `plugins.searchPro` 设置为 `true` 来直接启用它，或者将其设置为一个对象来自定义插件。

%%
```js
plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category as any,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag as any,
          formatter: "标签：$content",
        },
      ],
    }),
  ]

```
%%

```js title="\src\.vuepress\config.ts"
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  theme: hopeTheme({
    plugins: {
      searchPro: true,
      // searchPro: {
      //   插件选项
      // },
    },
  }),
});

```
效果如下：

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/VuePress-theme-hope2-deploy-fb8aa9698875c3683416ea56928db52b_MD5.jpeg)


## 五、最后

vuepress-theme-hope 主题通过默认的配置就提供了丰富的开箱即用的功能，使得配置体验相比较与vuepress-theme-reco有了明显的提升。这是我替换博客主题最大的体验，

今天的分享就到这了，如果文中有错误的地方，还请在评论中告诉我，感激不尽。

---

> 来源：[🚀VuePress-theme-hope2 搭建个人网站，万字长文保姆级教程，包含自动部署、评论、搜索等功能 - 掘金](https://juejin.cn/post/7261555752586084410)

