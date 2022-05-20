<template>
  <div class="container__logo">
    <img src="@/assets/logo.webp" alt="Dyer's Diner Logo">
  </div>
</template>

<script>
export default {
  name: "MainLogo"
}
</script>

<style lang="scss" scoped>
.container__logo {
  display: block;
  width: 12em;
  z-index: 0;
  text-align: center;
  margin-inline: auto;
  margin-block: 5em 1em;

  @include underXss {
    margin-block: 8em 1em;
  }

  @include md {
    width: 20em;
  }

  @include lg {
    display: none;
  }
}

</style>