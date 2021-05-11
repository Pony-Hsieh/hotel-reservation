import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [

    // 首頁
    {
      path: '/',
      name: 'home',
      component: Home,
    },

    // 房型總覽
    {
      path: '/rooms',
      name: 'rooms',
      // component: Rooms,
      component: () => import('@/views/Rooms.vue'),
    },

    // 單一房型檢視
    {
      path: '/singleRoom',
      name: 'singleRoom',
      component: () => import('@/views/SingleRoom.vue'),
    },

    // 聯絡我們
    {
      path: '/contactUs',
      name: 'contactUs',
      component: () => import('@/views/ContactUs.vue'),
    },

  ],
});
