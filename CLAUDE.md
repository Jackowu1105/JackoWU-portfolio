@AGENTS.md

# Portfolio — 專案操作筆記

> 自動載入於呢個 folder。技術 context 用，唔好同 Obsidian 記憶重複（Obsidian 記「呢個係咩」，呢度記「而家點做」）。
> Obsidian 進度筆記：`Claude記憶/專案/進度-portfolio-case-studies.md`

## Run
- dev：`npm run dev`（http://localhost:3000）
- build：`npm run build`；lint：`npm run lint`
- 唔好改 `node_modules`；寫 code 前先睇 `node_modules/next/dist/docs/`（Next 16 有 breaking changes，見 AGENTS.md）

## 內容架構（17 個 case study）
- Case study 內容：`src/content/case-studies/<slug>.mdx`（17 篇，slug 同 `src/data/projects.ts` 對應）
- Project metadata：`src/data/projects.ts`（欄位：slug / title / client / role / timeline / tools / tags / featured / thumbnail / heroImage / summary / highlights / **palette** / order）
  - `palette: string[]` — 4 色（surface / primary / accent / dark），由真實截圖提取， Work page card 同 case study hero 會顯示
- `src/app/work/[slug]/page.tsx` 用 `await import(@/content/case-studies/${slug}.mdx)` 動態載入；MDX 唔存在就靜默跳過
- 加新 case study = 喺 projects.ts 加 entry + 開對應 `.mdx` + 攞圖入 `public/images/projects/<slug>/`
- 排位原則：featured 6 個（最強 UX case）+ 非 featured 11 個；`order` 排先後

## 圖片資產
- 全部喺 `public/images/projects/<slug>/`，每個 project：`cover.<ext>` + `g01.<ext>` `g02.<ext>` …
- 來源：舊 Framer portfolio（jackowu.framer.website）已 download 嘅原圖
- `thumbnail` / `heroImage` 指向 `/images/projects/<slug>/cover.<ext>`

## MDX 格式（睇 `momax-smart-app.mdx` 做範本）
- 開頭用 `<ProjectHeader overview=... challenge=... role=... team=... duration=... tools={[...]} />`
- 內文用 `## Section` / `### Subsection`，**全英文**（Jacko 要求 website 唔出現中文）
- Visual Design 段加 `<ColorPalette colors={[...]} labels={[...]} />` 顯示色板 swatch card
- 結尾 `## Reflections`
- 唔好留 `[需補充]` placeholder 或中文 remarks——要補嘅嘢合理推斷寫英文，唔作假數據

## MDX component（`mdx-components.tsx`）
- h2 自動編號（01、02…）via `.case-study-body` CSS counter（`globals.css`），加金色 accent 線
- h3 有金色圓點；list 有金色 marker；blockquote 係 callout card；table 有圓角邊框
- 已註冊嘅自訂 component：`ProjectHeader`、`CaseStudyImage`、`ImageComparison`、`ColorPalette`

## Case study 專屬 component（`src/components/case-study/`）
- `CaseStudyHero` — breadcrumb + title + meta grid + tags + **palette swatches** + hero 圖（21:9）
- `CaseStudyImage` — 圖片框，支援 `href`（click 圖開新 tab，例如 Adobe XD prototype）+ `hrefLabel` badge
- `ImageComparison` — before/after 滑桿（用喺 as2 嘅 Phase 2 vs Phase 3）
- `ColorPalette` — 4 格 swatch card（色塊 + hex + label），放 Visual Design 段
- `ProjectHeader`、`ReadingProgress`、`NextProject`、`MetricCard`（MetricCard 已冇用，可刪）

## Work page（`src/app/work/page.tsx` + `src/components/work/ProjectCard.tsx`）
- 兩段式 layout：**Featured**（6 個大卡，2 欄）+ **More projects**（11 個 compact 卡，3 欄）
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