import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Users from '@/components/Users'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Partecipanti',
      name: 'Users',
      component: Users,
      meta: {
        title: 'Partecipanti',
        metaTags: [
          {
            name: 'description',
            content: 'Pagina partecipanti'
          },
          {
            property: 'og:description',
            content: 'Pagina partecipanti'
          }
        ]
      }
    }
  ]
})
