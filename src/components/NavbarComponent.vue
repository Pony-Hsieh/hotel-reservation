<template>
    <div>

        <button type="button" class="btn d-sm-none closeNavBtn" @click="navStatus = !navStatus">
            <ThemifyIcon icon="menu" />
        </button>
        <nav :class="{'ing' : navStatus}">
            <ul class="list-unstyled ">
                <img src="https://i.pinimg.com/originals/31/44/0d/31440d1c7eae15bfcc118f1cb543df9c.png" alt="logo">
                <li class="d-sm-none">
                    <button type="button" class="btn" @click="navStatus = false">
                        <ThemifyIcon icon="close" style="font-weight: 900;" />
                    </button>
                </li>
                <li>
                    <router-link to="/">首頁</router-link>
                </li>
                <li>
                    <router-link to="/rooms">所有房型</router-link>
                </li>
                <li>
                    <router-link to="/contactUs">聯絡我們</router-link>
                </li>
            </ul>
        </nav>

    </div>
</template>


<script>
import ThemifyIcon from 'vue-themify-icons';

export default {
  name: 'NavbarComponent',

  components: {
    ThemifyIcon,
  },

  data() {
    return {
      navStatus: false,
      nowPage: '',
      navLightColor: false,
    };
  },

  mounted() {
    // console.log(this.$route);
    this.nowPage = this.$route.fullPath;
    // console.log("this.nowPage", this.nowPage);

    if (this.$route.fullPath === '/') {
      this.navStatus = true;
    } else {
      this.navStatus = false;
    }

    if (this.$route.fullPath === '/rooms') {
      this.navLightColor = true;
    } else {
      this.navLightColor = false;
    }

    // if()
  },

  watch: {
    $route(to, from) {
      // console.log("TO", to);
      // console.log("FROM", from);
      if (to.$route.fullPath === '/') {
        this.navStatus = true;
      } else {
        this.navStatus = false;
        // console.log(to.$route.fullPath);
      }
    },
  },
};
</script>


<style lang="scss" scoped>
    @import "@/assets/scss/components/navbarComponent.scss";
</style>
