<template>
  <the-navbar/>
  <div class="logo-app">
    <img src="@/assets/logo.webp" alt="Dyer's Diner Logo">
  </div>
  <router-view/>
  <div class="container__map">
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2453.9498238300225!2d1.118332315939925!3d52.04422677913063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d9a1b1128b92c5%3A0x69d1bc5fe196fdc0!2sDyer&#39;s%20Diner%20and%20Coffee%20Shop!5e0!3m2!1sen!2suk!4v1652548115757!5m2!1sen!2suk"
        width="1600" height="600" style="border:0; width: 100%; height: 100%" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
  <footer>
    <the-footer/>
  </footer>
</template>
<script>
import TheNavbar from "@/components/globals/TheNavbar";
import TheFooter from "@/components/globals/TheFooter";

export default {
  name: "App",
  components: {
    TheNavbar,
    TheFooter
  },
  mounted() {
    this.$store.commit('setWindowWidth', window.innerWidth)
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize, {passive: true});
      window.addEventListener("scroll", this.onScroll, {passive: true});
    });
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("scroll", this.onScroll);
  },
  data() {
    return {
      navbarHidden: false,
      closed: true,
      scrolled: false,
      lastKnownScrollPosition: 0,
    };
  },
  computed: {
    showOverlay() {
      return this.$store.state.state === 'LOADING';
    }
  },
  methods: {
    onResize() {
      this.$store.commit('setWindowWidth', window.innerWidth)
    },
    onScroll() {
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.$store.commit('setScrollPosition', window.scrollY);
          this.ticking = false;
        });

        this.ticking = true;
      }
    },
  },
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.logo-app {
  display: block;
  position: absolute;
  width: 12em;
  z-index: 0;
  top: 0;
  left: 0;
  transform: translate(50%, 50%);

  @include lg {
    display: none;
  }
}

.container__map {
  height: $half-screen-height / 2;
  border-top: 1px solid $primary;
}
</style>