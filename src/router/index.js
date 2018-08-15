import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Race from '@/components/Race'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/Race',
      name: 'Race',
      component: Race
    }
  ]
})
