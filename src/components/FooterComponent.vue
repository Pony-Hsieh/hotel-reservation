<template>
    <footer class="text-center">
        Copyright ©{{ copyrightYear }} All rights reserved
    </footer>
</template>


<script>
    export default {
        name: 'FooterComponent',

        data() {
            return {
                copyrightYear: "",
            };
        },

        created() {
            this.getCopyrightYear();
        },

        methods: {
            getCopyrightYear() {
                this.copyrightYear = new Date().getFullYear();
            },
        },
    };
</script>


<style lang="scss" scoped>
    @import "@/assets/scss/components/footerComponent.scss";
</style>