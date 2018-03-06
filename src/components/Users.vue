<template>
  <main class="container">
    <div class="row">
      <div class="col">
        Eeeeh.....
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
      title: 'Partecipanti',
      paragraph: 'La top 10 dei partecipanti. Sei tra loro?',
      userList: {}
    }
  },
  beforeCreate: function () {
    console.log('Pippo!')
    $.get('https://api.github.com/users/octocat/followers', function () {
    })
      .done(function (data) {
        this.userList = data
        console.log(this.userList)
      })
      .fail(function () {
        alert('error')
      })
      .always(function () {
        alert('finished')
      })
  }
}
</script>

<style lang="scss" scoped>
  $backgroundColor: #001e38;
</style>
