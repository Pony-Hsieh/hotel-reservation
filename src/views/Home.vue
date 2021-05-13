<template>
    <div>
        <NavbarComponent />
        <div class="wholeView" />
    </div>
</template>


<script>
    import NavbarComponent from "@/components/NavbarComponent.vue";

    export default {
        name: "Home",

        components: {
            NavbarComponent,
        },
    };
</script>


<style lang="scss" scoped>
    @import "@/assets/scss/frontEnd/home.scss";
</style>