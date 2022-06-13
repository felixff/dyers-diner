<template>
  <div class="container__ordering">
    <h1>Menu</h1>
    <div class="menu">
      <menu-component/>
    </div>
  </div>
</template>

<script>
import MenuComponent from '@/components/elements/MenuComponent'

export default {
  name: "OrderingView",
  components: {
    MenuComponent
  }
}
</script>

<style lang="scss" scoped>
.container__ordering {
  height: 100%;
  background-color: $secondary-inverted;

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
}
</style>
<style lang="scss">
.navbar {
  position: fixed !important;

  .navbar-visible > *{
    color: $black !important;
  }
}
</style>