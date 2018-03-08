<template>
  <section>
    <p>{{paragraph}}</p >
    <ul id="example-1">
      <li v-for="(user, index) in userList" v-bind:key="index" v-if="user && index < limitationList">
        {{ index + 1 }} <img :src="user.avatar_url" /> {{user.login}}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data () {
    return {
      paragraph: 'La top 10 dei partecipanti. Sei tra loro?',
      userList: [{}],
      limitationList: 10
    }
  },
  beforeCreate: function () {
    var that = this
    $.get('https://api.github.com/users/octocat/followers', function () {
    })
      .done(function (data) {
        that.userList = data
      })
      .fail(function () {
        alert('error on ajax request')
      })
  }
}
</script>

<style lang="scss" scoped>
  $primary-color: '#ffcf6b';
  p {
    text-align: center;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-content: center;
    img {
      width: 25px;
      border-radius: 25px;
    }
  }
</style>
