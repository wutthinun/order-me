import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/Index'
import Cooking from '@/components/Cooking'
import Billing from '@/components/Bill'
import Prototype from '@/components/Prototype'
import Cart from '@/components/cart/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Order',
      component: Prototype
    },
    {
      path: '/cooking',
      name: 'Cook',
      component: Cooking
    },
    {
      path: '/menus',
      name: 'Menus',
      component: Prototype
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
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ]
})
