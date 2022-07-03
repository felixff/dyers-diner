<template>
  <div class="container__home">
    <div class="hero">
      <main-logo/>
      <div class="hero__text">
        <h1 class="main-message">
          Welcome to Dyer's Diner and Coffee Shop
        </h1>
        <h3 class="main-text">
          We don't serve fast food! We serve good food as fast as we can!
        </h3>
        <!--      <div class="main-call-to-action">-->
        <!--        <router-link to="/ordering">Order Now</router-link>-->
        <!--      </div>-->
      </div>
    </div>

    <div class="container__menu order-border">
      <div class="section__menu-img background__images background__images-order cursor-pointer" @click="goToMenu()">
        <h2>Order Now</h2>
      </div>
      <div class="section__menu order-text">
        <div class="content__order"
             data-aos="fade-up"
             data-aos-anchor-placement="bottom-bottom"
             data-aos-duration="1000"
             data-aos-once="true">
          Delivery 7am till 4pm all areas of Ipswich with min order of £10
        </div>
      </div>
    </div>

    <div class="container__menu">
      <div class="section__menu">
        <div class="container__menu-items">
          <menu-item
              data-aos="zoom-in"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="1000"
              data-aos-once="true"
              item-text="Breakfast"
              :item-image="require('@/assets/img/menu/hot-food1.webp')"
              item-image-title="Breakfast"/>
          <menu-item
              data-aos="zoom-in"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="1000"
              data-aos-once="true"
              item-text="Cheeseburgers & Bacon"
              :item-image="require('@/assets/img/menu/hot-food2.webp')"
              item-image-title="Cheeseburgers & Bacon"/>
          <menu-item
              data-aos="zoom-in"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="1000"
              data-aos-once="true"
              item-text="Wraps"
              :item-image="require('@/assets/img/menu/hot-food3.webp')"
              item-image-title="Wraps"/>
          <menu-item
              data-aos="zoom-in"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="1000"
              data-aos-once="true"
              item-text="Cheeseburgers"
              :item-image="require('@/assets/img/menu/hot-food4.webp')"
              item-image-title="Cheeseburgers"/>
          <menu-item
              data-aos="zoom-in"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="1000"
              data-aos-once="true"
              item-text="Breakfast Rolls"
              :item-image="require('@/assets/img/menu/hot-food5.webp')"
              item-image-title="Breakfast Rolls"/>
        </div>
      </div>
      <div class="section__menu-img background__images background__images-hot-food cursor-pointer" @click="goToMenu()">
        <h2>Hot Food</h2>
      </div>
    </div>

    <div class="container__menu">
      <div class="section__menu-img background__images background__images-extras cursor-pointer" @click="goToMenu()">
        <h2>Extras</h2>
      </div>
      <div class="section__menu">
        <div class="container__menu-items">
          <menu-item
              data-aos="zoom-in"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="1000"
              item-text="Panini"
              data-aos-once="true"
              :item-image="require('@/assets/img/menu/extras1.webp')"
              item-image-title="Panini"/>
          <menu-item
              data-aos="zoom-in"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="1000"
              item-text="Sausage Rolls"
              data-aos-once="true"
              :item-image="require('@/assets/img/menu/extras2.webp')"
              item-image-title="Sausage Rolls"/>
          <menu-item
              data-aos="zoom-in"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="1000"
              data-aos-once="true"
              item-text="Jacket Potatoes"
              :item-image="require('@/assets/img/menu/extras3.webp')"
              item-image-title="Jacket Potatoes"/>
          <menu-item
              data-aos="zoom-in"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="1000"
              data-aos-once="true"
              item-text="Cheese Scones"
              :item-image="require('@/assets/img/menu/cakes3.webp')"
              item-image-title="Cheese Scones"/>
        </div>
      </div>
    </div>

    <div class="container__menu">
      <div class="section__menu">
        <div class="container__menu-items">
          <menu-item
              data-aos="zoom-in"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="1000"
              data-aos-once="true"
              item-text="Fruity Cakes"
              :item-image="require('@/assets/img/menu/cakes1.webp')"
              item-image-title="Fruity Cakes"/>
          <menu-item
              data-aos="zoom-in"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="1000"
              data-aos-once="true"
              item-text="Brownies"
              :item-image="require('@/assets/img/menu/cakes2.webp')"
              item-image-title="Brownies"/>
          <menu-item
              data-aos="zoom-in"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="1000"
              data-aos-once="true"
              item-text="Chocolate Cakes"
              :item-image="require('@/assets/img/menu/cakes4.webp')"
              item-image-title="Chocolate Cakes"/>
        </div>
      </div>
      <div class="section__menu-img background__images background__images-cakes-and-sweets cursor-pointer" @click="goToMenu()">
        <h2>Cakes & Sweets</h2>
      </div>
    </div>

    <div class="container__menu last">
      <div class="section__menu-img background__images background__images-drinks cursor-pointer" @click="goToMenu()">
        <h2>Drinks</h2>
      </div>
      <div class="section__menu">
        <div class="container__menu-items">
          <menu-item
              data-aos="zoom-in"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="1000"
              data-aos-once="true"
              item-text="Coffee Selection"
              :item-image="require('@/assets/img/menu/drinks1.webp')"
              item-image-title="Coffee Selection"/>
          <menu-item
              data-aos="zoom-in"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="1000"
              data-aos-once="true"
              item-text="Hot Chocolate"
              :item-image="require('@/assets/img/menu/drinks2.webp')"
              item-image-title="Hot Chocolate"/>
          <menu-item
              data-aos="zoom-in"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="1000"
              data-aos-once="true"
              item-text="Frappes"
              :item-image="require('@/assets/img/menu/drinks3.webp')"
              item-image-title="Frappes"/>
          <menu-item
              data-aos="zoom-in"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="1000"
              data-aos-once="true"
              item-text="Thick Milkshakes"
              :item-image="require('@/assets/img/menu/drinks4.webp')"
              item-image-title="Thick Milkshakes"/>
          <menu-item
              data-aos="zoom-in"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="1000"
              data-aos-once="true"
              item-text="Thick Milkshakes"
              :item-image="require('@/assets/img/menu/drinks5.webp')"
              item-image-title="Thick Milkshakes"/>
        </div>
      </div>
    </div>

    <div class="container__section-about-us">
      <div class="image__about-us"
           data-aos="fade-right"
           data-aos-anchor-placement="top-bottom"
           data-aos-duration="1000"
           data-aos-once="true">
        <img src="@/assets/img/about-us.webp" alt="Image with the family running the diner">
      </div>
      <div class="content__about-us"
           :data-aos="fadeStyle"
           :data-aos-anchor-placement="animationAnchorPoint"

           data-aos-duration="1000"
           data-aos-once="true"
      >
        <h1 class="title__about-us">
          About Us
        </h1>
        <div class="description__about-us">
          We have been established in 2016 and have grown as a business year on year. What started out as something to
          do after being made redundant from my last job has turned into my life and I love it. I work so hard day
          after day to offer the best service and to stand above the rest. <br><br>
          We have worked alongside Little mix and we take part in carnivals, car shows and all sorts of other events.
          <br><br>
          The year 2022 has started amazingly and now we also have a cafe in the back of Chantry Library. Our little
          cafe has become very popular within the Chantry community. We welcome people of all walks of the earth, so
          eat some good food and have a good time.
        </div>
      </div>
    </div>

    <div class="container__journey">
      <h1 class="title__journey"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="1000"
          data-aos-once="true">
        Our Journey
      </h1>
      <timeline/>
    </div>
  </div>
</template>
<script>
import MenuItem from '@/components/elements/MenuItem'
import MainLogo from '@/components/elements/MainLogo'

import {defineAsyncComponent, onMounted} from 'vue';
import AOS from 'aos'

const Timeline = defineAsyncComponent(() =>
    import('@/components/elements/TimelineComponent')
)

export default {
  name: 'HomeView',
  setup() {
    onMounted(() => {
      AOS.init();

      let scrollRef = 0;

      window.addEventListener('scroll', () => {
        scrollRef <= 100 ? scrollRef++ : AOS.refresh();
      })
    });
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    MenuItem,
    MainLogo,
    // eslint-disable-next-line vue/no-unused-components
    Timeline,
  },
  data() {
    return {}
  },
  computed: {
    animationAnchorPoint() {
      return this.$store.state.windowInternalWidth > 1024 ? 'bottom-bottom' : 'top-bottom';
    },
    fadeStyle() {
      const fadeOrZoom = this.$store.state.windowInternalWidth < 1024 ? 'zoom' : 'fade';

      return fadeOrZoom === 'fade' ? 'fade-left' : 'zoom-in';
    },
    aosOffset() {
      return this.$store.state.windowInternalHeight > 500 ? 0 : -100;
    }
  },
  methods: {
    goToMenu(section) {
      console.log(section);
      this.$router.push('ordering');
    }
  }
}
</script>
<style lang="scss" scoped>
.container__home {
  .hero {
    height: 100vh;
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

    @include xl {
      background-position: 0 -200px;
    }

    @include underXss {
      height: 100%;
      padding-bottom: 20px;
    }

    .hero__text {
      width: 100%;
      padding: 40px;
      transform: translateY(10%);
      display: flex;
      flex-direction: column;
      gap: 2em;
      justify-content: center;

      @include lg {
        align-items: center;
        transform: translateY(0);
        gap: 0.5em;
      }

      .main-message {
        font-family: PlayFairMedium, serif;
        font-weight: bold;
        font-size: 2.5rem;
        color: $white-brighter;

        @include lg {
          font-size: 3.5rem;
        }
      }

      .main-text {
        font-family: PlayFairRegular, sans-serif;
        color: $white-brighter;

        @include lg {
          font-size: 1.3rem;
          align-self: center;
        }
      }

      .main-call-to-action {
        font-family: Raleway, serif;
        color: $white-brighter;
      }
    }
  }

  .container__order {
    width: 100%;
    min-height: 460px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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
    }
  }

  .container__menu {
    width: 100%;
    display: flex;
    flex-direction: column;

    &.order-border {
      border-top: $primary solid 1px;
    }

    &.last {
      border-bottom: $primary solid 1px;
    }

    &:nth-child(odd) {
      flex-direction: column-reverse !important;

      @include lg {
        flex-direction: row !important;
      }
    }

    @include md {
      min-height: 390px;
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
      background-color: $primary;

      .content__order {
        height: 100%;
        color: $white-brighter;
        padding: 10px;
        font-size: 2rem;

        @include lg {
          font-family: PlayFairRegular, serif;
          font-size: 2rem;
          color: $black;
          text-align: left;
        }
      }

      &.order-text {
        @include md {
          height: 100% !important;
        }
      }

      @include md {
        height: 40px;
      }

      @include lg {
        width: $half-screen-width;
        background-color: $secondary;
        min-height: 460px;
        height: 100%;
      }

      &-img {
        width: 100%;
        min-height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 2rem;
        color: $white-brighter;
        padding: 10px;
        font-weight: bold;

        @include md {
          min-height: 350px;
          font-size: 3.1rem;
        }

        @include lg {
          width: $half-screen-width;
          min-height: 460px;
        }

        h2 {
          font-family: PlayFairRegular, serif;
        }
      }

      .container__menu-items {
        height: 100%;
        display: none;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-self: center;
        align-self: center;
        gap: 1em;

        @include lg {
          display: flex;
          margin-inline: auto;
          justify-content: space-around;
        }
      }
    }
  }

  .container__section-about-us {
    width: 80%;
    background-color: $secondary;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: 3em auto 3em auto;

    @include customWidth(1600) {
      flex-direction: row;
    }

    & > * {
      padding: 20px;
    }

    .image__about-us {

      @include customWidth(1600) {
        max-width: 40%;
      }

      img {
        border-radius: 50%;
      }
    }

    .title__about-us {
      font-family: PlayFairRegular, serif;
      font-size: 1.4rem;
      color: $black;
      position: relative;
      font-weight: bold;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        border-bottom: 2px dotted $primary;
        width: 100%;
      }

      @include md {
        font-size: 2.7rem;
      }
    }

    .content__about-us {
      font-size: 1.2rem;
      color: $black;
      padding: 20px;
      text-align: left;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.8em;

      @include md {
        max-width: 80%;
        margin-inline: auto;
        padding: 10px;
      }

      @include customWidth(1600) {
        max-width: 60%;
      }

      .description__about-us {
        font-family: PlayFairRegular, serif;

        @include lg {
          font-size: 1.2rem;
        }
      }
    }

  }

  .container__journey {
    margin-top: 3em;

    @include lg {
      margin-top: 6em;
    }

    .title__journey {
      font-family: PlayFairMedium, serif;
      font-weight: bold;
      font-size: 2.2rem;
      color: $black;

      @include lg {
        font-size: 3rem;
        margin-bottom: 1em;
      }
    }
  }
}
</style>