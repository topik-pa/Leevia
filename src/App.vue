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
      globalLabel: 'Ciao!'
    }
  },
  methods: {
    globalMethod () {
      alert('Ciccio')
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Work Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
