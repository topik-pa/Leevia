<template>
  <header class="container">
    <div class="row">
      <div class="col wrapper">
        <router-link to="/"><img class="logo" src="../assets/images/logo.png"></router-link>
        <navigation></navigation>
      </div>
    </div>
  </header>
</template>

<script>
import Navigation from '@/components/Navigation'
export default {
  components: {
    Navigation
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables.scss";
  .wrapper {
    background-color: $primary-color;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .logo {
      height: 40px;
      margin: 17px 20px;
    }
  }
  @media only screen and (min-width: 768px) {
    .wrapper {
      .logo {
        margin: 17px 40px;
      }
    }
  }
</style>
