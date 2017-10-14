import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/Index'
import Cooking from '@/components/Cooking'
import Billing from '@/components/Bill'
import Prototype from '@/components/Prototype'
import Cart from '@/components/cart/Cart'
import CheckIn from '@/components/checkin/CheckIn'

Vue.use(Router)

const myrouter = new Router({
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
    },
    {
      path: '/checkin',
      name: 'CheckIn',
      component: CheckIn
    }
  ]
})

myrouter.beforeEach((to, from, next) => {
  if (to.name === 'CheckIn' && to.query.desk && to.query.shop_id) {
    localStorage.setItem('desk', to.query.desk)
    localStorage.setItem('shop_id', to.query.shop_id)
    next({name: 'Order'})
  } else if (to.name === 'Order' && !localStorage.getItem('desk') && !localStorage.getItem('shop_id')) {
    next({name: 'CheckIn'})
  } else {
    next()
  }
})

export default myrouter
