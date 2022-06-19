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
      <div class="section__menu-img background__images background__images-order">
        <h2>Order Now</h2>
      </div>
      <div class="section__menu order-text">
        <div class="content__order">
          Delivery 7am till 4pm all areas of Ipswich with min order of £10
        </div>
      </div>
    </div>

    <div class="container__menu">
      <div class="section__menu order-text">
        <div class="content__order">
          If you fancy some all day breakfast or a fulfilling meal, we offer a variety of items from full english
          breakfast to vegetarian beans on toast
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
      <div class="section__menu order-text">
        <div class="content__order">
          In a hurry and would like something bite sized or to go? Why not choose from our selection of panini, baps or
          wraps.
        </div>
      </div>
    </div>

    <div class="container__menu">
      <div class="section__menu order-text">
        <div class="content__order">
          Handmade cakes, baked with love, and treats for every sweet-tooth, we warn you, you will want a second slice.
        </div>
      </div>
      <div class="section__menu-img background__images background__images-cakes-and-sweets">
        <h2>Cakes & Sweets</h2>
      </div>
    </div>

    <div class="container__menu last">
      <div class="section__menu-img background__images background__images-drinks">
        <h2>Drinks</h2>
      </div>
      <div class="section__menu order-text">
        <div class="content__order">
          If you're thirsty, we have have Sparkling Drinks, Juices and Water. Take your pick!
        </div>
      </div>
    </div>

    <div class="container__section-about-us">
      <h1 class="title__about-us">
        About Us
      </h1>
      <div class="content__about-us">
        We have been established in 2016 and have grown as a business year on year. What started out as something to do
        after being made redundant from my last job has turned into my life and I love it. I work so hard day after day
        to offer the best service and to stand above the rest. We have worked alongside Little mix and we take part in
        carnivals, car shows and all sorts of other events. The year 2022 has started amazingly and now we also have a
        cafe in the back of Chantry Library. Our little cafe has become very popular within the Chantry community. We
        welcome people of all walks of the earth, so eat some good food and have a good time.
      </div>
      <timeline/>
    </div>
  </div>
</template>
<script>
import MainLogo from '@/components/elements/MainLogo'

import {defineAsyncComponent} from 'vue';

const Timeline = defineAsyncComponent(() =>
    import('@/components/elements/TimelineComponent')
)

export default {
  name: 'HomeView',
  components: {
    MainLogo,
    Timeline,
  },
  data() {
    return {}
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

    @include md {
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
        background-color: inherit;
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
        font-size: 1.5rem;
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
    width: 100%;
    background-color: $secondary;
    display: flex;
    align-items: center;
    flex-direction: column;

    .title__about-us {
      font-family: PlayFairRegular, serif;
      font-size: 2.3rem;
      color: $white-brighter;
      padding: 20px;
      margin-bottom: 1em;
      margin-top: 1em;

      @include md {
        font-size: 3.3rem;
      }
    }

    .content__about-us {
      font-size: 1.2rem;
      color: $black;
      padding: 20px;
      text-align: left;
      margin-bottom: 2em;

      @include md {
        max-width: 80%;
        margin-inline: auto;
        padding: 10px;
      }

      @include lg {
        max-width: 60%;
      }
    }
  }
}
</style>