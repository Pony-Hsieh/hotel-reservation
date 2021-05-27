import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(Router);

export default new Router({
    routes: [

        // 首頁
        {
            path: "/",
            name: "home",
            component: Home,
        },

        // 房型總覽
        {
            path: "/rooms",
            name: "rooms",
            component: () => import("@/views/Rooms.vue"),
        },

        // 單一房型檢視
        {
            path: "/singleRoom",
            name: "singleRoom",
            component: () => import("@/views/SingleRoom.vue"),
        },

        // 聯絡我們
        {
            path: "/contactUs",
            name: "contactUs",
            component: () => import("@/views/ContactUs.vue"),
        },

        // 萬用路由
        {
            // 萬用路由要放在最後
            // 避免因為用戶輸入非預期的網址而跳轉至空白頁面
            path: "*",
            redirect: "/", // 導至首頁
        },

    ],
});
