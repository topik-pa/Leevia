<template>
  <header class="container">
    <div class="row">
      <div class="col wrapper">
        <img class="logo" src="../assets/images/logo.png">
        <nav class="navbar navbar-inverse navbar-static-top" role="navigation">
          <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
              </button>
          </div>
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li><router-link to="/">Partecipa</router-link></li>
              <li><router-link to="/partecipanti">Partecipanti</router-link></li>
              <li><a href="/static/regulation.pdf">Regolamento</a></li><!--TODO-->
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/styles/variables.scss";
  .wrapper {
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
  .navbar {
    min-height: initial;
    margin-bottom: 0;
    &.navbar-inverse {
      background-color: initial;
      border-color: initial;
      border:none;
      .navbar-toggle {
        border: none;
        padding: 0;
        &:focus, &:hover {
          background-color: initial;
        }
        .icon-bar {
          background-color: $secondary-color;
          width: 27px;
          height: 3px;
        }
      }
      .navbar-nav {
        li {
          a{
            color: $secondary-color;
            text-transform: uppercase;
            font-weight: bold;
            &.router-link-exact-active {
              text-decoration:underline;
            }
          }
        }
      }
      .navbar-collapse {
        position: fixed;
        right: 0px;
        background: $primary-color;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    .wrapper {
      .logo {
        margin: 17px 40px;
      }
      .navbar.navbar-inverse {
      .navbar-nav {
        margin-right: 40px;
      }
      .navbar-collapse {
        position: relative;
        right: 0px;
        .nav li a {
          padding: 0 0 0 50px;
          font-weight: bold;
          font-size: 120%;
        }
      }
      }
    }
  }
</style>
