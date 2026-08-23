# Jacko's Portfolio — Case Study Submission Guide

This guide is for **Jacko** to easily submit new projects and case studies to the portfolio website using Claude. 

---

## 🎨 Overview of the Collaboration Workflow

You don't need to write code. You only need to **gather the ingredients**, and Claude will do the rest:
1. **Text**: Write a few bullets or talk in Cantonese about the project's background, challenges, decisions, and tools (using **Approach B or C**).
2. **Assets**: Organize your images/videos in a folder or let Claude move them.
3. **Palette & Setup**: Let Claude analyze your screenshots to extract the color palette and update the codebase.

---

## 📂 1. Visual Assets (Images & Videos)

For every project, create a slug folder (e.g. `public/images/projects/my-project-name/`).

### 📷 Images
- **`cover.jpg` (or `cover.png`)** — **Required**. The primary thumbnail of your project. High-resolution screenshot or mockup. Used on the Work page card and Case Study Hero.
- **`g01.jpg`, `g02.jpg`, `g03.jpg`...** — **Content screenshots**. Put them in sequence.
- **Adobe XD / Figma Prototypes** — If a graphic links to an interactive design, tell Claude: *"g03 links to this Figma Prototype URL"*. The page will render it with a clickable `"Click to view prototype"` overlay.
- **Before / After Comparison** — If you want the interactive slider, name them `gXX_before.jpg` and `gXX_after.jpg` (or just tell Claude which is before/after).

> **💡 Shortcut**: You don't have to copy them yourself. You can tell Claude: *"My images are in `Downloads/supermarket-app/`. The cover is `main.jpg` and others are `step1.png`, `step2.png`..."* Claude will copy, rename, and optimize them!

### 🎥 Videos
- **YouTube Embed (Recommended 🚀)**: Upload to YouTube (can be Unlisted) and send Claude the link. It is fast, performs well, and plays beautifully on all devices.
- **Local MP4 file**: Place it in `public/videos/my-project-name.mp4` (or let Claude do it). Claude will wrap it with an HTML5 `<video controls>` tag and use your `cover.jpg` as the loading poster.

---

## ✍️ 2. Text Materials (The Case Study Story)

You can provide raw text in **Obsidian / Notion bullets** or **talk in Cantonese (Voice-to-Text)**. 

### 📝 Basic Specs
- **Title & Client**: What is the project called? Who is the client?
- **Timeline**: Month & Year (e.g., `Jan - May 2021`). *Note: Please provide actual months to make it realistic!*
- **Your Role**: e.g., `Lead UX Designer`, `Solo Product Designer`, `Motion Graphic Designer`.
- **Tools Used**: e.g., `Figma`, `After Effects`, `Adobe Premiere`.

### 🧠 The Core Story (Bullets)
Tell Claude about these 3 things:
1. **The Challenge (問題)**: What was broken? Who was the user? What was the business goal?
2. **Key Decisions (設計決策)**: Did you face an option between A and B?
   * *Example: "We wanted Bluetooth unlock first, but it was too slow for users carrying groceries. We decided to use OCR / QR Code instead. This became our kiosk feature."* (Claude will turn this into gorgeous `DecisionCards`).
3. **Reflections (反思)**: What did you learn? What would you do differently if you had more budget/time?

---

## 🔮 3. Magic Cheat Sheet (Just Copy & Paste)

Here are three templates you can use to prompt Claude directly:

### 💡 Prompt Template A: Just PPTX / PDF
> "Jacko, I just finished a project. I have uploaded the presentation slide deck to `Downloads/ProjectName.pptx`. I also put all screenshots inside `Downloads/ProjectName-Images/`. Please extract the content, rename the images, pick a color palette, and write a case study page for me."

### 💡 Prompt Template B: Bullets (Obsidian/Notion Style)
> "Jacko, let's add a new project: `hk-airport-kiosk`
> - **Client**: Hong Kong Airport
> - **Role**: Solo UX Designer
> - **Timeline**: Jun - Aug 2023
> - **Tools**: Figma, Prototyping
> - **Story**: We redesigned the self-check-in kiosk.
>   - **Challenge**: Elderly travelers struggled with passports scanning.
>   - **Decision**: V1 was passport slot (users got confused about which side faced up). V2 was a flat glass scanner with clear graphic guides. Decided V2.
> - **Images**: Put all files from `Downloads/airport-project/` into the public image folder. `cover-mockup.png` is the cover, `process.png` is g01, `v1.png` is g02, `v2.png` is g03."

### 💡 Prompt Template C: Conversational Cantonese (Voice to Text)
> "Jacko，我想加個新 Work 叫做 `Ubizense Logo`。
> 呢個係 2024 年頭幫 Ubizense 公司做嘅 Logo Rebranding。我嘅角色係 Solo Designer。用 Illustrator 畫。
> 舊 Logo 太傳統，我哋想突出 IoT 同 AI 元素。我做咗 3 個方案：
> Option A 係以線條為主（太複雜），Option B 係以 U 字結合無限符號（客戶最鍾意，因為代表無限可能），Option C 係比較科技感（但太生硬）。最後揀咗 B。
> 相喺 `Downloads/ubizense/`，有張 `logo-guide.png` 同 `rebrand-process.png`。你同我執執個名同開 mdx 啦！"

---

## 🛠️ What Claude Will Automatically Generate

Once Claude receives your prompt, it will:
1. Update `src/data/projects.ts` with metadata (title, tags, category, custom order).
2. Extract the color palette directly from your `cover` image.
3. Move and rename all your screenshots into the website assets.
4. Write the `src/content/case-studies/<slug>.mdx` utilizing interactive components:
   - `<ProjectHeader>` for metadata.
   - `<DecisionCards>` for V1/V2 options.
   - `<ColorPalette>` for styling showcase.
   - `<ImageComparison>` if before/after images exist.
5. Verify the code compiles successfully (`npm run build`).
