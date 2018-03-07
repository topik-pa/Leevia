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
    .socials {
      margin: 10px 0;
      i {
        color: $primary-color;
        margin: 0 10px;
        font-size: 300%;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    .container {
      .follow-us {
        font-size: 300%;
      }
      .socials {
        i {
          font-size: 400%;
        }
      }
    }
  }
</style>
