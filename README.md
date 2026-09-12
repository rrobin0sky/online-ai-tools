# ArchIcons - 云厂商与通用架构拓扑图标库

> 面向网络工程师、系统架构师与方案专家的多云及中立架构矢量图标库。
> 官方域名：[bin0sky.tech](https://bin0sky.tech)

---

## 🌟 核心特性

- **多云覆盖**：收录 AWS、Azure、Google Cloud、阿里云、Kubernetes 等主流厂商官方架构服务图标。
- **通用中立网络设备**：独家提供一套高质感、厂商中立的边界与网络设备图标（路由器、交换机、防火墙、负载均衡等），支持**在线无级换色**。
- **跨云等价物映射 (Cross-Cloud Equivalence)**：独创多云服务对照关系（例如查看 AWS S3 即可一秒联想并获取 Azure Blob、阿里云 OSS 及通用对象存储图标）。
- **极速交互**：
  - **1-Click 复制 SVG 源码**：直接在 Draw.io、Figma、Excalidraw、PPT 中无损粘贴。
  - **多尺寸 PNG 导出**：支持 128px / 256px / 512px 快速下载。
  - **毫秒级本地搜索**：支持中文服务名、英文名、拼音、缩写（如 `EC2`, `S3`, `RDS`, `FW`, `LB`）。
- **零成本全球极速部署**：纯静态输出（SSG），一键托管在 Cloudflare Pages 或 GitHub Pages，全球 Anycast CDN 秒级响应。
- **商业化合规**：内置完整隐私政策、服务条款、商标免责声明与自适应 Google 广告位插槽。

---

## 🚀 本地开发与预览

```bash
# 1. 安装依赖
npm install

# 2. 启动本地开发服务
npm run dev

# 浏览器访问 http://localhost:3000
```

---

## 📦 静态打包构建

```bash
# 构建完全静态文件到 out/ 目录
npm run build
```

构建完成后，根目录会生成 `out/` 文件夹，里面是纯 HTML/CSS/JS/SVG 静态网站。

---

## 🌐 域名与 Cloudflare Pages 0 成本部署指南

### 第一步：推送到 GitHub
1. 在 GitHub 上新建一个仓库（如 `online-ai-tools`）。
2. 将本地代码提交并推送到 GitHub 仓库。

### 第二步：配置 Cloudflare Pages
1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)。
2. 进入 **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**。
3. 选择你的 GitHub 仓库：
   - **Framework preset**: `Next.js (Static HTML Export)`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
4. 点击 **Save and Deploy**，Cloudflare 将在 1 分钟内全球自动部署上线！

### 第三步：绑定域名 `bin0sky.tech`
1. 在 Cloudflare Pages 项目设置中点击 **Custom domains** -> **Set up a custom domain**。
2. 输入你的域名 `bin0sky.tech`（或 `icons.bin0sky.tech`）。
3. 按照 Cloudflare 提示，在域名注册商（如阿里云）控制台中将 Nameserver 改为 Cloudflare 提供的地址，或者添加一条 CNAME 解析记录。
4. 解析生效后，即可全球 CDN 极速访问，自带终身免费 SSL 证书！

---

## 🛠️ 如何添加新图标？

编辑 `src/data/icons.ts`，按照 `IconMeta` 结构追加新项即可：

```typescript
{
  id: 'aws-database-dynamodb',
  provider: 'aws',
  category: 'database',
  name: { en: 'Amazon DynamoDB', zh: 'Amazon DynamoDB 文档数据库' },
  code: 'DynamoDB',
  tags: ['nosql', 'dynamodb', 'key-value', 'database'],
  equivalentGroup: 'db-nosql',
  isTintable: false,
  viewBox: '0 0 64 64',
  svgRaw: `<svg>...</svg>`,
  officialDocUrl: 'https://aws.amazon.com/dynamodb/'
}
```

---

## ⚖️ 商标声明 (Trademark Disclaimer)

AWS, Microsoft Azure, Google Cloud Platform, Alibaba Cloud, Kubernetes 及其他相关商标属于各自所有者。本项目为中立开源学习工具。
