<template>
  <section>
    <p>{{paragraph}}</p >
    <ul>
      <li v-for="(user, index) in userList" v-bind:key="index" v-if="user && index < limitationList">
        <span class="index">{{ index + 1 }}</span><a :href="user.html_url"><img :src="user.avatar_url" /></a><span class="name">{{user.login}}</span>
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
  methods: {
    getUsers: function () {
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
  },
  mounted: function () {
    this.getUsers()
  }
}
</script>

<style lang="scss" scoped>
  $primary-color: '#ffcf6b';
  p {
    text-align: center;
    font-weight: bold;
    margin-bottom: 10%;
    padding: 0 25% 10% 25%;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 80%;
    margin: 10px auto;
    text-align: center;
    font-weight: bold;
    li {
      font-size: 140%;
      display: flex;
      justify-content: center;
      margin: 20px 0;
      align-items: center;
      span {
        &.index {
          width: 15%;
          max-width: 50px;
        }
        &.name {
          width: 40%;
          max-width: 180px;
          font-weight: normal;
          font-size: 90%;
        }
      }
      a {
        width: 25%;
        max-width: 55px;
      }
    }
    img {
      width: 100%;
      border-radius: 30px;
    }
  }
  @media only screen and (min-width: 768px) {
    ul {
      li {
        span {
          &.index {
            width: 5%;
          }
          &.name {
            width: 20%;
          }
        }
        a {
          width: 5%;
        }
      }
    }
  }
</style>
