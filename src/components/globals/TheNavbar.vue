<template>
  <div class="container__navbar">
    <div class="contact-strip">
      <div class="contact-details__top">
        <div class="phone">
          <a href="tel:07872184132"><i class="fa fa-phone" aria-hidden="true"></i>07872 184 132</a>
        </div>
        <div class="email">
          <a href="mailto:email@dyersdiner.co.uk"><i class="fa fa-envelope" aria-hidden="true"></i>email@dyersdiner.co.uk</a>
        </div>
      </div>
      <div class="social-links__top">
        <i class="fab fa-facebook"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-twitter"></i>
      </div>
    </div>
    <div class="navbar" :class="{'fixed' : innerWindowScrolled}">
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
          'full-screen-navbar': windowWidthInternal < 1064,
          'navbar-visible': navbarHidden === false,
        }"
      >
        <div v-if="closed === false && windowWidthInternal < 1064" class="close-button" @click="changeNavbarState(true)">
          <i class="fas fa-times close"></i>
        </div>
        <router-link to="/" @click="changeNavbarState(true)">Home</router-link>
        <router-link to="/menu" @click="changeNavbarState(true)">Menu</router-link>
        <router-link to="/about" @click="changeNavbarState(true)">About</router-link>
        <router-link to="/contact" @click="changeNavbarState(true)">Contact</router-link>
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
@media screen and (min-width: 1064px) {
  .container__navbar {
    .contact-strip {
      justify-content: space-between;
      align-items: center;

      .contact-details__top {
        padding-left: 0.5em;

      }

      .social-links__top {
        padding-right: 0.5em;
      }
    }

    .navbar {
      justify-content: space-between !important;
      height: 10em;

      &-visible {
      }

      .logo {
        img {
          height: 100%;
        }
      }

      nav {
        position: relative;
        text-align: center;
        padding: 30px;
        align-items: flex-start !important;

        &:after {
          content: '';
          position: absolute;
          width: 90%;
          border-bottom: $secondary-inverted 1px solid;
          transform: translateY(30px);
        }

        a {
          font-size: 1.2rem !important;
        }
      }
    }

  }
}

.container__navbar {
  position: fixed;
  width: 100%;

  .contact-strip {
    background-color: $primary;
    display: flex;
    flex-wrap: nowrap;
    gap: 2em;

    .contact-details__top {
      display: flex;
      flex-direction: row;
      gap: 1em;

      & * {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5em;
        font-size: 1rem;
        color: $white-calmer;
      }
    }

    .social-links__top {
      display: flex;
      flex-direction: row;
      gap: 1em;

      & * {
        font-size: 1.2rem;
        color: $white-calmer;
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

    .logo {
      position: relative;
      height: 90%;
      width: 12em;

      img {
        transition: all 0.4s ease-in-out;
        margin-left: 10px;
      }
    }

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
      background-color: $primary;
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
      gap: 3em;
      height: 100%;
      transition: all .4s ease-in-out;

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
  }
}
</style>