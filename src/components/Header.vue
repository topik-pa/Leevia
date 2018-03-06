<template>
  <header class="container">
    <div class="row">
      <div class="col">
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
              <li><a href="../assets/documents/regulation.pdf">Regolamento</a></li><!--TODO-->
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
  $backgroundColor: #ffcf6b;
  header {
    background-color: $backgroundColor;
  }
  .logo {
    height: 40px;
  }
  nav {
    display: inline-block;
    float:right;
  }
</style>
