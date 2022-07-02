<template>
  <div class="container__navbar">
    <div class="contact-strip">
      <div class="contact-details__top">
        <div class="phone">
          <a href="tel:07872184132"><i class="fa fa-phone" aria-hidden="true"></i>07872 184 132</a>
        </div>
        <div class="email">
          <a href="mailto:mark@dyersdinerandcoffeeshack.co.uk"><i class="fa fa-envelope" aria-hidden="true"></i>mark@dyersdinerandcoffeeshack.co.uk</a>
        </div>
      </div>
      <div class="social-links__top">
        <a id="facebook-bottom-link" href="https://facebook.com/dyersdinerandcoffeeshack/" target="_blank">
          <i class="fab fa-facebook footer__social"></i>
        </a>
        <a id="instagram-bottom-link" href="https://www.instagram.com/dyersdinerandcoffeeshack/?hl=en" target="_blank">
          <i class="fab fa-instagram footer__social"></i>
        </a>
      </div>
    </div>
    <div class="navbar" :class="{'fixed' : innerWindowScrolled || isNavbarFixed}" style="position: relative;top: 0">
      <div
          v-if="alwaysVisible === false"
          class="burger-menu"
          @click="changeNavbarState(false)"
      >
        <i class="fas fa-bars"></i>
      </div>

      <div class="logo">
        <img src="@/assets/logo.webp" alt="Dyer's Diner Logo">
      </div>
      <nav
          :class="{
          'navbar-not-visible': hideAway && alwaysVisible === false,
          'full-screen-navbar': windowWidthInternal < 1024,
          'navbar-visible': navbarHidden === false,
          'raised' : innerWindowScrolled || isNavbarFixed
        }"
      >
        <div v-if="closed === false && windowWidthInternal < 1024" class="close-button" @click="changeNavbarState(true)">
          <i class="fas fa-times close"></i>
        </div>
        <router-link to="/" @click="changeNavbarState(true)">Home</router-link>
        <router-link to="/ordering" @click="changeNavbarState(true)">Menu</router-link>
        <router-link to="/about" @click="changeNavbarState(true)" class="disabled">About</router-link>
        <router-link to="/contact" @click="changeNavbarState(true)" class="disabled">Contact</router-link>
      </nav>
    </div>
  </div>
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
    isNavbarFixed() {
      return this.$store.state.isNavbarFixed ?? false;
    },
    windowWidthInternal() {
      return this.$store.state.windowWidthInternal;
    },
    alwaysVisible() {
      return this.windowWidthInternal >= 1024;
    },
    hideAway() {
      return this.windowWidthInternal < 1024 && this.closed === true;
    },
    navbarHidden() {
      return this.windowWidthInternal < 1024
    },
    innerWindowScrolled() {
      return this.$store.state.scrollPosition > 80;
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
.container__navbar {
  position: fixed;
  width: 100%;
  z-index: 2;

  .contact-strip {
    background-color: $primary-lighter;
    display: flex;
    flex-direction: column;
    gap: 0.2em;
    padding: 5px;

    @include lg {
      justify-content: space-between;
      align-items: center;
      flex-wrap: nowrap;
      gap: 2em;
      flex-direction: row;
      padding-inline: 10px;
      padding: 3px;
    }

    .contact-details__top {
      display: flex;
      flex-direction: column;

      @include lg {
        flex-direction: row;
        gap: 1em;
      }

      & * {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0.5em;
        font-size: 1rem;
        color: $white-brighter;

        @include lg {
          justify-content: center;
          gap: 0.5em;
          font-size: 0.8rem;
          color: $white-brighter;
        }
      }
    }

    .social-links__top {
      display: flex;
      flex-direction: row;
      gap: 1em;

      @include lg {
        padding-right: 0.5em;
      }

      & * {
        font-size: 1.2rem;
        color: $white-brighter;

        @include lg {
          font-size: 1.1rem;
        }
      }
    }
  }

  .navbar {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 10;
    transition: all .4s ease-in-out;
    background-color: hsl(347, 49%, 18%, 0);

    @include lg {
      justify-content: space-between !important;
      height: 10em;
    }

    .logo {
      height: 90%;
      width: 12em;
      display: none;

      @include lg {
        display: block;
      }

      img {
        transition: all 0.4s ease-in-out;
        margin-left: 10px;

        @include lg {
          position: relative;
          height: 100%;
        }
      }
    }

    .burger-menu {
      color: $white-brighter;
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
      background-color: $primary;
      position: fixed;
      top: 0;
      left: 0;
      margin: 0 !important;
    }

    .navbar-visible {
      transform: translateX(0vw);
    }

    .navbar-not-visible {
      transform: translateX(100vw) !important;
      display: none !important;
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
        color: $white-brighter;
      }
    }

    nav {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 3em;
      height: 100%;
      transition: all .4s ease-in-out;

      @include lg {
        position: relative;
        text-align: center;
        padding: 30px;
        align-items: flex-start !important;
      }

      &.raised {
        @include lg {
          padding-top: 25px !important;
        }
      }

      &:after {
        @include lg {
          content: '';
          position: absolute;
          width: 90%;
          border-bottom: $secondary 1px solid;
          transform: translateY(30px);
        }
      }

      a {
        color: $white-brighter;
        font-family: AndresDiner, Montserrat, sans-serif;
        font-size: 1.5rem;

        @include lg {
          font-size: 1.2rem !important;
        }

        &:hover {
          color: $white;
        }

        &.router-link-exact-active {
          color: $white;
        }
      }
    }
  }
}
</style>