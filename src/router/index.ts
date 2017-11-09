import Vue from 'vue'
import Router from 'vue-router'
import Cooking from '@/components/Cooking.vue'
import Billing from '@/components/Bill.vue'
import MenuContainer from '@/components/MenuContainer.vue'
import Cart from '@/components/cart/Cart.vue'
import CheckIn from '@/components/checkin/CheckIn.vue'
import Login from '@/components/Login.vue'
import AdminContainer from '@/components/AdminContainer.vue'
import Thank from '@/components/Thank.vue'

Vue.use(Router)

const myrouter = new Router({
    routes: [
        {
            path: '/',
            name: 'Menu',
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
        },
        {
            path: '/thank',
            name: 'Thank',
            component: Thank
        }
    ]
})

myrouter.beforeEach((to, from, next) => {
    if (to.name === 'CheckIn' && to.query.desk && to.query.shop_id) {
        localStorage.setItem('desk', to.query.desk)
        localStorage.setItem('shop_id', to.query.shop_id)
        next({ name: 'Menu' })
    } else if (['Menu', 'Cart'].includes(to.name || '') && !localStorage.getItem('desk') && !localStorage.getItem('shop_id')) {
        console.log('555555555')
        next({ name: 'CheckIn' })
    } else {
        next()
    }
})

export default myrouter
