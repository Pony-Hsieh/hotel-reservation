<template>
  <div>

    <NavbarComponent />

    <h1 class="d-sm-none">聯絡我們</h1>

    <section>
      <div>
        <h3>
          <ThemifyIcon icon="mobile" />
          聯絡電話：
          <br />
          (點按可直接撥打)
        </h3>
        <a href="tel:+886-2-23206239">02-2320-6239</a>
      </div>
      <div>
        <h3>
          <ThemifyIcon icon="location-pin" />
          地址：
        </h3>
        <h4>
          台北市中正區重慶南路一段122號
        </h4>
      </div>
      <div>
        <h3>
          <ThemifyIcon icon="email" />
          Email
        </h3>
        <h4>
          public_web@oop.gov.tw
        </h4>
      </div>
    </section>

    <div class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.814773352636!2d121.5100991150064!3d25.04035928396941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a90a870e5af1%3A0x180e1a442209d1c1!2zMTAw5Y-w5YyX5biC5Lit5q2j5Y2A6YeN5oW25Y2X6Lev5LiA5q61MTIy6Jmf!5e0!3m2!1szh-TW!2stw!4v1611559277975!5m2!1szh-TW!2stw"
        frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0" />
    </div>

    <FooterComponent />

  </div>
</template>


<script>
  import ThemifyIcon from 'vue-themify-icons';

  import NavbarComponent from '@/components/NavbarComponent.vue';
  import FooterComponent from '@/components/FooterComponent.vue';

  export default {
    name: 'aboutUs',

    components: {
      NavbarComponent,
      FooterComponent,
      ThemifyIcon,
    },
    data() {
      return {

      };
    },

    mounted() {

    },

    methods: {

    },
  };
</script>


<style lang="scss" scoped>
  @import "@/assets/scss/frontEnd/ContactUs.scss";
</style>