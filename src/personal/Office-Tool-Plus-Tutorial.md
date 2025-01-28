---
title: Office Tool Plus 使用指南
icon: github
order: 2
category:
  - 安装教程
tag:
  - Office
  - crack
cover: https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202410010210853.png

---

Office Tool Plus 是一个强大且实用的 Office 部署工具。

Office Tool Plus 基于 [Office 部署工具](https://aka.ms/ODT) 制作，可以很方便的部署 Office，高速下载引擎可帮助您更快地下载 Office。

你也可以使用 Office Tool Plus 的其他功能或者是内置的小工具方便、快捷地管理 Office 哦！

<!-- more -->

## 一、Office Tool Plus 下载

先再官网下载 Office Tool Plus，官网网址：[otp.landian.vip](https://otp.landian.vip/zh-cn/)

打开[下载地址](https://otp.landian.vip/zh-cn/download.html)，选择适应的下载源和版本。

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402160244851.png)

下载后解压至硬盘中，双击“Office Tool Plus.exe”打开应用程序。若遇到防火墙提示，请选择“允许”或“仍要运行”。

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402160248614.png)

## 二、部署 Office 应用

主页内容是一堆快捷方式。若没安装对应应用，会打开该应用的 website 主页；若已安装了对应应用，则会打开该应用。

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402160255173.png)

### 1. 选择需要安装的 Office 应用

打开 “部署 > 产品” ，点击 “添加产品”，选择需要安装的应用，然后点击 “确定”。

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402160257311.png)

### 2. 选择要安装的应用程序

此处我选择的 “Office 专业版 2021”。在下面的 “应用程序” 选择准备安装的应用。例如此处，我为了演示只选择了 “Publisher”

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402160306724.png)

### 3. 部署设置

a. 选择**体系结构** *跟电脑cpu挂钩*

- 32位：仅推荐在32位(x86)电脑选择。
- 64位：推荐64位(x64或amd64)电脑选择。
- arm：独立于上述三种所用的指令集，一般不推荐选择。但注意，苹果M系列芯片均采用 arm 架构，这些电脑应选择 arm64

:::: details 常见指令集架构

x86 是 Intel 在 1978 年推出的一种 32 位指令集。从 386 时代开始的，一直沿用至今，是一种cisc指令集，所有 Intel 早期的 cpu，amd 早期的 cpu 都支持这种指令集，Intel 官方文档里面称为 “IA-32”。  
  
在2001年，Intel 发布了其最新的 64 位指令集架构 IA-64。但是一反常态，该指令集不能向下兼容 x86，即当时已经发布的软件均无法在该指令集下的 cpu 中运行，市场反应冷淡。现在电脑一般不会存在该指令集架构。  
  
在2003年，amd推出了AMD64，是 x86 的 64 位扩展（即能向下兼容 x86），获得市场的热烈反响。现存许多产品，尤其是在 Intel 发布 x86-64 之前进入市场的 64 位产品，往往采用该指令集架构。  
  
在2004年，Intel 推出了支持 x86 的 64 位指令集架构 x86-64（现在一般简称为x64），后英特尔将其命名为 “Intel 64”。但 Intel 在此架构中吸纳 AMD64，常常被媒体嘲笑。  
  
ARM（英文为Advanced RISC Machine，或Acorn RISC Machine）也是一个架构，非常适用于移动通信这种低成本，高性能，低耗电的领域。常常出现在手机端等，在电脑中很少见。  
  
苹果电脑在采用M系列芯片之前，采用的都是Intel芯片，是x86-64架构。但苹果的M系列芯片采用的是 arm 架构。  
  
  
Windows电脑区分x32和x64的方法：  
  
按下 Win+R，打开 “运行”，输入 “cmd”，按下 Enter 启动命令提示符  
  
![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402160407495.png)  
  
在命令提示符中输入 `systeminfo`，等待数秒。查看“系统类型”，若是 “x64-based PC”，则应分辨是哪个指令集架构。  
  
::: tabs  
  
@tab amd64处理器实例  
  
![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402160411994.png)  
  
一般 AMD cpu 的 64 位 pc 是 amd64 指令集架构  
  
@tab:active x86-64处理器实例  
  
![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402160409577.png)  
  
一般 Intel cpu 的 64 位 pc 是 x86-64 指令集架构  
  
:::  
  
总结：3个指令集家族的父子关系  
  
```mermaid  
flowchart TB  
    subgraph x86
       direction BT
       a1[x86] --> a2[x86-64]
       a1[x86] --> a3[amd64]
    end
    subgraph IA-64
       IA[IA-64]
        end
    subgraph arm
       cont[continuing···]
    end  
```  
  
  
  
总结：x86家族的指令集架构分类  
  
1. x86：一般没有别名，在早期的 32 位 cpu 会出现  
2. x64：别名 x86-64、Intel 64、EM64T 等，一般会在 64 位的 Intel 处理器中出现  
3. amd64：一般没有别名，会在 64 位的 amd 处理器中出现

::::

b. **通道** 保持默认的“当前通道”。

c. **部署模式** 保持默认的“安装”。

d. **安装模块** 保持默认的“Office 部署工具”。

e. 推荐勾选 **下载后再部署**（即让 Office Tool Plus 下载完所有的文件之后再安装），**其他两个圆圈**可按需勾选。

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402162154481.png)

滑动到最下方，点击“高级设置”，可以在其中的“源路径”设置待安装的位置

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402162157537.png)

### 4. 开始部署

打开 “部署 > 部署 Office”，点击 “开始部署”，下载需要的文件并安装。

下方的进度条会显示正在下载的文件名和下载速度以及预计时间。（图片中没有）

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402162159995.png)

下载完成后，Office Tool Plus 会自动安装软件。

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402162209404.png)

这个过程通常不需要很久，如果一直卡在这个过程，请检查 “部署设置” 阶段是否配置错误（尤其是位数）

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402162209832.png)

## 三、激活 Office

### 1. 安装许可证

打开 “激活 > 许可证管理”，点击 “安装许可证” 右侧的 “安装” 按钮。

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402162212021.png)

在 “许可证列表” 中选择刚刚安装的版本。例如我刚刚安装的是 “Office 专业版 2021”，则此处我选择“Office专业版2021”

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402162213415.png)

::: tip 无法安装许可证/未发现许可证 可能的解决方法

原因①：硬件问题 即设备未及时更新或打补丁 缺少了重要文件

可尝试在本软件中，“安装许可证”右侧的小三角下拉菜单中，清除所有的许可证，并重新安装，确保所有许可证文件都已正确安装 

原因②：这个可能比较荒谬，但不可否认的是可能存在，即例如 WPS 等同类型软件惹的祸……

:::

### 2. 配置 KMS 地址

::: note KMS 科普 

KMS最初是为了大批量的授权而诞生的。比如公司内数十台甚至上百台电脑，要统一对他们的 Office 进行激活，使用 KMS 要比人工一个个去激活要快得多。

这里的KMS地址指的是一个服务器的地址，通过向该服务器获取激活信息，从而达到激活的目的。

:::

打开 “激活 > KMS 管理”，在 “KMS 主机” 右侧输入 KMS 主机名称。

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402162216088.png)

通过[此链接](https://www.coolhub.top/tech-articles/kms_list.html)可以查看所有可用的 KMS 地址及其实时可用性。

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402162227670.png)

KMS地址的选择可自行决定，在左侧选择一个 KMS 地址，并输入至 Office Tool Plus 中。

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402162228496.png)

::: tip 未在此电脑上发现批量许可证 解决办法

重新选择一个带有“批量版”字样的许可证，比如 Office Mondo 2016 批量许可证；再输入一个可用的 KMS 地址。

:::

### 3. 开始激活

最后一步，点击右上角的“激活”按钮：

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402162230086.png)

画红框的产品激活成功。激活失败的，可以点击错误代码查看错误原因。上文只列举了部分比较常见的错误解决方法。

![image.png](https://cdn.jsdelivr.net/gh/shenbourne/Image-Hosting-Service@main/blog/202402162232414.png)










