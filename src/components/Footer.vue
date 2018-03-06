<template>
  <footer class="container">
    <div class="row">
      <div class="col">
        <div class="follow-us">{{followUs}}</div>
          <div class="socials">
            <a href="#"><i class="fa fa-facebook-official"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-instagram"></i></a>
            <a href="#"><i class="fa fa-youtube"></i></a>
          </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      followUs: 'Seguici sui social'
    }
  }
}
</script>

<style lang="scss" scoped>
  $backgroundColor: #001e38;
  $color: #ffcf6b;
  .container {
    background-color: $backgroundColor;
    text-align: center;
    color: $color;
    .follow-us {
      text-transform: uppercase;
      font-size: 200%;
    }
    .socials {
      i {
        color: $color;
      }
    }
  }
</style>
