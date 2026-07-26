# MokaTest 首页重设计规格

**日期**: 2026-07-26
**方向**: 暗色商务风 + 左右交替节奏

---

## 整体布局（5段式）

```
Hero（深色底 #0f172a，左倾错位）
  ↓
Features（亮色底，3×2 网格，左边框色条）
  ↓
API 自动化（浅灰底 #f8fafc，左文右 SVG 卡片）
  ↓
UI 自动化（浅灰底 #f8fafc，左 SVG 卡片右文）
  ↓
CTA（深色底，居中收尾）
```

内容区块统一 `max-width: 1152px`，不填满全屏，不居中于屏幕中央。

---

## 各段设计

### 1. Hero
- **背景**: `#0f172a` + CSS 网格纹理（`repeating-linear-gradient` 40px）
- **装饰**: 散布几何图形（圆环/方块，低透明度蓝色），绝对定位
- **排版**: 标题 "MokaTest" 白色粗体，副标题灰色偏右错位（`margin-left: 60px`），描述文字进一步偏移（`margin-left: 120px`）
- **按钮**: 品牌蓝主按钮 + 白描边次按钮 + GitHub 文字链，左对齐
- **过渡**: 底部微渐变融入下一段

### 2. Features
- **背景**: 白色，标准 padding
- **卡片**: 3×2 CSS Grid，白底、细边框（`#e2e8f0`）、左边框 4px 色条（6 色各不同）
- **图标**: 左上角 Lucide SVG 图标（link/bug/layers/shield/archive/compass），品牌色
- **hover**: 整卡轻微上浮 + 弥散阴影

### 3. API 自动化（左文右图）
- **背景**: `#f8fafc`
- **左**: 标题 + 5 条 ✓ feature 列表（用圆点替代 ✓ 号）
- **右**: 白底卡片，大尺寸 SVG 插画（接口测试示意 — 服务器/请求流）
- **icon**: 渐变方形图标（蓝→青）

### 4. UI 自动化（左图右文）
- **背景**: `#f8fafc`
- **左**: 白底卡片，大尺寸 SVG 插画（UI 自动化示意 — 浏览器/元素定位）
- **右**: 标题 + 5 条 feature 列表
- **icon**: 渐变方形图标（紫→粉）
- **CSS**: `flex-direction: row-reverse` 实现交错

### 5. CTA
- **背景**: `#0f172a`（与 Hero 呼应）
- **居中**: 标题 + 描述 + 渐变按钮
- **无装饰**: 干净收尾

---

## 图标方案
- **来源**: `@iconify-json/lucide`（已安装），MIT 协议可商用
- **交付**: 提取为 SVG 文件放在 `docs/public/icons/`
- **Features**: 左上角 24px SVG 图标，继承品牌色
- **自动化**: 渐变方形色块内嵌白色 SVG 图标

## 动效
- Features 卡片: `translateY(-4px)` + shadow on hover
- Hero 装饰: 纯静态（不用 shimmer 动画）
- 自动化卡片: hover 轻微上浮 + 阴影增强
- CTA 按钮: hover 上浮 + 蓝色辉光阴影
- 全局: `scroll-behavior: smooth`

## 暗色模式
- Hero/CTA: 本身就是深色，暗色模式下纹理更淡
- Features/自动化: 暗色下背景切为 `var(--vp-c-bg)` + 细边框
- 图标颜色在暗色下提亮（`#93c5fd` 等）

## 不做什么
- 不使用 emoji（已全部替换为 Lucide SVG）
- 不使用文字图标
- 不保留时间线区块（精简为 5 段式）
- 不保留旧版 hand-built 卡片（已被 features 替代）

## 改动文件
- `docs/index.md` — 全部重写
- `docs/.vitepress/theme/custom.css` — 全部重写
- `docs/public/icons/` — 已有 10 个 SVG，确认够用
