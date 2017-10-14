import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/Index'
import Cooking from '@/components/Cooking'
import Billing from '@/components/Bill'
import MenuContainer from '@/components/MenuContainer'
import Cart from '@/components/cart/Cart'
import CheckIn from '@/components/checkin/CheckIn'
import Login from '@/components/Login'
import AdminContainer from '@/components/AdminContainer'

Vue.use(Router)

const myrouter = new Router({
  routes: [
    {
      path: '/',
      name: 'menus',
      component: MenuContainer
    },
    {
      path: '/cooking',
      name: 'Cook',
      component: Cooking
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/billing',
      name: 'Bill',
      component: Billing
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
    },
    {
      path: '/admin',
      name: 'Admin',
      component: AdminContainer
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
