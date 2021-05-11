<template>
    <div>
        <NavbarComponent />
        <div class="wholeView"></div>
    </div>
</template>


<script>
import NavbarComponent from '@/components/NavbarComponent.vue';

export default {
  name: 'home',

  components: {
    NavbarComponent,
  },
};
</script>


<style lang="scss" scoped>
    @import "@/assets/scss/frontEnd/home.scss";
</style>
