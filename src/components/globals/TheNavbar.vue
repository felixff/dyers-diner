<template>
  <div class="navbar">
    <div
        v-if="alwaysVisible === false"
        class="burger-menu"
        @click="changeNavbarState(false)"
    >
      <i class="fas fa-bars"></i>
    </div>
    <div class="logo">
      <img src="@/assets/logo.webp" alt="Dyer's Diner Logo" class="logo">
    </div>
    <nav
        :class="{
          'navbar-not-visible': hideAway && alwaysVisible === false,
          'full-screen-navbar': windowWidthInternal < 1064,
          'navbar-visible': navbarHidden === false,
        }"
    >
      <div v-if="closed === false && windowWidthInternal < 1064" class="close-button" @click="changeNavbarState(true)">
        <i class="fas fa-times close"></i>
      </div>
      <router-link to="/">Home</router-link>
      <router-link to="/menu">Menu</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
  </div>
  <router-view/>
</template>

<script>
export default {
  name: "TheNavbar",
  data() {
    return {
      closed: true,
    }
  },
  computed: {
    windowWidthInternal() {
      return this.$store.state.windowWidthInternal
    },
    alwaysVisible() {
      return this.windowWidthInternal >= 1064;
    },
    hideAway() {
      return this.windowWidthInternal < 1064 && this.closed === true;
    },
    navbarHidden() {
      return this.windowWidthInternal < 1064
    }
  },
  watch: {
  },
  methods: {
    changeNavbarState(isClosed) {
      this.closed = isClosed;
    },
  }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1064px) {
  .navbar {
    justify-content: space-between !important;
    position: fixed !important;

    .logo {
      align-self: flex-start;
      transform: translateX(0) !important;

      img {
        align-self: flex-start;
        height: 100%;
      }
    }

    .navbar-visible {
      transform: translateX(-20%) !important;
    }

    nav {
      align-self: flex-start;
      position: relative;
      text-align: center;
      padding: 20px;

      &:after {
        content: '';
        position: absolute;
        width: 25em;
        border-bottom: $secondary-inverted 1px solid;
        bottom: 15px;
      }

      a {
        font-size: 1.2rem !important;
      }
    }
  }
}

.navbar {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  z-index: 10;

  .burger-menu {
    color: $white-calmer;
    font-size: 2rem;
    z-index: 11;
    position: fixed;
    right: 0;
    top: 0;
    transform: translate(-50%, 10%);

    &:hover {
      cursor: pointer;
    }
  }

  .full-screen-navbar {
    z-index: 99;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100vw;
    background: linear-gradient(to bottom, hsla(347, 49%, 18%, 1) 31%, hsla(28, 98%, 48%, 1) 100%);
    background: -moz-linear-gradient(to bottom, hsla(347, 49%, 18%, 1) 31%, hsla(28, 98%, 48%, 1) 100%);
    background: -webkit-linear-gradient(to bottom, hsla(347, 49%, 18%, 1) 31%, hsla(28, 98%, 48%, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#461822", endColorstr="#F27302", GradientType=1);
    position: fixed;
    top: 0;
    left: 0;
    margin: 0 !important;
  }

  .navbar-visible {
    transform: translateX(0);
  }

  .navbar-not-visible {
    transform: translateX(-100%) !important;
  }

  .close-button {
    position: absolute;
    z-index: 9999;
    margin: 2em;
    top: 1em;
    right: 1em;

    &:hover {
      cursor: pointer;
    }

    .close {
      font-size: 2rem;
      color: $white-calmer;
    }
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5em;
    transition: transform 0.2s ease-in;

    a {
      color: $white-calmer;
      font-family: AndresDiner, Montserrat, sans-serif;
      font-size: 1.5rem;

      &:hover {
        color: $white;
      }

      &.router-link-exact-active {
        color: $white;
      }
    }
  }

  .logo {
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    height: 10em;
    width: 12em;
    padding: 10px;
  }
}
</style>