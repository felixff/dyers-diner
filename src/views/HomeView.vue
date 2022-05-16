<template>
  <div class="container__home">
    <div class="hero">
      <div class="hero__text">
        <h1 class="main-message">
          Welcome to Dyer's Diner and Coffee Shop
        </h1>
        <h3 class="main-text">
          Family run diner and coffee shack, in the heart of Ipswich
        </h3>
        <!--      <div class="main-call-to-action">-->
        <!--        <router-link to="/ordering">Order Now</router-link>-->
        <!--      </div>-->
      </div>
    </div>

    <div class="container__order">
      <div class="section__order-img background__images background__images-order">
        <h2>Order Now</h2>
      </div>
      <div class="section__order">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </div>
    </div>

    <div class="container__menu">
      <div class="section__menu">
        <div class="container__menu-items">
          <menu-item
              item-text="Menu Item"
              :item-image="require('@/assets/img/breakfast.png')"
              item-image-title="Menu Item"/>
          <menu-item
              item-text="Menu Item"
              :item-image="require('@/assets/img/breakfast.png')"
              item-image-title="Menu Item"/>
          <menu-item
              item-text="Menu Item"
              :item-image="require('@/assets/img/breakfast.png')"
              item-image-title="Menu Item"/>
          <menu-item
              item-text="Menu Item"
              :item-image="require('@/assets/img/breakfast.png')"
              item-image-title="Menu Item"/>
          <menu-item
              item-text="Menu Item"
              :item-image="require('@/assets/img/breakfast.png')"
              item-image-title="Menu Item"/>
        </div>
      </div>
      <div class="section__menu-img background__images background__images-hot-food">
        <h2>Hot Food</h2>
      </div>
    </div>

    <div class="container__menu">
      <div class="section__menu-img background__images background__images-extras">
        <h2>Extras</h2>
      </div>
      <div class="section__menu">
        <div class="container__menu-items">
          <menu-item
              item-text="Menu Item"
              :item-image="require('@/assets/img/panini.png')"
              item-image-title="Menu Item"/>
          <menu-item
              item-text="Menu Item"
              :item-image="require('@/assets/img/panini.png')"
              item-image-title="Menu Item"/>
          <menu-item
              item-text="Menu Item"
              :item-image="require('@/assets/img/panini.png')"
              item-image-title="Menu Item"/>
          <menu-item
              item-text="Menu Item"
              :item-image="require('@/assets/img/panini.png')"
              item-image-title="Menu Item"/>
          <menu-item
              item-text="Menu Item"
              :item-image="require('@/assets/img/panini.png')"
              item-image-title="Menu Item"/>
        </div>
      </div>
    </div>

    <div class="container__menu">
      <div class="section__menu">
        <div class="container__menu-items">
          <menu-item
              item-text="Menu Item"
              :item-image="require('@/assets/img/cakes.png')"
              item-image-title="Menu Item"/>
          <menu-item
              item-text="Menu Item"
              :item-image="require('@/assets/img/cakes.png')"
              item-image-title="Menu Item"/>
          <menu-item
              item-text="Menu Item"
              :item-image="require('@/assets/img/cakes.png')"
              item-image-title="Menu Item"/>
          <menu-item
              item-text="Menu Item"
              :item-image="require('@/assets/img/cakes.png')"
              item-image-title="Menu Item"/>
          <menu-item
              item-text="Menu Item"
              :item-image="require('@/assets/img/cakes.png')"
              item-image-title="Menu Item"/>
        </div>
      </div>
      <div class="section__menu-img background__images background__images-cakes-and-sweets">
        <h2>Cakes & Sweets</h2>
      </div>
    </div>

    <div class="container__menu">
      <div class="section__menu-img background__images background__images-drinks">
        <h2>Drinks</h2>
      </div>
      <div class="section__menu">
        <div class="container__menu-items">
          <menu-item
              item-text="Menu Item"
              :item-image="require('@/assets/img/drink.png')"
              item-image-title="Menu Item"/>
          <menu-item
              item-text="Menu Item"
              :item-image="require('@/assets/img/drink.png')"
              item-image-title="Menu Item"/>
          <menu-item
              item-text="Menu Item"
              :item-image="require('@/assets/img/drink.png')"
              item-image-title="Menu Item"/>
          <menu-item
              item-text="Menu Item"
              :item-image="require('@/assets/img/drink.png')"
              item-image-title="Menu Item"/>
          <menu-item
              item-text="Menu Item"
              :item-image="require('@/assets/img/drink.png')"
              item-image-title="Menu Item"/>
        </div>
      </div>
    </div>
    <div class="container__about-us">
      <h2>Timeline</h2>
    </div>
  </div>
</template>
<script>
import MenuItem from '@/components/elements/MenuItem'

export default {
  name: 'HomeView',
  components: {
    MenuItem
  }
}
</script>
<style lang="scss" scoped>
.container__home {
  .hero {
    height: 100vh;
    background-image: url("@/assets/img/hero-medium.jpg");
    background-color: hsla(0, 0%, 0%, 0.7);
    background-blend-mode: multiply;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;


    .hero__text {
      width: 100%;
      padding: 40px;
      transform: translateY(10%);
      display: flex;
      flex-direction: column;
      gap: 2em;
      align-items: flex-start;
      justify-content: center;

      @include lg {
        transform: translateY(0);
        gap: 0.5em;
      }

      .main-message {
        font-family: PlayFairMedium, serif;
        font-weight: bold;
        font-size: 2.5rem;
        color: $white-calmer;

        @include lg {
          font-size: 3.5rem;
        }
      }

      .main-text {
        font-family: PlayFairRegular, sans-serif;
        color: $white-calmer;

        @include lg {
          font-size: 1.2rem;
        }
      }

      .main-call-to-action {
        font-family: Raleway, serif;
        color: $white-calmer;
      }
    }
  }

  .container__order {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    @include lg {
      width: 100%;
      min-height: 460px;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
    }

    .section__order {
      width: 100%;
      height: 100%;
      font-family: PlayFairRegular, serif;
      font-size: 2rem;
      color: $black;
      text-align: left;
      padding: 1em;
      display: flex;

      @include lg {
        width: $half-screen-width;
        text-align: left;
        align-items: center;
      }

      &-img {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 1.5rem;
        color: $white-calmer;

        @include lg {
          width: $half-screen-width;
          font-size: 2rem;
          height: 100%;
        }

        h2 {
          font-family: PlayFairRegular, serif;
        }
      }
    }
  }

  .container__menu {
    width: 100%;
    min-height: 460px;
    display: flex;
    flex-direction: column;

    &:nth-child(odd) {
      flex-direction: column-reverse !important;

      @include lg {
        flex-direction: row !important;
      }
    }

    @include lg {
      width: 100%;
      display: flex;
      flex-direction: row !important;
    }

    .section__menu {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      gap: 1em;
      padding: 1em;

      @include lg {
        width: $half-screen-width;
        min-height: 460px;
      }

      &-img {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 1.5rem;
        color: $white-calmer;
        padding: 10px;

        @include lg {
          width: $half-screen-width;
          height: $half-screen-height;
          font-size: 2.2rem;
          min-height: 460px;
        }

        h2 {
          font-family: PlayFairRegular, serif;
        }
      }

      .container__menu-items {
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 1em;
      }
    }
  }

  .container__about-us {
    width: 100%;
    height: $half-screen-height;
    background-color: $primary;

    h2 {
      font-size: 2.3rem;
      color: $white-calmer;
      font-family: PlayFairMedium, serif;
      padding: 20px;
    }
  }
}
</style>