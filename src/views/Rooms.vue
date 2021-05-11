<template>
    <div>

        <NavbarComponent />

        <h2 class="d-sm-none">所有房型</h2>

        <div class="roomSection">
            <!--
                待新增樣式：
                    桌機板 hover 才可見房間資訊
                    手機板 直接顯示房間資訊，也就是 < 992 直接固定為 hover 狀態
            -->

            <!-- loading 動畫 -->
            <div class="loadingAnimation" v-if="loadingStatus">
                <!-- <div class="loadingAnimation"> -->
                <!--
                    v-if   ：條件為 true 時會把內容的 DOM 渲染出來、條件為 false 時把 DOM 移掉；
                    v-show ：一開始就先把 DOM 渲染出來，當條件切換時只做 display: none 的切換
                -->
                <!--
                    選用 v-if 的理由：如果沒有移掉，瀏覽器應該會耗費資源在不斷渲染動畫，只是看不到而已(display: none)。
                                    這點尚不知道如何驗證，只是做直覺性的推測
                -->
                <div class="spinner">
                    <div class="double-bounce1"></div>
                    <div class="double-bounce2"></div>
                </div>
            </div>

            <div v-for="(item, index) in allRoomData" :key="index" class="singleRoomArea" style="position: relative;">
                <div :style=" {backgroundImage:'url('+item.imageUrl+')'}">
                    <div class="singleRoomInfo">
                        <div>
                            <h3>{{ item.name }}</h3>
                            <a href="#" @click.prevent="toSingleRoom(item.id)">
                                <ThemifyIcon icon="hand-point-right" />
                                更多房間資訊
                                <ThemifyIcon icon="hand-point-left" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <FooterComponent />

    </div>
</template>


<script>
import ThemifyIcon from 'vue-themify-icons';

import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: 'Rooms',

  components: {
    NavbarComponent,
    FooterComponent,
    ThemifyIcon,
  },

  data() {
    return {
      allRoomData: '',
      loadingStatus: true,
    };
  },

  created() {
    this.getAllRoom();
  },


  methods: {

    getAllRoom() {
      const vm = this;
      vm.loadingStatus = true;

      vm.axios.get('https://challenge.thef2e.com/api/thef2e2019/stage6/rooms', {
        headers: {
          authorization:
                            `Bearer ${process.env.VUE_APP_TOKEN}`, // 已改為自己的 token
          'content-type': 'application/json',
        },
      })
        .then((resolveRes) => {
          // console.log(resolveRes);
          vm.allRoomData = resolveRes.data.items;
          // console.log("vm.allRoomData", vm.allRoomData);
          vm.loadingStatus = false;
        })

        .catch((rejectRes) => {
          // console.log(rejectRes);
        });
    },

    toSingleRoom(roomID) {
      this.$router.push({ path: '/singleRoom', query: { roomID } });
    },

  },
};
</script>


<style lang="scss" scoped>
    @import "@/assets/scss/frontEnd/rooms.scss";
</style>
