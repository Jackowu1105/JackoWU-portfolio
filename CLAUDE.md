@AGENTS.md

# Portfolio — 專案操作筆記

> 自動載入於呢個 folder。技術 context 用，唔好同 Obsidian 記憶重複（Obsidian 記「呢個係咩」，呢度記「而家點做」）。

## Run
- dev：`npm run dev`（http://localhost:3000）
- build：`npm run build`；lint：`npm run lint`
- 唔好改 `node_modules`；寫 code 前先睇 `node_modules/next/dist/docs/`（Next 16 有 breaking changes，見 AGENTS.md）

## 內容架構
- Case study 內容：`src/content/case-studies/<slug>.mdx`（14 篇，slug 同 `src/data/projects.ts` 對應）
- Project metadata：`src/data/projects.ts`（欄位：slug / title / client / role / timeline / tools / tags / featured / thumbnail / heroImage / summary / metrics / order）
- `src/app/work/[slug]/page.tsx` 用 `await import(@/content/case-studies/${slug}.mdx)` 動態載入；MDX 唔存在就靜默跳過
- 加新 case study = 喺 projects.ts 加 entry + 開對應 `.mdx`

## MDX 格式（睇 `momax-smart-app.mdx` 做範本）
- 開頭用 `<ProjectHeader overview=... challenge=... role=... team=... duration=... tools={[...]} />`
- 內文用 `## Section` / `### Subsection`，數據用粗體 + 數字（例如 **78%**）
- 結尾 `## Reflections`

## 設計系統（`docs/design.md` + `src/app/globals.css`）
- 調性：暖白 `#FAF7F5` 基底 + Glass Morphism + 金/teal 點綴。Light mode only，冇 dark mode。
- CSS tokens：`--bg-base` / `--bg-elevated` / `--glass-surface` / `--text-primary|secondary|tertiary` / `--accent-gold|warm|deep|glow`
- Tailwind theme tokens 同名（`bg-base`、`glass-surface`、`text-primary`、`accent-gold` …）
- 額外色：teal `#37848a`、金 `#c9a74d`、深 heading `#1d1b20`、中灰內文 `#494551`
- 字體：Epilogue（heading）、Inter（body）、JetBrains Mono（mono）
- 動畫：framer-motion；微互動 ripple / hover lift / magnetic follow；入場 blur+fade+slide

## 改嘢守則
- 跟 Jacko 技術偏好（見 global `~/.claude/CLAUDE.md`）：React/Next、Tailwind、TypeScript 簡單寫、2 空格縮進、單引號、camelCase/PascalCase、先 MVP
- 改完**自己驗證**：跑 `npm run build` 或 `npm run lint`；視覺改動要截圖睇（chrome-devtools / playwright MCP）
- 改 design token 要喺 `globals.css` 改源頭，唔好硬寫色碼散落組件