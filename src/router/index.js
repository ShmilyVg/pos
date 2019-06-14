import Vue from 'vue'
import Router from 'vue-router'
import LeftNav from '@/components/LeftNav.vue'

Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/d',
      name: 'LeftNav',
      component: LeftNav
    }
  ]
})
