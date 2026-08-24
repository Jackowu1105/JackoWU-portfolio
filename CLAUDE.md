@AGENTS.md

# Portfolio — 專案操作筆記

> 自動載入於呢個 folder。技術 context 用，唔好同 Obsidian 記憶重複（Obsidian 記「呢個係咩」，呢度記「而家點做」）。
> Obsidian 進度筆記：`01_Projects/進度-portfolio-case-studies.md`（vault 根目錄 `C:\Users\jacko\Desktop\Jacko-Obsidian\`，PARA 結構）

## Run
- dev：`npm run dev`（http://localhost:3000）
- build：`npm run build`；lint：`npm run lint`
- 唔好改 `node_modules`；寫 code 前先睇 `node_modules/next/dist/docs/`（Next 16 有 breaking changes，見 AGENTS.md）

## 內容架構（32 個 case study）
- Case study 內容：`src/content/case-studies/<slug>.mdx`（slug 同 `src/data/projects.ts` 對應；有 entry 但未有 .mdx 嘅會用 fallback 頁顯示 summary + highlights + "coming soon"，唔會 404）
- Project metadata：`src/data/projects.ts`（欄位：slug / title / client / role / timeline / tools / tags / featured / thumbnail / heroImage / summary / highlights / **palette** / **category** / order）
  - `palette: string[]` — 4 色（surface / primary / accent / dark），由真實截圖提取， Work page card 同 case study hero 會顯示
  - `category: 'ux' | 'graphic' | 'motion'` — 分類（預設 ux）。Work page tabs 按此分組
- `src/app/work/[slug]/page.tsx` 用 `await import(@/content/case-studies/${slug}.mdx)` 動態載入；MDX 唔存在就走 fallback（summary + highlights），唔係靜默跳過
- 加新 case study = 喺 projects.ts 加 entry + 開對應 `.mdx` + 攞圖入 `public/images/projects/<slug>/`
- 排位原則：featured 6 個（最強 UX case）+ 非 featured 26 個；`order` 排先後

### AIFT 現職工作（order 24–32）
- Jacko 現職 AIFT（人工智能金融科技實驗室 / AI FinTech Lab，11/2024–而家）。工作內容檔案喺 `D:\AIFT`
- 9 個 AIFT case study：finsights-ai / tap-tokenized-abs-planner / tolod-logistics-portal / scf-supply-chain-finance / tolo-analytics-platform（UX）/ aift-hackathon-2024 / innoex-2025-booth / innoex-2026-backdrop（Graphic）/ aift-corporate-motion（Motion）
- cover + palette 提取流程：靜態圖用 sharp crop 16:9 + k-means k=4（`limitInputPixels:false` 處理巨圖）；video 用 ffmpeg 抽 frame；跑緊嘅 web app（SCF）跑 `npm run dev` + headless Chrome 截圖
- 4 個 UX case（FinSightsAI / TAP-X / TOLOAnalytics / TOLOD）Jacko 會畀 Figma 設計稿做 refinement + 換 gallery 圖；而家用 pptx / 官網圖 / login_poster / 截圖做暫代
- TOLOD（營運平台）同 TOLOAnalytics（官網）係同一產品線，分開 2 個 case study 但講清關係
- 舊 PPTX（`Downloads/JackoWu_profilo_All (1).pptx`）係內容來源之一 — 入面有 kiosk 設計、demo 影片、marketing campaign 等額外材料

## 加新 case study 嘅流程
- 有 Custom Agent `case-study-writer`（`~/.claude/agents/case-study-writer.md`）專做呢件事：Jacko 提供文字（bullets 或口述）+ 圖片 + 影片/連結，agent 自動寫 MDX、註冊 projects.ts、提取 palette、build 驗證
- Jacko 畀資料嘅最佳方式（B/C 模式）+ 圖片/影片/連結規範：見 `docs/case-study-submission-guide.md`
- 畀 palette 唔好作假——用 sharp 讀 cover.jpg dominant color cluster 提取 4 色

## 圖片資產
- 全部喺 `public/images/projects/<slug>/`，每個 project：`cover.<ext>` + `g01.<ext>` `g02.<ext>` …
- 來源：舊 Framer portfolio（jackowu.framer.website）已 download 嘅原圖
- `thumbnail` / `heroImage` 指向 `/images/projects/<slug>/cover.<ext>`

## MDX 格式（睇 `momax-smart-app.mdx` 做範本）
- 開頭用 `<ProjectHeader overview=... challenge=... role=... team=... duration=... tools={[...]} />`
- 內文用 `## Section` / `### Subsection`，**全英文**（Jacko 要求 website 唔出現中文）
- Visual Design 段加 `<ColorPalette colors={[...]} labels={[...]} />` 顯示色板 swatch card
- Demo 影片用 `<iframe src="https://www.youtube-nocookie.com/embed/<id>" className="w-full aspect-video rounded-xl border-0 my-8" />` 嵌入（Consoance、wine-dine、iddf 已有）
- 結尾 `## Reflections`
- 唔好留 `[需補充]` placeholder 或中文 remarks——要補嘅嘢合理推斷寫英文，唔作假數據

## MDX component（`mdx-components.tsx`）
- h2 自動編號（01、02…）via `.case-study-body` CSS counter（`globals.css`），加金色 accent 線
- h3 有金色圓點；list 有金色 marker；blockquote 係 callout card；table 有圓角邊框
- 已註冊嘅自訂 component：`ProjectHeader`、`CaseStudyImage`、`ImageComparison`、`ColorPalette`、`DecisionCards`
- `DecisionCards` — 方案比較／版本迭代卡片堆（A/B/C、V1/V2/V3），最後採納嗰張金框高亮；取代 markdown table 顯示 options

## Case study 專屬 component（`src/components/case-study/`）
- `CaseStudyHero` — breadcrumb + title + meta grid + tags + **palette swatches** + hero 圖（21:9）
- `CaseStudyImage` — 圖片框，支援 `href`（click 圖開新 tab，例如 Adobe XD prototype）+ `hrefLabel` badge
- `ImageComparison` — before/after 滑桿（用喺 as2 嘅 Phase 2 vs Phase 3）
- `ColorPalette` — 4 格 swatch card（色塊 + hex + label），放 Visual Design 段
- `ProjectHeader`、`ReadingProgress`、`NextProject`、`MetricCard`（MetricCard 已冇用，可刪）

## Work page（`src/app/work/page.tsx` + `src/components/work/WorkGallery.tsx` + `ProjectCard.tsx`）
- `WorkGallery`（client component）：分類 tabs（All / UX & Product / Graphic Design / Motion）+ **Show more** 分批載入（首屏 3 compact，每次 +4），避免首屏一次過太多圖
- tabs 按 `projects.ts` 嘅 `category` 分組；`category` 冇設就當 `ux`
- 兩段式 layout：**Featured**（6 個大卡，2 欄）+ **More work**（compact 卡，3 欄）
- ProjectCard 顯示：編號、category eyebrow、thumbnail、title、client · timeline、tags、palette swatches
- featured 大卡仲有 summary + hover 效果

## 設計系統（`docs/design.md` + `src/app/globals.css`）
- 調性：暖白 `#FAF7F5` 基底 + Glass Morphism + 金/teal 點綴。Light mode only，冇 dark mode。
- CSS tokens：`--bg-base` / `--bg-elevated` / `--glass-surface` / `--text-primary|secondary|tertiary` / `--accent-gold|warm|deep|glow`
- Tailwind theme tokens 同名（`bg-base`、`glass-surface`、`text-primary`、`accent-gold` …）
- 額外色：teal `#37848a`、金 `#c9a74d`、深 heading `#1d1b20`、中灰內文 `#494551`
- 字體：Epilogue（heading）、Inter（body）、JetBrains Mono（mono）
- 動畫：framer-motion；微互動 ripple / hover lift / magnetic follow；入場 blur+fade+slide
- `.case-study-body` counter rules 喺 `globals.css` 底部

## 改嘢守則
- 跟 Jacko 技術偏好（見 global `~/.claude/CLAUDE.md`）：React/Next、Tailwind、TypeScript 簡單寫、2 空格縮進、單引號、camelCase/PascalCase、先 MVP
- **網站內容全英文**，唔好出現中文（code comment 都用英文）
- 設計細節（配色 hex 等）要基於真實截圖，唔好作假；唔確定嘅合理推斷就好
- 改完**自己驗證**：跑 `npm run build` 或 `npm run lint`；視覺改動要截圖睇（chrome-devtools / playwright MCP）
- 改 design token 要喺 `globals.css` 改源頭，唔好硬寫色碼散落組件
- GitHub：`https://github.com/Jackowu1105/JackoWU-portfolio.git`（main branch）— Jacko 講先至 push