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
      <img src="@/assets/logo.png" alt="Dyer's Diner Logo" class="logo">
    </div>
    <nav
        :class="{
          'navbar-not-visible': hideAway && alwaysVisible === false,
          'full-screen-navbar': windowWidthInternal < 1000,
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

    <div class="ordering-and-socials">
      <div class="socials">
        <a id="facebook-top-link" href="" target="_blank">
          <i class="fab fa-facebook"></i>
        </a>
        <a id="instagram-top-link" href="" target="_blank">
          <i class="fab fa-instagram"></i>
        </a>
        <a id="snapchat-top-link" href="" target="_blank">
          <i class="fab fa-snapchat"></i>
        </a>
      </div>
      <router-link to="/ordering">Order Now</router-link>
    </div>
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
      return this.windowWidthInternal >= 1000;
    },
    hideAway() {
      return this.windowWidthInternal < 1000 && this.closed === true;
    },
    navbarHidden() {
      return this.windowWidthInternal < 1000
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
    background: hsla(347, 49%, 18%, 1);
    background: linear-gradient(to right, hsla(347, 49%, 18%, 1) 31%, hsla(28, 98%, 48%, 1) 100%) !important;
    background: -moz-linear-gradient(to right, hsla(347, 49%, 18%, 1) 31%, hsla(28, 98%, 48%, 1) 100%) !important;
    background: -webkit-linear-gradient(to right, hsla(347, 49%, 18%, 1) 31%, hsla(28, 98%, 48%, 1) 100%) !important;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#461822", endColorstr="#F27302", GradientType=1);

    .logo {
      transform: translateX(0) !important;
    }

    .ordering-and-socials{
      transform: translateX(0) !important;
    }
  }
}

.navbar {
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: hsla(347, 49%, 18%, 1);
  background: linear-gradient(to bottom, hsla(347, 49%, 18%, 1) 31%, hsla(28, 98%, 48%, 1) 100%);
  background: -moz-linear-gradient(to bottom, hsla(347, 49%, 18%, 1) 31%, hsla(28, 98%, 48%, 1) 100%);
  background: -webkit-linear-gradient(to bottom, hsla(347, 49%, 18%, 1) 31%, hsla(28, 98%, 48%, 1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#461822", endColorstr="#F27302", GradientType=1);
  z-index: 10;

  .burger-menu {
    color: $tertiary-calmer;
    font-size: 2rem;
    z-index: 11;
    position: fixed;
    left: 0;
    top: 0;
    transform: translate(50%, 10%);

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
    transform: translateX(0) !important;
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
      color: $tertiary-calmer;
    }
  }

  nav {
    display: flex;
    margin-left: 5em;
    justify-content: center;
    align-items: center;
    gap: 1.5em;
    transition: transform 0.2s ease-in;

    a {
      color: $tertiary-calmer;
      font-family: AndresDiner, Montserrat, sans-serif;
      font-size: 1.5rem;
      font-weight: bolder;

      &:hover {
        color: $tertiary;
      }

      &.router-link-exact-active {
        color: $tertiary;
      }
    }
  }

  .logo {
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    transform: translateX(15%);

    img {
      max-height: 80%;
    }
  }

  .ordering-and-socials {
    color: $tertiary-calmer;
    font-family: AndresDiner, sans-serif;
    display: flex;
    gap: 0.5em;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    transform: translateX(15%);

    .socials {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.8em;
      font-size: 1.5rem;

      svg {
        &:hover {
          color: $tertiary !important;
          cursor: pointer;
        }
      }
    }

    a {
      font-size: 1.6rem;
      color: $tertiary-calmer;
      font-weight: bolder;

      &:hover {
        cursor: pointer;
        color: $tertiary;
      }
    }
  }
}
</style>