<template>
    <div>
        <NavbarComponent />
        <div class="wholeView"></div>
    </div>
</template>


<script>
    import NavbarComponent from '@/components/NavbarComponent.vue';
    import FooterComponent from '@/components/FooterComponent.vue';
    import ThemifyIcon from "vue-themify-icons";

    export default {
        name: 'home',

        components: {
            NavbarComponent,
            FooterComponent,
            ThemifyIcon,
        },
    };
</script>


<style lang="scss" scoped>
    @import "@/assets/scss/frontEnd/home.scss";
</style>