<template>
  <div class="container__ordering">
    <checkout v-if="checkoutEnabled"/>
    <div class="hero__ordering">
      <main-logo/>
      <h1 class="menu-title__ordering">Our Menu</h1>
    </div>
    <div class="content__ordering">
      <div class="container__ordering-menu">
        <div class="menu">
          <menu-component/>
        </div>
      </div>
      <div class="container__spacer" :class="{'transformed' : !cartVisible && screenWidth < 768}">
        <cart-component></cart-component>
      </div>
    </div>
    <div v-if="scrollPosition > 600 && screenHeight > 400 && screenWidth > 1024" class="back-to-top"
         @click="goToTopOfPage()">
      <i class="fas fa-caret-up arrow"></i>
    </div>
  </div>
</template>

<script>
import MenuComponent from '@/components/elements/MenuComponent'
import MainLogo from '@/components/elements/MainLogo'
import CartComponent from "@/components/elements/CartComponent";
import Checkout from "@/components/elements/CheckoutComponent";

export default {
  name: "OrderingView",
  components: {
    Checkout,
    CartComponent,
    MenuComponent,
    MainLogo
  },
  data() {
    return {}
  },
  mounted() {
    const mainNavbar = document.querySelector('.container__navbar');
    const burgerMenu = document.querySelector('.burger-menu');
    mainNavbar.style.position = 'relative';
    if (burgerMenu) {
      burgerMenu.style.transform = 'translate(-25%, 10%)';
    }

    this.$store.commit('setNavbarFixed', true);
  },
  unmounted() {
    const mainNavbar = document.querySelector('.container__navbar');
    const burgerMenu = document.querySelector('.burger-menu');
    mainNavbar.style.position = 'fixed';
    if (burgerMenu) {
      burgerMenu.style.transform = 'translate(-50%, 10%)';
    }

    this.$store.commit('setNavbarFixed', false);
  },
  computed: {
    showShoppingCart() {
      return this.$store.state.windowInternalWidth < 1024;
    },
    scrollPosition() {
      return this.$store.state.scrollPosition;
    },
    screenHeight() {
      return this.$store.state.windowInternalHeight;
    },
    screenWidth() {
      return this.$store.state.windowInternalWidth;
    },
    checkoutEnabled() {
      return this.$store.state.checkoutEnabled;
    },
    cartVisible() {
      return this.$store.state.cartEnabled;
    }
  },
  methods: {
    goToTopOfPage() {
      window.scrollTo({top: 0, behavior: 'instant'});
    }
  }
}
</script>

<style lang="scss" scoped>
.container__ordering {
  height: 100%;
  display: block;
  background-color: $off-white;

  .hero__ordering {
    height: 50vh;
    min-height: 30em;
    background-image: url("@/assets/img/hero.webp");
    background-color: hsla(0, 0%, 0%, 0.7);
    background-blend-mode: multiply;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 0;

    @include phoneLandscape {
      height: 2vh;
      min-height: 10em;
      justify-content: flex-start;
    }

    .menu-title__ordering {
      color: $white-brighter;
      transform: translateY(-50%);
    }
  }

  .content__ordering {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 1em;
    margin-top: -5em;
    padding-bottom: 20px;

    .container__ordering-menu {
      width: 60%;
      padding-left: 20px;
      flex-grow: 1;
    }

    .container__spacer {
      width: 88%;
      position: fixed;
      right: 0;
      top: 2em;
      transition: all 0.5s ease-out;
      display: flex;

      &.transformed {
        transform: translateX(100%);
      }

      @include phoneLandscape {
      }

      @include md {
        position: relative;
        width: 50%;
      }

      @include lg {
        width: 30%;
      }
    }
  }

  h1 {
    padding-top: 120px;
    font-size: 4rem;
    font-family: PlayFairRegular, serif;
    color: $black;
    font-weight: bold;
  }

  .menu {
    margin-top: 3em;
    display: flex;
    margin-inline: auto;
    justify-content: center;
    align-items: center;
  }

  .back-to-top {
    position: fixed;
    bottom: 2em;
    right: 2em;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: $primary;
    display: none;
    cursor: pointer;

    @include md {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .arrow {
      font-size: 2rem;
      color: $white-brighter;
    }
  }
}
</style>