<template>
  <the-navbar/>
  <div style="background-color: red; height: 100vh">

  </div>
  <router-view/>
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
</style>