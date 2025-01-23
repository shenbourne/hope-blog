---
title: Obsidian + 阿里云 OSS 实现笔记云同步
icon: pic
order: 2
category:
  - 配置教程
tags:
  - Aliyun
  - OSS
  - Obsidian
cover: https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202409290220090.png
---

## 一、阿里云 OSS 配置

<!-- @include: ../appendix/Aliyun-OSS-Setting.md -->
### 4. 跨域设置

进入 Bucket 概览页面。具体网址为 `https://oss.console.aliyun.com/bucket/oss-cn-heyuan/[your-bucket-name]`

进入 **“数据安全”** -> **“跨域设置”**。选择 **“创建规则”**，在 **“来源”** 填入如下信息

```
app://obsidian.md
capacitor://localhost
http://localhost
```

在 **“允许 Methods”** 全部勾选，支持所有请求。

在 **“允许 Header”** 填入：`*`

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/hope/202501222039487.png)

点击 **“确定”** 完成跨区设置

## 二、Obsidian 插件设置 - Remotely save

### 1. 效果综述

本地和云之间同步笔记。

- 支持黑曜石移动版。保管库可以在移动和桌面设备之间同步，云服务作为“代理”。
- 支持端到端加密。如果用户指定密码，文件将在发送到云之前使用 openssl 格式进行加密。
- 支持定时自动同步。您还可以使用侧边栏功能区或使用命令面板中的命令手动触发同步（甚至可以将热键组合绑定到命令，然后按热键组合）。

### 2. 配置插件

在应用商店下载 **“Remotely save”**，启动插件后进行插件配置。

**“选择远程服务”** 选择 **“S3或兼容S3的服务”**, ②中填写的内容见下文。

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/hope/202501222044172.png)

打开 Bucket 预览页面

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/hope/202501222043007.png)

**“服务地址（Endpoint）”** 和 **“区域（Region）”** 分别是 **“外网访问”** 节点和 **“ECS的经典网络访问”** 节点

**“Access Key ID”** 、**“Secret Access Key”** 分别是在上文 [**"阿里云OSS/授权设置"**](#AccessKey) 中创建子账号后， 自己记录下来的 **"AccessKey ID"** 和 **"AccessKey Scret**

**"存储桶（Bucket）"** 对应阿里云 OSS 内的 bucket 名字



