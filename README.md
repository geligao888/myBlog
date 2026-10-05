# 拾页 · 学习与生活手记

一个用 Astro 搭建的中文个人博客。文章以 Markdown 保存，页面在构建时生成；归档筛选和主题切换使用原生 JavaScript。

## 本地运行

需要 Node.js 22.12 或更新版本。

```sh
npm install
npm run dev
```

本地预览生产构建：

```sh
npm run build
npm run preview
```

## 写一篇新文章

在 `src/content/journal/` 新建 Markdown 文件，例如 `my-note.md`：

```md
---
title: 文章标题
pubDate: 2026-10-03
category: 学习
description: 用一句话介绍文章。
tags:
  - JavaScript
  - 学习笔记
---

从这里开始写正文。支持标准 Markdown 标题、列表、链接和引用。
```

`category` 目前填写 `学习` 或 `生活`。首页、归档与文章详情页会在下次构建时自动更新。

## 发布到 GitHub Pages

1. 将此项目推送到 GitHub 上的 `main` 分支。
2. 在仓库的 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions**。
3. 每次推送到 `main` 后，`.github/workflows/deploy.yml` 会自动构建并发布。

网站路径会在 GitHub Actions 构建时根据仓库名自动设置：名为 `<用户名>.github.io` 的仓库发布到域名根路径，其他仓库发布到 `/<仓库名>/`。

## 文件导览

- `src/pages/`：网站路由和页面。
- `src/content/journal/`：Markdown 文章。
- `src/content.config.js`：文章字段和校验规则。
- `src/components/PostCard.astro`：文章卡片。
- `src/layouts/SiteLayout.astro`：共享页面框架、导航和主题切换。
- `src/styles/global.css`：视觉样式与响应式布局。
- `.github/workflows/deploy.yml`：GitHub Pages 自动部署。

首页和关于页中的“拾页”及个人简介都是示例文字，可以直接改成自己的信息。深色模式偏好保存在浏览器的 `localStorage` 中。
