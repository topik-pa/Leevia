<template>
  <div id="app">
    <site-header></site-header>
    <router-view/>
    <site-footer></site-footer>
  </div>
</template>

<script>
import SiteHeader from '@/components/Header'
import SiteFooter from '@/components/Footer'

export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteFooter
  },
  data () {
    return {
      globalLabel: 'Leevia test project'
    }
  },
  methods: {
    globalMethod () {
      alert(this.globalLabel)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Work Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 12px;
  text-rendering: optimizelegibility;
  text-shadow: 0 0 0 #AAA, 0 0 .5px transparent;
  #regolamento {
      color: #FFFFFF;
      text-decoration: underline;
      font-weight: bold;
    }
}
</style>
