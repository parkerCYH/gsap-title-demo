# 文字載入動畫展示：三種實作方式

本專案展示了一段精緻且富有創意的文字載入動畫，靈感來自國際知名開發團隊 Dogstudio 的網站案例，並以「Team Taiwan! Team Taiwan! Taiwan is a great country!」這段文字作為主題，實現動畫的細緻度與視覺衝擊感。

為了探索不同技術在動畫表現上的可能性，本專案分別以 **純 CSS/JS**、**GSAP**、以及 **Next.js + React + GSAP** 三種方式實作相同動畫概念，呈現文字由下方翻轉進場的 3D 效果。

---

## 🧪 三種版本說明

### 1. `index-cssjsonly.html`：純 CSS/JS 實作

- 使用 CSS transition 與 `cubic-bezier` 緩動實現動畫
- JavaScript 動態產生文字元素
- 配合 Intersection Observer 觸發動畫

### 2. `index-gsap.html`：GSAP 實作

- 使用 GSAP 的 fromTo 實現動畫順序控制
- 更細緻的動畫
- 相較 CSS/JS 更具可控性與擴充性

### 3. `Next.js + React + GSAP`

- 現代框架組合，提升可維護性與模組化
- 結合 React 組件與 GSAP 動畫邏輯
- 適用於實際專案中大型動畫應用場景

---

## 🔍 技術細節

- **動畫觸發機制**：使用 Intersection Observer 判斷元素進入視口時啟動動畫
- **動畫時間控制**：
  - CSS/JS：每個字母延遲 0.03 秒進場
  - GSAP：使用 stagger，延遲 0.015 秒，並加入自定義 easing
    start quote 的 position 與 design 完美符合，讓換行時文字垂直置左對齊，十分美觀
    在 next 版本中引入字型使用 @import url("https://use.typekit.net/pxc5lqp.css") 確保與 design 一致
    導入 cn 讓 class 更易讀

---

## 🧪 使用方式

### CSS/JS 與 GSAP 版本：

- 直接打開對應 HTML 檔案即可觀看動畫

### Next.js + React + GSAP 版本：

```bash
pnpm install       # 安裝相依套件
pnpm dev           # 啟動開發伺服器
http://localhost:3000  # 開啟頁面預覽動畫
```
