<template>
  <div class="container__menu-item">
    <div class="img__menu-item" :style="`background-image:url(${itemImage})`">
    </div>
    <div class="text__menu-item">
      {{ itemText }}
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    itemImageTitle: {
      type: String,
      required: true,
    },
    itemImage: {
      type: String,
      required: true,
    },
    itemText: {
      type: String,
      required: true,
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.container__menu-item {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 18em;
  border: $primary-lighter 1px solid;
  border-radius: 4px;
  overflow: hidden;

  @include sm {
    width: 48%;
  }

  @include lg {
    min-width: 23%;
    width: 13em;
    height: 12em;
  }

  .img__menu-item {
    height: 90%;
    background-size: cover;
    background-repeat: no-repeat;
    padding-inline: 5px;
  }

  .text__menu-item {
    color: $primary-lighter;
    font-family: PlayFairRegular, serif;
    font-weight: bolder;
    font-size: 1.5rem;
    padding: 5px;
  }

}
</style>