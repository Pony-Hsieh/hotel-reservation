import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import Vuex from "vuex"; // 用於 Vuex
import "bootstrap";

import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

import App from "./App.vue";
import router from "./router";

import store from "./store"; // 用於 Vuex

Vue.use(VueAxios, axios);
Vue.use(Vuex); // 用於 Vuex

Vue.component("loading", Loading);

Vue.config.productionTip = false;

new Vue({
    router,
    store, // 用於 Vuex
    render: h => h(App),
}).$mount("#app");
