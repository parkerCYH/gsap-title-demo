# GSAP 風格文字動畫展示

此專案展示了一個精緻的文字載入動畫效果，使用了 CSS 3D 變換和過渡效果來實現每個字母從底部翻轉上來的動態效果。雖然專案標題提到 GSAP，但本實現使用了純 CSS 轉場效果和 JavaScript 來控制動畫時序。

## 專案重點

1. 實現流暢的文字動態載入效果，每個字母逐一翻轉顯示
2. 動畫展現流暢性與創意，並注重細節（如時間控制、緩動曲線、視覺層次感）
3. 使用 CSS 3D 轉換實現引人注目的翻轉效果
4. 使用 Poppins 字體 `<link rel="stylesheet" href="https://use.typekit.net/pxc5lqp.css">`

## 設計思路

本專案使用深色背景和白色文字營造強烈對比，以引人注目的 3D 翻轉動畫展現「Team Taiwan!」的標語，呈現台灣精神。

## 技術實現

- **HTML** - 基本頁面結構
- **CSS** - 3D 轉換、過渡效果和視覺樣式
- **JavaScript** - 動態生成文字元素、控制動畫時序和使用 Intersection Observer 觸發動畫

## 實現細節

- **背景處理**：使用黑色背景和背景圖片 `g-pic.png` 作為視覺元素
- **動畫時序**：每個字母有 0.03 秒的延遲，使用 cubic-bezier 曲線實現流暢過渡
- **3D 效果**：使用 `transform: translate3d(80px, 50px, -300px) scaleY(0.01) rotateX(-90deg) rotate(-35deg)` 實現字母從底部翻轉而出的效果
- **智能載入**：使用 Intersection Observer 監測元素可見性，只在元素進入視窗時觸發動畫

## 文字內容

展示的文字為：

```
"Team Taiwan! Team Taiwan! Taiwan is a great country!"
```

## 使用方法

直接開啟 index.html 文件，進入頁面即可看到動畫效果。
