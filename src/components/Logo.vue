<template>
  <img class="logo" src="../assets/images/logo.png" alt="Site logo">
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .logo {
    height: 40px;
    margin: 17px 20px;
  }
  @media only screen and (min-width: 768px) {
      .logo {
        margin: 17px 40px;
      }
  }
</style>
