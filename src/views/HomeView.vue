<template>
  <div class="home">
    <div class="hero">
      <div class="logo">
        <img src="@/assets/logo.webp" alt="Dyer's Diner Logo" class="logo">
      </div>

      <div class="images" style="display: flex; flex-direction: row">
        <img src="https://picsum.photos/300/200" alt="Placholder Image">
        <img src="https://picsum.photos/300/210" alt="Placholder Image">
        <img src="https://picsum.photos/300/220" alt="Placholder Image">
        <img src="https://picsum.photos/300/230" alt="Placholder Image">
      </div>
      <div>
        Animate me
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeView',
  components: {

  }
}
</script>
<style lang="scss" scoped>
@media screen and (min-width: 1064px){
  .home {
    .hero {
      .logo {
        img {
          align-self: flex-start;
          height: 100%;
        }
      }
    }
  }
}

.home {
  height: 100vh;

  .hero {
    .logo {
      position: relative;
      height: 20em;
      width: 24em;
      //padding: 10px;
      margin-inline: auto;
    }
  }

}
</style>