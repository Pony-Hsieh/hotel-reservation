import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({

    actions: { // 類似於原本元件中的 methods
        // 筆記
        /*
            官網：https://vuex.vuejs.org/zh/api/#actions

            ● 在 store 上註冊 action；
                處理函數總是接受 context 作為第一個參數， payload (可選)作為第二個參數

                context 對象包含以下屬性：
                {
                    state,      // 等同于 `store.state`，若在模块中则为局部状态
                    rootState,  // 等同于 `store.state`，只存在于模块中
                    commit,     // 等同于 `store.commit`
                    dispatch,   // 等同于 `store.dispatch`
                    getters,    // 等同于 `store.getters`
                    rootGetters // 等同于 `store.getters`，只存在于模块中
                }
        
            
            ● action 類似於 mutation，不同在於：
                action 提交的是 mutation，而不是直接變更狀態。
                action 可以包含任意異步(非同步)操作；mutation 必須是同步函數(函數內不能有非同步行為，例如 AJAX)
                AJAX 行為也會擺在這裡

            ● this 指向 Store

            ● 目前推測： actions 比較像是收發室，就是把從 其他地方收到的資料，轉交給各收件人(mutations)自行處理
        */


        updateIsLoading(context, payload) {
            context.commit("IS_LOADING", payload);
        },


        // 取得所有房型資料
        getAllRoom(context) {
            /*
                在元件中的 methods 的指定函式中，使用 this.$store.dispatch("getAllRoom", payload);
                第二個參數 payload 不一定要寫
            */

            // 如果已經有房型資料的資料，就不用重新撈
            if (this.state.allRoomData.length !== 0) {
                return;
            }

            // 還沒有所有房型資料的話，就發 Promise 拿資料
            else {
                context.commit("LOADING_STATUS", true);
                // console.log("actions", this); // 指向 Store

                axios.get("https://challenge.thef2e.com/api/thef2e2019/stage6/rooms", this.state.axiosHeaders)
                    .then((resolveRes) => {
                        // console.log(resolveRes);
                        // console.log("resolveRes.data.items", resolveRes.data.items);
                        context.commit("ALL_ROOM_DATA", resolveRes.data.items);
                        context.commit("LOADING_STATUS", false);
                    })
                    .catch((rejectRes) => {
                        // console.log(rejectRes);
                        // context.commit("LOADING_STATUS", false);
                        this.dispatch("getAllRoom");
                    });
            }
        },

    },



    mutations: { // 類似於原本元件中的 ??

        // 筆記
        /*
            官網 1：https://vuex.vuejs.org/zh/api/#mutations
            官網 2：https://vuex.vuejs.org/zh/guide/mutations.html
            官方推薦使用 全大寫 來命名行為
        
            操作 state 的行為會放在這

            類型: { [type: string]: Function }

            在 store 上註冊 mutation；
            處理函數總是接受 state 作為第一個參數(如果定義在模塊中，則為模塊的局部狀態)，
            payload 作為第二個參數（可選）。

            也就是說，第一個參數就是你要操作 state 中的哪個參數


            mutation 必須是同步函數(函數內不能有非同步行為，例如 AJAX)
        */

        IS_LOADING(state, payload) { // 搭配 vue-loading-overlay
            state.isLoading = payload;
        },

        LOADING_STATUS(state, payload) { // 自己寫的
            state.loadingStatus = payload;
            /*
                不要寫成 this.$state.loadingStatus 喔~

                會出現以下的錯誤：
                TypeError: Cannot set property 'loadingStatus' of undefined
            */
            // console.log("mutations", this); // 指向 Store
        },

        ALL_ROOM_DATA(state, payload) {
            state.allRoomData = payload;
        },

    },



    state: { // 類似於原本元件中的 data

        axiosHeaders: {
            headers: {
                Authorization: `Bearer ${process.env.VUE_APP_TOKEN}`,
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        },

        isLoading: false, // 所有頁面

        loadingStatus: false, // 僅限 Rooms
        allRoomData: [],
    },

});