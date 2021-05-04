import Vue from 'vue';
import Router from 'vue-router';
import HomeFrame from '@/views/HomeFrame.vue';
import Home from '@/views/Home.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeFrame,
            children: [
                {
                    // 首頁
                    path: '',
                    name: 'home',
                    component: Home,
                },
                {
                    // 房型總覽
                    path: '/rooms',
                    name: 'rooms',
                    component: () => import('@/views/Rooms.vue'),
                },
                {
                    // 關於我們
                    path: '/aboutUs',
                    name: 'aboutUs',
                    component: () => import('@/views/AboutUs.vue'),
                },
            ]
        },
        // 房型總覽
        {
            path: '/rooms',
            name: 'rooms',
            // component: Rooms,
            component: () => import('@/views/AboutUs.vue'),
        },
        // 單一房型檢視
        {
            path: '/singleRoom',
            name: 'singleRoom',
            component: () => import('@/views/SingleRoom.vue'),
        },







        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
        },
    ],
});
