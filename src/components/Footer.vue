<template>
  <footer class="container">
    <div class="row">
      <div class="col">
        <div class="follow-us">{{followUs}}</div>
        <socials></socials>
      </div>
    </div>
  </footer>
</template>

<script>
import Socials from '@/components/Socials'
export default {
  components: {
    Socials
  },
  data () {
    return {
      followUs: 'Seguici sui social'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables.scss";
  .container {
    padding: 30px 0;
    background-color: $secondary-color;
    text-align: center;
    color: $primary-color;
    .follow-us {
      text-transform: uppercase;
      font-size: 200%;
      font-weight: bold;
      margin-bottom: 20px;
    }
  }
  @media only screen and (min-width: 768px) {
    .container {
      .follow-us {
        font-size: 300%;
      }
    }
  }
</style>
