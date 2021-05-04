<template>
    <div>

        <!-- <nav>
        <ul class="list-unstyled">
            <li>
                <div class="leftLine">
                    <div></div>
                </div>
                <router-link to="/">首頁</router-link>
            </li>
            <li>
                <div class="leftLine">
                    <div></div>
                </div>
                <router-link to="/rooms">所有房型</router-link>
            </li>
            <li>
                <div class="leftLine">
                    <div></div>
                </div>
                <router-link to="/">關於我們</router-link>
            </li>
        </ul>
    </nav> -->

        <button type="button" class="btn d-sm-none closeNavBtn" @click="navStatus = !navStatus">
            <ThemifyIcon icon="menu" />
        </button>
        <nav :class="{'ing' : navStatus}">
            <ul class="list-unstyled ">
                <img src="https://i.pinimg.com/originals/31/44/0d/31440d1c7eae15bfcc118f1cb543df9c.png" alt="">
                <li class="d-sm-none ">
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
                    <router-link to="/">聯繫我們</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>


<script>
    import ThemifyIcon from "vue-themify-icons";

    export default {
        name: "nav",

        components: {
            ThemifyIcon,
        },

        data() {
            return {
                navStatus: false,
            };
        },

        mounted() {
            console.log(this.$route);
            if (this.$route.fullPath === "/") {
                this.navStatus = true;
            }
            else {
                this.navStatus = false;
            }
        },

        watch: {
            "$route"(to, from) {
                // console.log("TO", to);
                // console.log("FROM", from);
                if (to.$route.fullPath === "/") {
                    this.navStatus = true;
                }
                else {
                    this.navStatus = false;
                    console.log(to.$route.fullPath);
                }
            },
        },
    };
</script>


<style lang="scss" scoped>
    @import "@/assets/scss/components/navbarComponent.scss";
</style>