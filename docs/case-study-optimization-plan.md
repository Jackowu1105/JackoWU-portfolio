# Case Study 最佳化 — 完成記錄

> 呢個原本係計劃，已於 2026-08-22 執行完成。保留作記錄。

## ✅ 狀態：已完成（2026-08-22）

### Phase 1 — 重新排位 projects.ts ✅
- Featured 6 個：as2、zproduct、momax、ontolo、mtr、consonance
- 非 featured 11 個：wine-dine、vehicle-tracker、awc、cic、citysuper、road-to-ultra、iddf、canon、massage-gun、ubizense、smart-logistics
- 新增 `palette: string[]` 欄位（17 個 project 各 4 色，由真實截圖提取）

### Phase 2 — Visual Design 段對照截圖重寫 ✅
- 全部 17 個 case study 嘅 Visual Design 段已用 sharp 程式從真實截圖提取配色，取代之前 AI 估計嘅 hex
- 每個 case 嘅 Visual Design 段加咗 `<ColorPalette>` swatch card（色塊 + hex + label）

### Phase 3 — 3 個新 case study 豐富 ✅
- ubizense、massage-gun、smart-logistics 已補完 Design Process / Key Decisions，內容基於截圖觀察 + 合理推斷，冇作假數據

### Phase 4 — 驗證 ✅
- `npm run build` 通過，25 條 route 全部 prerender
- playwright 截圖驗證 Visual Design 段、ColorPalette、h2 編號、hero palette 都 render 正確

### Phase 5 — 進度筆記 ✅
- 已更新 `Obsidian/01_Projects/進度-portfolio-case-studies.md`

## 計劃外完成咗嘅嘢

呢個 session 除咗原計劃，仲做咗：
1. **舊 Framer portfolio 圖片移植** — 由 jackowu.framer.website download 咗 68 張圖到 `public/images/projects/<slug>/`，填埋 `thumbnail` / `heroImage`（之前全部係空 string）
2. **新增 3 個 case study** — ubizense-logo-rebranding、massage-gun、smart-logistics-datathon-2024（舊 portfolio 有但新 portfolio 冇嘅）
3. **Work page 重新排版** — 兩段式 layout（6 featured 大卡 + 11 compact 卡），每張卡有 palette swatches、編號、meta row
4. **Case study page 重新排版** — h2 自動編號、callout blockquote、accent list、hero palette、ColorPalette component
5. **全站轉全英文** — 移除所有中文 remarks 同 `[需補充]` placeholder，連 code comment 都轉埋英文
6. **新 component** — `ColorPalette`、`CaseStudyImage` 加 `href`、`ImageComparison` 改成真 before/after slider
7. **GitHub 備份** — commit `b03a4c4` push 上 `Jackowu1105/JackoWU-portfolio` main branch

## 待 Jacko 跟進（非阻塞）

- ColorPalette 嘅 hex 係由截圖提取嘅近似值，想更精準可以逐個核實
- 3 個新 case study（ubizense、massage-gun、smart-logistics）內容係合理推斷，有真實細節可以再豐富
- Featured 嘅選擇同排序可以再調