<template>
  <header class="container">
    <div class="row">
      <div class="col">
        <router-link to="/"><logo></logo></router-link>
        <navigation></navigation>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '@/components/Logo'
import Navigation from '@/components/Navigation'
export default {
  components: {
    Navigation,
    Logo
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables.scss";
  .col {
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
    .col {
      .logo {
        margin: 17px 40px;
      }
    }
  }
</style>
