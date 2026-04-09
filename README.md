# 虾得乐

给工作场所里 i 人的一点低压力娱乐。运行在飞书群聊中的 OpenClaw Bot。

团队：**一侠天開**

## 本地运行

```bash
npm install
npm run dev
```

访问 `http://localhost:5173`

## 页面结构

- `/` — 主展示页（路演 landing page）
- `/#/board` — 答辩背景板页（投屏用）

> 使用 HashRouter，GitHub Pages 无需额外配置。

## 配置飞书入口

编辑 `src/lib/feishu.ts`：

```ts
export const FEISHU_GROUP_DEEPLINK = '替换为实际的飞书 deeplink'
export const FEISHU_GROUP_WEB_URL = '替换为备用网页链接'
```

## 添加截图素材

将图片放入 `src/assets/images/`，然后在 `src/data/content.ts` 的 `galleryImages` 数组中添加：

```ts
export const galleryImages = [
  { src: new URL('./assets/images/screenshot1.png', import.meta.url).href, alt: '描述', caption: '说明文字' },
]
```

## 构建 & 部署

```bash
npm run build
```

构建产物在 `dist/` 目录，部署到 GitHub Pages（仓库名 `luyan`，已配置 `base: '/luyan/'`）。

推荐使用 GitHub Actions 自动部署，或手动将 `dist/` 上传到 `gh-pages` 分支。

## 技术栈

- React + TypeScript + Vite
- Tailwind CSS
- Framer Motion
- tsParticles
- Lucide React
- React Router DOM (HashRouter)
