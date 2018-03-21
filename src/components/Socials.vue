<template>
  <section class="socials">
    <a href="#" v-for="(social, index) in socials" v-bind:key="index">
      <i :class="'fa fa-' + social.name"></i>
    </a>
  </section>
</template>

<script>
export default {
  data () {
    return {
      socials: [
        {name: 'facebook-official'},
        {name: 'twitter'},
        {name: 'instagram'},
        {name: 'youtube'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables.scss";
  .socials {
    margin: 10px 0;
    i {
      color: $primary-color;
      margin: 0 20px;
      font-size: 300%;
    }
  }
  @media only screen and (min-width: 768px) {
    .socials {
      i {
        font-size: 400%;
      }
    }
  }
</style>
