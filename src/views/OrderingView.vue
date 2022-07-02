<template>
  <div class="container__ordering">
<!--    <div v-if="showShoppingCart" class="cart">-->
<!--      <i class="fa-solid fa-cart-shopping"></i>-->
<!--    </div>-->
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
      <div class="container__spacer">
        <div class="container__checkout-control overflow-hidden">
          <button class="cart__checkout text-white font-bold py-2 px-4 rounded-full">
            Checkout
          </button>
          <div class="cart__total">Total: {{ cartTotal }}</div>

        </div>
      </div>
    </div>
    <div v-if="scrollPosition > 600" class="back-to-top" @click="goToTopOfPage()">
      <i class="fas fa-caret-up arrow"></i>
    </div>
  </div>
</template>

<script>
import MenuComponent from '@/components/elements/MenuComponent'
import MainLogo from '@/components/elements/MainLogo'

export default {
  name: "OrderingView",
  components: {
    MenuComponent,
    MainLogo
  },
  data() {
   return {

   }
  },
  mounted() {
    const mainNavbar = document.querySelector('.container__navbar');
    const burgerMenu = document.querySelector('.burger-menu');
    mainNavbar.style.position = 'relative';
    if (burgerMenu) {
      burgerMenu.style.color = '#65011AFF';
      burgerMenu.style.transform = 'translate(-25%, 10%)';
    }

    this.$store.commit('setNavbarFixed', true);
  },
  unmounted() {
    const mainNavbar = document.querySelector('.container__navbar');
    const burgerMenu = document.querySelector('.burger-menu');
    mainNavbar.style.position = 'fixed';
    if (burgerMenu) {
      burgerMenu.style.color = '#f5f5f5';
      burgerMenu.style.transform = 'translate(-50%, 10%)';
    }

    this.$store.commit('setNavbarFixed', false);
  },
  computed: {
    showShoppingCart() {
      return this.$store.state.windowWidthInternal < 1024;
    },
    cartTotal() {
      return '£100';
    },
    scrollPosition() {
      return this.$store.state.scrollPosition;
    }
  },
  methods: {
    goToTopOfPage() {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }
}
</script>

<style lang="scss" scoped>
.container__ordering {
  height: 100%;
  background-color: $off-white;
  display: block;

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

    .menu-title__ordering {
      color: $white;
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

    .container__ordering-menu{
      flex-grow: 1;
    }

    .container__spacer {
      width: 30%;
      display: none;

      @include md {
        display: flex;
      }

      @include lg {
      }

      .container__checkout-control {
        width: 70%;
        position: sticky;
        top: 0;
        align-self: flex-start;
        justify-content: flex-start;
        margin-top: 3em;
        margin-right: 2em;
        padding: 20px;
        background-color: $secondary;
        box-shadow: 0 1px 1px rgb(0 0 0 / 30%);
        -moz-box-shadow: 0 1px 1px rgb(0 0 0 / 30%);
        -webkit-box-shadow: 0 1px 1px rgb(0 0 0 / 30%);
        -o-box-shadow: 0 1px 1px rgb(0 0 0 / 30%);
        border-radius:12px;


        .cart__checkout {
          background-color: $primary;
        }
      }
    }
  }

  .cart {
    color: $primary;
    font-size: 2rem;
    z-index: 11;
    position: fixed;
    right: 0;
    top: 0;
    transform: translate(-10%, 130%);

    &:hover {
      cursor: pointer;
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
  }

  .back-to-top {
    position: fixed;
    bottom: 5em;
    right: 5em;
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