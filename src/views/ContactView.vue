<template>
<div class="container__contact">
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
.container__contact {
  height: 100vh;
}
</style>