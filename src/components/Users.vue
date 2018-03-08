<template>
  <main class="container">
    <div class="row">
      <h1>{{title}}</h1>
      <div class="col">
        <users-list></users-list>
      </div>
    </div>
  </main>
</template>

<script>
import UsersList from '@/components/UsersList'
export default {
  name: 'Users',
  components: {
    UsersList
  },
  data () {
    return {
      title: 'Partecipanti'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables.scss";
  main {
    background-color: $secondary-color;
  }
  .container {
    color: #FFFFFF;
    font-size: 120%;
    h1 {
      font-size: 260%;
      text-transform: uppercase;
      font-weight: bold;
      text-align: center;
      margin-top: 20%;
    }
    .row {
      background-image: url('../assets/images/img_2-resize-min-reverse.jpg');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: 28% -7%;
    }
    .col {
      background-color: $secondary-color;
      margin-top: 10%;
      padding-top: 10%;
    }
  }
  @media only screen and (min-width: 768px) {
    .container {
      .row {
        background-position: 0 -90%;
      }
      h1 {
        margin: 7% 0;
      }
      .col {
        margin: 0;
        padding-top: 5%;
      }
    }
  }
  @media only screen and (min-width: 992px) {
    .container {
      .row {
        background-position: 0 -115%;
      }
    }
  }
</style>
