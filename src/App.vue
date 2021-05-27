<template>
    <div id="app">
        <router-view />
        <loading :active.sync="isLoading">
            <div class="spinner">
                <div class="double-bounce1" />
                <div class="double-bounce2" />
            </div>
        </loading>
    </div>
</template>


<script>
    import ThemifyIcon from "vue-themify-icons";

    import NavbarComponent from "@/components/NavbarComponent.vue";
    import FooterComponent from "@/components/FooterComponent.vue";

    export default {
        name: "App",

        computed: {
            isLoading() {
                return this.$store.state.isLoading;
            },
        },
    };
</script>


<style lang="scss">
    @import "@/assets/scss/main.scss";
</style>