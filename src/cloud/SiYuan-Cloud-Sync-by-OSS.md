---
title: 思源笔记 + 阿里云 OSS 实现笔记云同步
icon: pic
order: 2
category:
  - 配置教程
tags:
  - Aliyun
  - OSS
  - SiYuan
cover: https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/hope/202501222158329.png
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

## 二、思源笔记云端同步设置

### 1. 登陆账号

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/hope/202501222117010.png)

登录账号后选择 **“成为付费会员”**，并升级 **“功能特性”**。

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/hope/202501222125944.png)

### 2. 获取配置信息

打开[思源 S3 同步配置生成器](https://s3.siyuan.musnow.top/?utm_source=ld246.com)，获取配置内容

**“服务商/ ServiceProvider”** 选择 `阿里云 OSS /Alibaba Cloud OSS`

**“地域/ Region”** 选择创建Bucket时选择的地区

**“存储桶/ Bucket Nam”** 输入阿里云 OSS 内创建的 bucket 名字

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/hope/202501222127246.png)

复制获得的 **“最终配置 / Configuration”**

### 3. 配置云端存储

打开思源笔记的 **“设置”** → **“云端”**，**”云端存储服务提供商“** 选择 `S3`

**“Endpoint”**、**“Bucket”** 和 **“Region”** 分别复制上文 **”最终配置 / Configuration“** 中的对应选项

**“Access Key ID”** 、**“Secret Access Key”** 分别是在上文 [**"阿里云OSS/授权设置"**](#AccessKey) 中创建子账号后， 自己记录下来的 **"AccessKey ID"** 和 **"AccessKey Scret"**

**”Addressing"**、**"Path-style"** 分别选择 **“Virtual-hosted-style”** 和 **“Verify”**

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/hope/202501222136994.png)






