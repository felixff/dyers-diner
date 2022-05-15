<template>
  <div class="container__home">
    <div class="hero">
      <div class="hero__text">
        <h1 class="main-message">
          Welcome to Dyer's Diner and Coffee Shack
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
        We are pleased to announce that we can now deliver your favourite meals straight to your door
      </div>
    </div>

    <div class="container__menu">
      <div class="section__menu">
        <menu-item
            item-text="Test test"
            :item-image="require('@/assets/img/breakfast.jpg')"
            item-image-title="Test test"/>
        <menu-item
            item-text="Test test"
            :item-image="require('@/assets/img/breakfast.jpg')"
            item-image-title="Test test"/>
        <menu-item
            item-text="Test test"
            :item-image="require('@/assets/img/breakfast.jpg')"
            item-image-title="Test test"/>
        <menu-item
            item-text="Test test"
            :item-image="require('@/assets/img/breakfast.jpg')"
            item-image-title="Test test"/>
        <menu-item
            item-text="Test test"
            :item-image="require('@/assets/img/breakfast.jpg')"
            item-image-title="Test test"/>
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
        <menu-item
            item-text="Test test"
            :item-image="require('@/assets/img/breakfast.jpg')"
            item-image-title="Test test"/>
        <menu-item
            item-text="Test test"
            :item-image="require('@/assets/img/breakfast.jpg')"
            item-image-title="Test test"/>
        <menu-item
            item-text="Test test"
            :item-image="require('@/assets/img/breakfast.jpg')"
            item-image-title="Test test"/>
        <menu-item
            item-text="Test test"
            :item-image="require('@/assets/img/breakfast.jpg')"
            item-image-title="Test test"/>
        <menu-item
            item-text="Test test"
            :item-image="require('@/assets/img/breakfast.jpg')"
            item-image-title="Test test"/>
      </div>
    </div>

    <div class="container__menu">
      <div class="section__menu">
        <menu-item
            item-text="Test test"
            :item-image="require('@/assets/img/breakfast.jpg')"
            item-image-title="Test test"/>
        <menu-item
            item-text="Test test"
            :item-image="require('@/assets/img/breakfast.jpg')"
            item-image-title="Test test"/>
        <menu-item
            item-text="Test test"
            :item-image="require('@/assets/img/breakfast.jpg')"
            item-image-title="Test test"/>
        <menu-item
            item-text="Test test"
            :item-image="require('@/assets/img/breakfast.jpg')"
            item-image-title="Test test"/>
        <menu-item
            item-text="Test test"
            :item-image="require('@/assets/img/breakfast.jpg')"
            item-image-title="Test test"/>
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
        <menu-item
            item-text="Test test"
            :item-image="require('@/assets/img/breakfast.jpg')"
            item-image-title="Test test"/>
        <menu-item
            item-text="Test test"
            :item-image="require('@/assets/img/breakfast.jpg')"
            item-image-title="Test test"/>
        <menu-item
            item-text="Test test"
            :item-image="require('@/assets/img/breakfast.jpg')"
            item-image-title="Test test"/>
        <menu-item
            item-text="Test test"
            :item-image="require('@/assets/img/breakfast.jpg')"
            item-image-title="Test test"/>
        <menu-item
            item-text="Test test"
            :item-image="require('@/assets/img/breakfast.jpg')"
            item-image-title="Test test"/>
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
    background-color: hsla(0,0%,0%, 0.7);
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

      .main-message{
        font-family: PlayFairMedium, serif;
        font-weight: bold;
        font-size: 2.5rem;
        color: $white-calmer;

        @include lg {
          font-size: 4rem;
        }
      }

      .main-text {
        font-family: PlayFairRegular, sans-serif;
        color: $white-calmer;

        @include lg {
          font-size: 1.5rem;
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
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
    }

    .section__order {
      width: 100%;
      height: $half-screen-height;
      font-family: PlayFairRegular, serif;
      font-size: 2rem;
      color: $black;
      text-align: left;
      padding: 1em;

      @include lg {
        width: $half-screen-width;
        height: $half-screen-height;
      }

      &-img {
        width: 100%;
        height: $half-screen-height;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 1.5rem;
        color: $white-calmer;

        @include lg {
          width: $half-screen-width;
          height: $half-screen-height;
          font-size: 2.8rem;
        }

        h2 {
          font-family: PlayFairRegular, serif;
        }
      }
    }
  }

  .container__menu {
    width: 100%;
    display: flex;
    flex-direction: column;

    &:nth-child(odd) {
      flex-direction: column-reverse!important;

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
        height: $half-screen-height;
      }

      &-img {
        width: 100%;
        height: $half-screen-height;
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
          font-size: 2.8rem;

        }

        h2 {
          font-family: PlayFairRegular, serif;
        }
      }
    }
  }

  .container__about-us {
    width: 100%;
    height: $half-screen-height;
    background-color: $primary;
  }
}
</style>