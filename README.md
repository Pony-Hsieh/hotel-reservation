
# 南得民宿 官網 作品說明
<br>

## 目錄
- [練習目的](##練習目的) 
- [基本資訊](##基本資訊) 
- [使用套件](##使用套件) 
- [網頁功能](##網頁功能) 

<br>

---
<br>


## 練習目的
<br>

1. 練習串接 [旅館 API](https://challenge.thef2e.com/news/17)

2. 練習使用日期選擇套件

3. 練習使用原生 JS 達成 AJAX 撈資料時的 loading 效果

4. 練習使用 Vuex 管理資料狀態

<br>

---
<br>


## 基本資訊
<br>

* [GitHub Page](https://pony-hsieh.github.io/hotel-reservation/dist/#/)

* [網站設計參考模板 1](https://challenge.thef2e.com/user/2630?schedule=3881#works-3881)

* [網站設計參考模板 2](https://challenge.thef2e.com/user/1875?schedule=3898#works-3898)

* [配色靈感](https://www.instagram.com/p/COVWD3CM2OD)

<br>

* 使用 Vue 2 開發；使用 Vue Cli 3 搭建專案

    下載完，解壓縮這個專案的壓縮檔後，記得先在終端機運行 
    <code> $ npm install </code>指令，把相關的套件安裝起來喔~

    如果沒安裝相關套件，就直接在終端機執行下面兩個指令的話，有可能會出錯：

    - 運行 開發環境 終端機指令：
    <code> $ npm run serve </code>

    - 運行 正式環境 終端機指令：
    <code> $ npm run build </code>

<br>

---
<br>



## 使用套件
<br>

可於 
[package.json](https://github.com/Pony-Hsieh/hotel-reservation/blob/master/package.json) 
→ "dependencies" 查詢各套件使用版本

<br>

---
<br>



## 網頁功能
<br>

● 全體：

1. Responsive Web Design (RWD) 響應式網頁設計

<br>
<br>


● [所有房型頁面](https://pony-hsieh.github.io/hotel-reservation/dist/#/rooms)：

1. 使用 Vuex 管理資料狀態

    寫在 
    [Rooms.vue](https://github.com/Pony-Hsieh/hotel-reservation/blob/master/src/views/Rooms.vue)、[index.js](https://github.com/Pony-Hsieh/hotel-reservation/blob/master/src/store/index.js) 中

<br>
<br>


● [單一房型頁面](https://pony-hsieh.github.io/hotel-reservation/dist/#/singleRoom?roomID=3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu)：

1. 限定日期預約功能
    
    寫在 [SingleRoom.vue](https://github.com/Pony-Hsieh/hotel-reservation/blob/master/src/views/SingleRoom.vue) 
    中的 notAllowedReservedDate()

    搭配 vue2-datepicker 套件
    - 無法預約 今日以前 的日期
    - 無法預約 90 日以後 的日期
    - 無法預約 已經被預定 的日期

<br>

2. 使用原生 JS，達成使用 AJAX 撈資料的過程中，有 loading 動畫的效果

    寫在
    [Rooms.vue](https://github.com/Pony-Hsieh/hotel-reservation/blob/master/src/views/Rooms.vue)、
    [index.js](https://github.com/Pony-Hsieh/hotel-reservation/blob/master/src/store/index.js)、
    [rooms.scss](https://github.com/Pony-Hsieh/hotel-reservation/blob/master/src/assets/scss/frontEnd/rooms.scss)
    中

    [動畫效果來源](https://tobiasahlin.com/spinkit/)

<br>

3. 隨機推薦房型功能(平版、桌機才有此功能)

    寫在 [SingleRoom.vue](https://github.com/Pony-Hsieh/hotel-reservation/blob/master/src/views/SingleRoom.vue) 
    中的 getRandomRoom()

<br>
<br>


● 其他：

1. 使用 Bootstrap 搭配手刻 RWD

    例如： 手刻 RWD 漢堡選單；寫在 
    [NavbarComponent.vue](https://github.com/Pony-Hsieh/hotel-reservation/blob/master/src/components/NavbarComponent.vue)、
    [navbarComponent.scss](https://github.com/Pony-Hsieh/hotel-reservation/blob/master/src/assets/scss/components/navbarComponent.scss)
    中

    <br>

2. 使用 SCSS 管理 CSS 樣式