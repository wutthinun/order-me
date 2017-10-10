import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Cooking from '@/components/Cooking'
import Billing from '@/components/Bill'
import Prototype from '@/components/Prototype'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Order',
      component: Index
    },
    {
      path: '/cooking',
      name: 'Cook',
      component: Cooking
    },
    {
      path: '/billing',
      name: 'Bill',
      component: Billing
    },
    {
      path: '/prototype',
      name: 'Prototype',
      component: Prototype
    }
  ]
})
