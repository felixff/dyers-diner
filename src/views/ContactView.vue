<template>
<div class="container__menu">
  <main-logo/>
</div>
</template>

<script>
import MainLogo from '@/components/elements/MainLogo'

export default {
  name: "ContactView",
  components: {
    MainLogo
  }

}
</script>

<style lang="scss" scoped>
.container__menu {
  height: 100vh;
}
</style>