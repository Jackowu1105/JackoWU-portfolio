# Jacko Portfolio — Design System

> 根據現有程式碼整理的設計規範，2026-07-29

---

## 目錄

1. [設計哲學](#1-設計哲學)
2. [技術棧](#2-技術棧)
3. [色彩系統](#3-色彩系統)
4. [Typography](#4-typography)
5. [間距與佈局](#5-間距與佈局)
6. [Glass Morphism（核心視覺語言）](#6-glass-morphism核心視覺語言)
7. [按鈕系統](#7-按鈕系統)
8. [共享元件](#8-共享元件)
9. [動畫系統](#9-動畫系統)
10. [頁面結構](#10-頁面結構)
11. [Responsive Breakpoints](#11-responsive-breakpoints)

---

## 1. 設計哲學

- **溫潤自然** — 以暖白 (#FAF7F5) 為基底，搭配金色與 teal 點綴，傳達溫暖、專業、有質感的品牌調性
- **玻璃質感** — 大量使用 frosted glass（毛玻璃）效果，創造輕盈、通透、多層次的視覺層次
- **微互動** — 每個可互動元素都有細膩的回饋（ripple、hover lift、magnetic 跟隨）
- **漸進呈現** — 內容以 blur + fade + slide 方式依序入場，營造流暢的瀏覽節奏

---

## 2. 技術棧

| 技術 | 版本 | 用途 |
|------|------|------|
| Next.js | 16.2.4 | 框架（App Router） |
| React | 19.2.4 | UI 程式庫 |
| TypeScript | ^5 | 型別安全 |
| Tailwind CSS | v4 | Utility-first 樣式 |
| Framer Motion | 12.38.0 | 宣告式動畫 |
| MDX | ^3 | Case study 內容 |

---

## 3. 色彩系統

目前僅實作 **Light Mode**，無 Dark Mode。

### 3.1 主要色板

定義於 `src/app/globals.css` 的 CSS custom properties：

| Token | 色碼 | 用途 |
|-------|------|------|
| `--bg-base` | `#FAF7F5` | 頁面背景（暖白） |
| `--bg-elevated` | `#F5F1EC` | 略深的暖背景 |
| `--glass-surface` | `rgba(255,255,255,0.75)` | 玻璃卡片底色 |
| `--text-primary` | `#1C1814` | 主要文字（近黑暖色） |
| `--text-secondary` | `#8A8480` | 次要文字 |
| `--text-tertiary` | `#B8B2AE` | 輔助文字 |
| `--accent-gold` | `#C4A882` | 金色強調 |
| `--accent-warm` | `#A89880` | 暖灰 |
| `--accent-deep` | `#6B5C4C` | 深棕 |
| `--accent-glow` | `rgba(196,168,130,0.15)` | 金色光暈 |

對應的 Tailwind theme tokens（@theme inline）：

```
bg-base / bg-elevated / glass-surface / glass-border / glass-border-hover
text-primary / text-secondary / text-tertiary
accent-gold / accent-warm / accent-deep / accent-glow
```

### 3.2 元件中常用的額外色碼

| 色碼 | 用途 |
|------|------|
| `#37848a` | Teal —「Precision」強調字、EXPERTISE 標籤、裝飾圓點 |
| `#c9a74d` | 金色 —「Soul」強調字、Selected Works 圓點、引言符號 |
| `#1d1b20` | 深色 — 大部分 heading 和強調文字 |
| `#494551` | 中灰 — 內文描述 |
| `#594400` / `#765b00` | 深金 — Availability badge |
| `rgba(255,223,147,0.3)` | 淺金 — Availability badge 背景 |
| `rgba(205,193,160,0.2)` | 米色 — tag pill 背景 |
| `#cecece` | 淺灰 — tag pill 邊框 |
| `#fdf7ff` | 白色偏暖 — 深色按鈕文字 |

### 3.3 Canvas Background 色彩

Canvas 動畫使用 10 個 Blob，主要色調：

| 顏色 | RGB | 用途 |
|------|-----|------|
| Teal | (55, 132, 138) | 主色調 |
| Gold | (201, 167, 77) | 輔助色調 |
| Teal 淺 | (74, 158, 165) | 層次 |
| Gold 淺 | (217, 191, 110) | 層次 |
| Teal 深 | (42, 107, 112) | 層次 |
| 陶土 | (201, 123, 93) | 暖色層次 |
| 灰綠 | (122, 143, 122) | 中性層次 |
| 膚色 | (232, 196, 160) | 暖色層次 |
| 青綠 | (122, 184, 189) | 亮色層次 |
| 金棕 | (180, 150, 85) | 大地色層次 |

所有 blob 的 opacity 介於 0.05–0.5 之間，確保非常柔和。

---

## 4. Typography

### 4.1 字體家族

| 角色 | 字體 | Variable | 權重 |
|------|------|----------|------|
| Heading | Epilogue | `--font-epilogue` | 400, 500, 600, 700, 800 |
| Body | Inter | `--font-inter` | 預設 |
| Mono | JetBrains Mono | `--font-jetbrains-mono` | 預設 |

### 4.2 Tailwind 對應

```
font-heading → Epilogue
font-sans    → Inter
font-mono    → JetBrains Mono
```

### 4.3 實際應用尺度

| 元素 | 大小 | 字重 | 行高 |
|------|------|------|------|
| Hero H1 | text-2xl → lg:text-[48px] | Bold | 1.2 |
| Section H2 | text-3xl / text-[32px] | Bold | — |
| Section H2 (大) | text-4xl → md:text-5xl | Bold | tracking-tight |
| Card title | text-xl / text-[22px]→[28px] | Semibold | 1.5 |
| Body | text-sm / text-base | Normal(400) | relaxed |
| Meta label | text-xs | Medium | uppercase tracking-wide |
| Tag | text-xs / text-sm | Normal | — |
| Availability badge | text-xs | Semibold | uppercase tracking-[1.2px] |

### 4.4 Style 屬性使用模式

元件中直接使用 `style={{ fontFamily: 'Epilogue, sans-serif' }}` 或 `style={{ fontFamily: 'Inter, sans-serif' }}` 指定，而非通過 Tailwind class。這是一個可以統一的點。

---

## 5. 間距與佈局

### 5.1 版面容器

```tsx
// 標準頁面容器
<div className="mx-auto max-w-6xl px-6 md:px-12 py-16">

// Section 上下間距
py-24  // 96px

// Section 內部
flex flex-col gap-9  // section 標題到內容
flex flex-col gap-6  // 卡片內容間距
```

### 5.2 標準 Grid

```tsx
// 服務 / 見證 cards
grid-cols-1 md:grid-cols-3 gap-6

// 雙欄佈局
grid-cols-1 md:grid-cols-2 gap-6 / gap-8

// Work 頁面
grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
```

### 5.3 Border Radius 規範

| 元件 | Radius | Class |
|------|--------|-------|
| 大卡片 (StackingCard, Process, Testimonial) | 32px | `rounded-[32px]` |
| 一般卡片 (GlassCard) | 16px | `rounded-2xl` |
| 按鈕 | 12px | `rounded-xl` |
| Badge / Tag pill | 9999px | `rounded-full` |
| Icon container | 16px | `rounded-2xl` |

### 5.4 陰影

- 一般卡片：無 box-shadow（依靠玻璃邊框）
- 深色按鈕：`shadow-lg shadow-black/5`
- GlassCard hover：`box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04)`

---

## 6. Glass Morphism（核心視覺語言）

這是整個設計最 signature 的視覺元素。

### 6.1 .glass-card class（`globals.css`）

```css
.glass-card {
  background: linear-gradient(134deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 100%);
  border: 1px solid rgba(255,255,255,0.25);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 16px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.glass-card:hover {
  border-color: rgba(255,255,255,0.5);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
}
```

**液態光澤動畫（`::before` 偽元素）：**

```css
.glass-card::before {
  background: conic-gradient(
    from 0deg at 50% 50%,
    transparent 0deg,
    rgba(255,255,255,0.08) 120deg,
    transparent 240deg,
    rgba(255,255,255,0.04) 300deg,
    transparent 360deg
  );
  animation: liquidSpin 15s linear infinite;
}
```

### 6.2 內聯 Glass 模式（元件中使用）

元件中常直接寫 inline style 而非使用 `.glass-card` class：

```tsx
style={{
  background: 'linear-gradient(134deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.05) 100%)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.3)',
}}
```

### 6.3 Stacking Card 的動態 Glass

當卡片重疊時（sticky scroll 狀態），opacity 會動態加深：

| 狀態 | Background | Blur |
|------|-----------|------|
| 正常 | rgba(white, 0.4 → 0.05) | blur(10px) |
| 重疊中 | rgba(white, 0.7 → 0.15) | blur(48px) |

---

## 7. 按鈕系統

### 7.1 三種變體

| Variant | 樣式 | 用途 |
|---------|------|------|
| `primary` | bg-#1C1814, text-white, shadow | 主要 CTA |
| `secondary` | glass-card style | 次要行動 |
| `ghost` | text-#8A8480, hover → #1C1814 | 輕量連結 |

### 7.2 規格

- padding: `px-6 py-3`
- radius: `rounded-xl`
- font: 14px (text-sm), `font-medium`
- 都包含 `RippleEffect` 按壓波紋
- 可選 `magnetic` 屬性（跟隨游標）

### 7.3 Inline CTA 樣式（Hero、StackingCard 等處）

Hero 區的 CTA 使用獨立的 inline 樣式而非 Button 元件：

- **深色 CTA**: `bg-[#1d1b20] text-[#fdf7ff] px-4 py-2 rounded-lg`
- **玻璃 CTA**: `border border-white/30 text-[#1d1b20] backdrop-blur-[10px]` + 線性漸變背景

---

## 8. 共享元件

| 元件 | 功能 |
|------|------|
| `GlassCard` | 毛玻璃容器，支援 hover lift (y: -4, scale: 1.01) |
| `Button` | 統一律動（href、variant、ripple、magnetic） |
| `TiltCard` | 3D 傾斜效果 + 游標光暈 |
| `MagneticWrapper` | 游標磁吸效果 |
| `RippleEffect` | 點擊波紋（從點擊位置擴散） |
| `AnimatedSection` | Scroll-triggered 入場動畫（fade / perspective） |
| `PageTransition` | 頁面切換 fade 動畫 |
| `CanvasBackground` | Canvas 方式繪製飄浮彩色光暈（10 個 Lissajous 運動 Blob） |
| `BackgroundOrbs` | 3 個 static gradient 光暈跟隨滑鼠 |
| `ProjectPlaceholder` | 專案縮圖佔位（漸層 + 點點網格 + title watermark） |

---

## 9. 動畫系統

### 9.1 入場動畫曲線

```tsx
ease: [0.25, 0.1, 0.25, 1]  // 自訂 cubic-bezier，全站統一
```

### 9.2 常見動畫模式

**Fade Up（最常用）：**
```tsx
initial={{ opacity: 0, y: 24 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
```

**Perspective（次常用，較華麗）：**
```tsx
initial={{ opacity: 0, y: 12, rotateX: 6, filter: 'blur(4px)' }}
whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
viewport={{ once: true }}
style={{ perspective: '1200px' }}
```

**Hero Entrance（sequence）：**
- Badge: delay 0.05, duration 0.5
- H1: delay 0.15, duration 0.7
- Precision & Soul: delay 0.25, duration 0.6
- Description: delay 0.35, duration 0.5
- CTA: delay 0.5, duration 0.5

### 9.3 特殊效果

| 效果 | 位置 | 說明 |
|------|------|------|
| Hero 深度視差 | HeroSection | data-depth 1-4, 滑鼠位置驅動位移 (depth × 6px) |
| Sticky stacking | FeaturedWork | position: sticky, top 錯開 20px, z-index 遞增 |
| 無限 Logo 輪播 | LogoCarousel | framer-motion animate x，線性無限循環 |
| 液態光澤 | .glass-card | conic-gradient 旋轉動畫 15s linear infinite |
| 閱讀進度條 | Case study | 頂部金色線條，隨 scroll 伸縮 |
| 計數動畫 | MetricCard | ease-out cubic 數字遞增 |

---

## 10. 頁面結構

### 10.1 全域佈局 (`Layout.tsx`)

```
CanvasBackground (fixed, -z-10)
Header           (fixed top, z-50, transparent→blur on scroll)
PageTransition   (AnimatePresence)
  main.pt-24     (offset for fixed header)
    {children}
Footer           (border-t, mt-auto)
```

### 10.2 頁面路由

| 路由 | 元件 | 區段 |
|------|------|------|
| `/` | HomePage | Hero → LogoCarousel → ScrollIndicator → FeaturedWork → ProcessTeaser → TestimonialSection → AboutPreview → ExperienceSection → ContactCTA |
| `/work` | WorkPage | Header + ProjectCard grid (2-3 col) |
| `/work/[slug]` | CaseStudyPage | ReadingProgress → CaseStudyHero → MDX Content / Fallback → Impact Metrics → NextProject |
| `/about` | AboutPage | Header → Bio → Experience → Education → Certifications → Skills → Resume CTA |
| `/contact` | ContactPage | Header → Form + Contact Info (2 col) |
| `/resume` | ResumePage | Header → Download Card → Preview Note |

### 10.3 Header 導航

- **Desktop**: Home / Work / About / Contact + Resume 按鈕
- **Mobile**: Hamburger → Glass dropdown 選單，同樣 4 頁 + Resume
- **Scroll 行為**: 初始透明 → scroll > 20px 時 `bg-white/20 backdrop-blur-xl shadow-lg border border-white/10`

### 10.4 Header Offset

Header 高度約 96px（py-4 + py-3 + rounded-2xl padding），body 使用 `pt-24` 偏移。

---

## 11. Responsive Breakpoints

使用 Tailwind 預設斷點：

| Breakpoint | Min Width | 用途 |
|-----------|-----------|------|
| sm | 640px | 手機橫向 |
| md | 768px | 平板直向 |
| lg | 1024px | 桌面 |

**典型 RWD 模式：**
- `flex-col sm:flex-row` — 垂直→水平
- `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` — 欄數遞增
- `hidden md:flex` — 桌面導航
- `lg:hidden` — 行動版 CTA
- `px-6 md:px-12` — 兩側內邊距

---

## 附錄：程式碼風格約定

### CSS 變數命名
Kebab-case，如 `--accent-gold`、`--glass-surface`

### Tailwind v4 主題擴充
使用 `@theme inline` 區塊，將 CSS vars 綁定到 Tailwind utility

### Framer Motion easing
全站統一使用 `[0.25, 0.1, 0.25, 1]`

### viewport once
所有 `whileInView` 動畫都使用 `viewport: { once: true }`，避免重複觸發
