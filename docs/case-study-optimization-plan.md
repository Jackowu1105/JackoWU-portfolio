# Case Study 最佳化計劃

> 目標：根據真實截圖重新整理全部 17 個 case study 嘅內容（尤其配色／字體／設計系統等設計細節），並重新排位 projects.ts。

## 而家狀態

- 17 個 case study 內容結構已 OK（Problem → Research → Design Process → Visual Design → Outcomes → Reflections）
- **問題**：Visual Design 段入面嗰啲 color hex（例如 zproduct `#0066CC`、consonance `#1A3A52`、ontolo `#0A2F5A`）係之前「消毒」階段 AI 估計嘅，**未對照過真實截圖**，可能唔準
- 部分較薄：canon（53 行）、smart-logistics（51）、ubizense（59）、massage-gun（60）
- 3 個新加嘅（ubizense、massage-gun、smart-logistics）內容偏精簡，多處 `[需補充]`
- 圖片已全部 download 到 `public/images/projects/<slug>/`

## 做法原則

- **配色／字體／設計系統**：逐個 project 開佢嘅截圖（cover + gallery）觀察真實配色、字體風格、佈局、組件，寫成準確描述
- 觀察到但唔 100% 確定嘅數值（例如確切 hex），用合理推斷 + 標 `[需補充：hex 待核實]`
- 唔作假量化數據（維持之前消毒原則）
- 統一所有 case study 嘅 Visual Design 段結構：配色 / 字體 / 設計系統組件 / 平台或 accessibility 考量

## 執行階段（分幾次做，每段做完更新進度）

### Phase 1 — 重新排位 projects.ts（快）
重新排 featured + order，原則：**代表性 + 多樣性 + 近期優先**。
建議排法（待 Jacko 確認）：

**Featured（首頁焦點，6 個）：**
1. `as2-aahk-controller-dashboard`（2024，最新、機場 dashboard，視覺強）
2. `zproduct-dashboard`（2023，可配置 widget 系統，enterprise 代表）
3. `momax-smart-app`（2021，IoT + 跨平台設計系統，flagship）
4. `ontolo-residential-app`（2019，accessibility / 雙模式，獨特賣點）
5. `mtr-property-app`（2019，動態主題設計系統）
6. `consonance-smart-building`（2021，luxury smart building + QR）

**非 featured（11 個，按時間新到舊）：**
7. `vehicle-tracker-geo-fence`（2023）
8. `smart-logistics-datathon-2024`（2024，graphic design）
9. `ubizense-logo-rebranding`（2023，branding）
10. `asset-world-corporation-connext`（2021）
11. `cic-merchant-takeaway`（2021）
12. `massage-gun`（2021）
13. `wine-dine-festival-pos`（2016）
14. `road-to-ultra-pos`（2016）
15. `citysuper-lucky-draw`（2016）
16. `iddf-2016-eposter`（2016）
17. `canon-photomarathon-2016`（2016）

> Jacko 可調整。featured 數量可由 6 改為其他。

### Phase 2 — 逐個 case study 對照截圖重寫 Visual Design 段
每個 project：
1. 開 `public/images/projects/<slug>/` 嘅截圖觀察（cover + 主要 UI gallery）
2. 重寫 `## Visual Design` 段：真實配色（推斷 hex + 標 `[需補充]`）、字體風格、佈局、組件、設計系統、accessibility
3. 順手潤飾其他段嘅內容流暢度

分批做（每輪 3-4 個），按 featured 優先順序：
- 輪 A：as2、zproduct、momax、ontolo
- 輪 B：mtr、consonance、vehicle-tracker、wine-dine
- 輪 C：awc、cic、citysuper、road-to-ultra
- 輪 D：iddf、canon、massage-gun、ubizense、smart-logistics

### Phase 3 — 豐富 3 個新 case study
ubizense、massage-gun、smart-logistics：補完 Design Process / Key Decisions 段，清走合理嘅 `[需補充]`（觀察截圖推斷），剩低真係只有 Jacko 知嘅留 `[需補充]`。

### Phase 4 — 驗證
- `npm run build` 確認編譯過
- `npm run lint` 確認冇新 error
- playwright 截圖睇幾個 featured case study 嘅 Visual Design 段 render 正確

### Phase 5 — 進度筆記
- 寫 `Obsidian/Claude記憶/專案/進度-portfolio-case-study優化.md`，記做到邊、下一步、待 Jacko 補充嘅 `[需補充]` 清單

## 風險 / 注意

- 我觀察截圖推斷嘅 hex 一定有誤差，標 `[需補充]` 等你核實
- 大工作量，分幾次 session 做；每段做完會話你
- 唔會改 design token（`globals.css`），只改 MDX 內容 + projects.ts 排位