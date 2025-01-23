---
title: 使用 Github+picGo 搭建图床
icon: pic
order: 2
category:
  - 安装教程
tag:
  - GitHub
  - picGo
  - Typora
  - Obsidian
---

> 作者注：建议使用Github替换Gitee。
>
> 作者两年亲身体验告诉大家，Github做图床十分靠谱！！有CDN加速访问巨快！！
>
> 别担心不稳定！别担心访问慢！这些问题统统不存在。

## 一、配置GitHub

### 1. 注册Github账号

首先你需要一个github账号，如果没有的话，先注册。

github官网地址： [https://github.com/](https://link.zhihu.com/?target=https%3A//github.com/)

注册过程省略，因为这是保姆都不管的事情。

友情提示：可能在注册过程中会出现 “Unable to verify your captcha response… …”，一直不能正常注册。

网上有各种解决方案：换浏览器、换电脑… …

### 2. 创建一个新仓库，用于存放图片

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-59b7f87b4fbe21a2492e4b9e529fe87c_1440w.webp)

填写仓库名称和描述，且仓库必须是public的，否则存储的图片不能正常访问。

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-d3733c14e8c9b53cb5cf9f7607d51c8a_1440w.webp)

### 3. 生成一个token，用于picGo访问github

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-4d227062bcfa58dba6c0582c982b737b_1440w.webp)

选择左侧菜单的Developer settings

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-4d227062bcfa58dba6c0582c982b737b_1440w.webp)

之后选择左侧Personal access tokens，再点击Generate new token

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-2d5bcabac97557591c4203009d306750_1440w.webp)

填写Note，勾选repo.

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-346da4ccf189eb5997abe2fadadca331_1440w.webp)

注意，生成的token只会在这里显示一次，所以记得单独保存下来哦。

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-354ea85a4bd9cfc99157b86cae9a2332_1440w.webp)

至此，Github的配置完成。

## 二、下载picGo，并进行配置

### 1. 下载picGo

网络不好的情况下，PicGo下载可能会多次失败，所以我把下载好的应用放在百度网盘了。

大家按需取用。

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-279f576c0dc0861fd7edcf1d43e5675f_1440w.webp)

网盘地址：[https://pan.baidu.com/s/1LvkzLJyZcjpflK2Evq3X9A](https://link.zhihu.com/?target=https%3A//pan.baidu.com/s/1LvkzLJyZcjpflK2Evq3X9A) 提取码：s6x7

下载完成，双击启动安装即可。

如果安装成功，picGo不能正常使用，则可以用兼容模式启动。【此问题因电脑而异，也是我在配置过程中踩过的坑。】

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-3f60ccb549e01c95a1702ceca9bda95d_1440w.webp)

### 2. 配置picGo

仓库名：[github用户名]/[第一步新建的仓库名称]

分支：默认master，从2020.10.01开始，github的默认分支名变更为main

设定token：第一步创建的token

指定存储路径：可填可不填，如果填写了，图片就会存储在img文件夹下

设定自定义域名：https://cdn.jsdelivr.net/gh/[github用户名]/[仓库名]@main，注意，此处的分支一定要填写@main，否则默认使用master分支。而现在github创建的默认分支名为main，如果不指定，则会出现图片不能上传的情况。【踩坑两小时】

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-62e4faaa7999d1d32fa80aec44b4034e_1440w.webp)

至此，github+picGo的配置完成，可以在上传区进行图片上传了。

### 3. 补充说明

1.原本github的自定义域名应该是：https://raw.githubusercontent.com/[username]/[仓库名]

但是使用这种方式访问图片巨慢，所以教程中使用了jsdelivr作为cdn加速。改变域名即可，不需要任何其他配置。

2.配置完成，可能出现不能上传的情况，请大家耐心检查，也许某一步的配置出现了问题，就像检查bug一样耐心、细心。想象一下图床搭建成功后，写起文章来的丝滑感，是不是又有动力了？

## 三、备选-配置Gitee

### 1. Gitee设置

安装好picgo后在picgo的插件设置搜索`gitee`然后选择安装gitee-uploader

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-b5d16df86a9dd216d75e06b57ffb9c12_1440w.webp)

然后到[gitee](https://link.zhihu.com/?target=https%3A//gitee.com/)新建一个仓库用来做我们的图床

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-75f73b3c61eccc848c09c509ef51c6b8_1440w.webp)

新建仓库的要点如下：

1. **输入一个仓库名称**
2. **其次将仓库设为公开**
3. **勾选使用Readme文件初始化这个仓库**
 
起一个仓库的名字，按照下面的流程来创建，记得要公开

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-79d759f28a769709c478f2fc7ca4b59f_1440w.webp)

### 2. 创建私人令牌

点击头像进入设置然后点击私人令牌然后点击生成新令牌

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-d4991c62c5e5733ed8d71ac0e214c687_1440w.webp)

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-72dc3cbb5136d7c49b691ace8d94444b_1440w.webp)

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-18f2eecd4f6c9c4091f5634dc041ca16_1440w.webp)

输入你的gitee登录密码

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-0a99d1f96cf97761ec0049ffb3d767a3_1440w.webp)

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-cd0242aaf5099ecd6371decfa6cc687a_1440w.webp)

### 3. 在picgo中配置gitee图床

进入picgo后点击图床设置点击gitee，然后在repo中填入之前我们创建的用户名/仓库名，这里的用户名要与你的个人空间地址一致，例如我的个人空间地址是zdqs，所以我这里就填写zdqs

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-d43f961421502cd473ea24dbfef8452b_1440w.webp)

branch一般默认是master，token就写我们的私人令牌，path可以不写只要repo和token写了就行了

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-4b1950c44d1a37a0497facfb55066501_1440w.webp)

## 四、PicGo集成Typora

使用MarkDown语法写文章，我使用的编辑器是typora，一款超级好用的编辑器。在一个编辑框内，编辑完成后，可以马上显示MarkDown语法效果。

举个栗子：

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-ce0b207c19d6ca32ac22937f1dc6cfcd_1440w.webp)

并且typora可以和picGo联合在一起使用，当你在编辑器中插入、粘贴图片时，typora+picGo的组合方式，可以自动把图片上传至github保存。

### 1. 下载安装Typora

Typora新版本是收费的，所以建议大家使用旧版本就可以了，完全能满足写作需求。

旧版本安装包和picGo放在一起了（下载地址见上文），大家按需取用即可。

下载完成后正常步骤安装即可。

### 2. 配置Typora

在typora顶部菜单界面，选择“文件” - > “偏好设置”，设置图片存储方式。

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-f595cf5c8a0e3b62944c68deb8fb5878_1440w.webp)

选择图片存储方式：上传图片。

上传服务：PicGo(app)

PicGo路径：picGo安装的地址

设置完成，点击“验证图片上传”，提示上传成功，即代表配置成功。

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-e27e9f198aef7bdea365549b2257025d_1440w.webp)

注意一点，typora图片验证中的端口，需要与picGo中的server设置内的端口一致，否则typora中不能正常上传。

  

### 3. picGo监听端口设置

选择“PicGo设置”–>“设置server”

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-8ff622935a6b0597a21e68e7575e16ef_1440w.webp)

【此处有坑】如果监听端口不是36677，则需要修改为36677。否则会出现picGo能正常上传 图片，而typora上传图片失败的情况。

![](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/v2-304589efaed9a1ba3caf5e8827e77582_1440w.webp)

最后，在苹果电脑中可以使用**Typora+Ipic+Github**的方式，有兴趣的话可以自行尝试

**总结：github+picGo+typora他们三个是好基友。**

## 五、picGo集成Obsidian - Paste Image Rename

### 1. 效果综述

目前我的主力笔记软件是[[Obsidian]]，配图都是统一存放在同一文件夹 `890 Attachments` 内，使用[[Paste image rename]]使其与所引用的元文件名称一致，优点是**方便跨文件引用以及安全隐私**。但存在的弊端也很明显：**随着文件数量增多会导致内存占用过大不利于跨平台同步以及迁移麻烦**。这时可以考虑 webp 化或者干脆直接图床化。

刚好有朋友遇到这个问题，需要将 Vault 里的全部本地图片转为图床链接，解决思路的话比较清晰，相信大家都能想得到：

1. 上传全部图片到图床；
2. 替换文件引用链接。

那就以一个示例文件夹 `ob` 为例，尝试实现所有图片的图床化。

### 2. 上传图片

这里我们需要借助一个插件：**“Image auto upload”**，可以将图片上传到 PicGo 中配置的图床。

![](https://pic2.zhimg.com/80/v2-331c4279a55a99ab3692fe8dc4ad8475_1440w.webp)

若勾选最后一个选项，图片上传图床后会被删除！！！

虽然插件只能上传一个文件中的所有图像文件，但也足够让我们打开思路了：**那就把图片都丢到一个文件里**！

文件夹内创建文件 `attachments.md`，运行这段 python 脚本：

```python
 import os
 import glob
 ​
 # 获取当前目录
 current_dir = os.getcwd()
 ​
 # 获取所有图片文件路径
 image_files = glob.glob(os.path.join(current_dir, '*.jpg')) + \
               glob.glob(os.path.join(current_dir, '*.jpeg')) + \
               glob.glob(os.path.join(current_dir, '*.png'))  # 可根据需要添加其他图片格式的glob语句
 ​
 # 遍历图片文件，并将文件名添加到attachments.md文件中
 with open('attachments.md', 'w', encoding='utf-8') as file:
     for image_file in image_files:
         image_filename = os.path.basename(image_file)
         file.write(f'![[{image_filename}]]\n')
```

执行后会得到以下效果：

![](https://pic1.zhimg.com/80/v2-bcc89b9880e2fdcafd476d758fe372a8_1440w.webp)

图片汇总

然后回到 Obsidian 按 `Ctrl-P` 调出命令面板，执行 `Image auto upload Plugin: Upload all images` 后会自动替换成图床链接：

![](https://pic3.zhimg.com/80/v2-f45acd103c8ffbb0aea543bc672427e2_1440w.webp)

上传后自动替换链接

### 3. 替换文件引用链接

重新读取 `attachments.md`，获取图片名与图床链接的对应关系并存储为字典：

```python
 import re
 ​
 # 定义正则表达式模式
 pattern = r'\!\[(.*?)\]\((.*?)\)'
 ​
 # 以utf-8编码读取attachments.md文件
 with open('attachments.md', 'r', encoding='utf-8') as file:
     content = file.read()
 ​
 # 创建空字典
 img_dict = {}
 ​
 # 使用正则表达式匹配并存储图片信息到字典中
 matches = re.findall(pattern, content)
 for match in matches:
     img_name = match[0]
     img_link = match[1]
     img_dict[img_name] = img_link
```

接着我们需要来遍历整个 Vault 并进行图片引用链接的替换，首先需要注意的是 Obsidian 存在两种引用内部图片的格式：

- OB 链接：`![[img.png]]`
- MD 链接：`![img_name](img.png)`

两种格式我们都需要进行替换：

```python
 import os
 import re
 ​
 # 定义正则表达式模式
 pattern1 = r'\!\[(.*?)\]\((.*?)\.(png|jpg|jpeg)\)'
 pattern2 = r'\!\[\[(.*?)\.(png|jpg|jpeg)\]\]'
 ​
 # 遍历当前文件夹下的所有Markdown文件
 for root, dirs, files in os.walk('.'):
     for file in files:
         if file.endswith('.md'):
             # 以utf-8编码读取Markdown文件
             file_path = os.path.join(root, file)
             with open(file_path, 'r', encoding='utf-8') as f:
                 content = f.read()
 ​
             # 使用正则表达式替换图片链接
             content = re.sub(pattern1, lambda match: '![{}]({})'.format(match.group(2), img_dict.get(match.group(2), '')), content)
             content = re.sub(pattern2, lambda match: '![{}]({})'.format(match.group(1), img_dict.get(match.group(1), '')), content)
 ​
             # 将替换后的内容写回Markdown文件
             with open(file_path, 'w', encoding='utf-8') as f:
                 f.write(content)
```

执行完脚本，我们会发现 Vault 内所有的内部图片都转换成了图床链接的形式。

![](https://pic3.zhimg.com/80/v2-2c6afcf09490201540c5937b5c23d332_1440w.webp)

前后对比

最后再强调一遍，**执行以上操作前务必做好备份！以防操作失误无法挽回！**

---

> 作者：小小芋子
> 
> 链接：https://zhuanlan.zhihu.com/p/489236769
> 
> 来源：知乎  