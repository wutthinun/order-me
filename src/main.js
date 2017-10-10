// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import Vuex from 'vuex'
import db from './firebase.conf'

Vue.config.productionTip = false
Vue.use(VueFire)
Vue.use(Vuex)

let order = {}

let item = {}

let items = []
let orderList = {}
let total = 0
let amount = 0

let store = new Vuex.Store({
  state: {
    orderList,
    order,
    item,
    items,
    total,
    amount
  },
  mutations: {
    addOrder (state) {
      if (state.orderList[state.order.name]) {
        state.orderList[state.order.name].amount += 1
      } else {
        Vue.set(state.orderList, state.order.name, state.order)
      }
      state.total += state.order.price
      state.amount += 1
    }
  },
  getters: {
    amount (state) {
      return state.amount
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store,
  firebase: {
    nomkafe: db.ref('nomkafe')
  },
  mounted () {
    console.log(this.$store.state.orderList)
    this.$firebaseRefs.nomkafe.child('items').on('value', snapshot => {
      this.items = snapshot.val()
      const metrix = 3
      let counter = 1
      let obj = {}
      for (let key in this.items) {
        if (counter <= metrix) {
          obj[key] = this.items[key]
          counter++
        } else {
          this.$store.state.items.push(obj)
          obj = {}

          counter = 1
          obj[key] = this.items[key]
          counter++
        }
      }
      this.$store.state.items.push(obj)
    })
  }
})

