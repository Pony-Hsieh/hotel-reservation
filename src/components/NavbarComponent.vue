<template>
    <div>
        <button type="button" class="btn d-sm-none closeNavBtn" @click="navStatus = !navStatus">
            <ThemifyIcon icon="menu" />
        </button>
        <nav :class="{'ing' : navStatus}">
            <ul class="list-unstyled ">
                <div class="logoArea">
                    <img src="@/assets/img/logo_remvoe_bg.png" alt="logo image">
                </div>
                <li class="d-sm-none">
                    <button type="button" class="btn" @click="navStatus = false">
                        <ThemifyIcon icon="close" style="font-weight: 900;" />
                    </button>
                </li>
                <li>
                    <router-link to="/">
                        首頁
                    </router-link>
                </li>
                <li>
                    <router-link to="/rooms">
                        所有房型
                    </router-link>
                </li>
                <li>
                    <router-link to="/contactUs">
                        聯絡我們
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>


<script>
    import ThemifyIcon from "vue-themify-icons";

    export default {
        name: "NavbarComponent",

        components: {
            ThemifyIcon,
        },

        data() {
            return {
                navStatus: false,
            };
        },

        watch: {
            $route(to) {
                if (to.$route.fullPath === "/") {
                    this.navStatus = true;
                } else {
                    this.navStatus = false;
                }
            },
        },

        beforeMount() {
            if (this.$route.fullPath === "/") {
                this.navStatus = true;
            } else {
                this.navStatus = false;
            }
        },
    };
</script>


<style lang="scss" scoped>
    @import "@/assets/scss/components/navbarComponent.scss";
</style>