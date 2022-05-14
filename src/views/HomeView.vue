<template>
  <div class="container__home">
    <div class="hero">
      <h1 class="main-message">
        Welcome to Dyer's Diner and Coffee Shack
      </h1>
      <h3 class="main-text">
        &nbsp;Family run diner and coffee shack, in the heart of Ipswich
      </h3>
<!--      <div class="main-call-to-action">-->
<!--        <router-link to="/ordering">Order Now</router-link>-->
<!--      </div>-->
    </div>

    <div class="container__order">
      <div class="section__order-img background__images background__images-order">
        <h2>Order Now</h2>
      </div>
      <div class="section__order">
      </div>
    </div>

    <div class="container__menu">
      <div class="section__menu"></div>
      <div class="section__menu-img background__images background__images-breakfast">
        <h2>Breakfast Menu</h2>
      </div>
    </div>

    <div class="container__menu">
      <div class="section__menu-img background__images background__images-lunch">
        <h2>Lunch Menu</h2>
      </div>
      <div class="section__menu"></div>
    </div>

    <div class="container__menu">
      <div class="section__menu"></div>
      <div class="section__menu-img background__images background__images-cakes">
        <h2>Cake Selection</h2>
      </div>
    </div>

    <div class="container__menu">
      <div class="section__menu-img background__images background__images-drinks">
        <h2>Drinks Selection</h2>
      </div>
      <div class="section__menu"></div>
    </div>
    <div class="container__about-us">

    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeView',
  components: {}
}
</script>
<style lang="scss" scoped>
@media screen and (min-width: 1064px) {
  .container__home {
    .hero {

    }

    .container__order {
      width: 100%;
      display: flex;
      flex-direction: row;

      .section__order {
        width: $half-screen-width;
        height: $half-screen-height;

        &-img {
          width: $half-screen-width;
          height: $half-screen-height;
        }
      }
    }

    .container__menu {
      width: 100%;
      display: flex;
      flex-direction: row;

      .section__menu {
        width: $half-screen-width;
        height: $half-screen-height;

        &-img {
          width: $half-screen-width;
          height: $half-screen-height;
        }
      }
    }
  }
}

.container__home {
  .hero {
    height: 100vh;
    background-image: url("@/assets/img/hero-medium.jpg");
    background-color: hsla(0,0%,0%, 0.7);
    background-blend-mode: multiply;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 40px;

    .main-message{
      font-family: AndresDiner, serif;
      font-weight: 300;
      font-size: 2.5rem;
      color: $white-calmer;
    }

    .main-text {
      font-family: Montserrat, sans-serif;
      color: $white-calmer;
    }

    .main-call-to-action {
      font-family: Raleway, serif;
      color: $white-calmer;
    }
  }

  .container__order {
    width: 100%;
    display: flex;
    flex-direction: row;

    .section__order {
      width: $full-screen-width;
      height: $half-screen-height;

      &-img {
        width: $full-screen-width;
        height: $half-screen-height;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 1.5rem;
        color: $white-calmer;

        h2 {
          font-family: AndresDiner, serif;
        }
      }
    }
  }

  .container__menu {
    width: 100%;
    display: flex;
    flex-direction: row;

    .section__menu {
      width: $full-screen-width;
      height: $half-screen-height;

      &-img {
        width: $full-screen-width;
        height: $half-screen-height;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 1.5rem;
        color: $white-calmer;

        h2 {
          font-family: AndresDiner, serif;
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