<template>
  <main class="container">
    <div class="row">
      <div class="col">
        <h1>{{title}}</h1>
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
$backgroundColor: #001e38;
  main {
    background-color: $backgroundColor;
  }
  .container {
    color: #FFFFFF;
    font-size: 120%;
    h1 {
      font-size: 260%;
      text-transform: uppercase;
      font-weight: bold;
      text-align: center;
    }
    .row {
      background-image: url('../assets/images/img_2-min.jpg');
      background-position: 83% 0%;
      background-repeat: no-repeat;
      background-size: 170%;
    }
  }
</style>
