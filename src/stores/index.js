import Vuex from 'vuex'
import Vue from 'vue'
import * as actions from './actions'
import * as types from './mutation-types'
import _ from 'lodash'

Vue.use(Vuex)

const state = {
  cart: {
    orders: []
  },
  orderList: {},
  order: {},
  item: {},
  items: [],
  total: 0,
  amount: 0,
  orderKey: ''
}
// STATUS = SELECT | NEW | FINISHED
export default new Vuex.Store({
  actions,
  state,
  mutations: {
    [types.ADD_TO_CART] (state, { item }) {
      const order = _.find(state.cart.orders, (o) => o.id === item.id)
      if (order) {
        order.amount++
      } else {
        item.status = 'SELECT'
        item.amount = 1
        state.cart.orders.push(item)
      }
    },
    [types.CLEAR_SELECT_CART] (state) {
      state.cart.orders.splice(0)
    },
    addOrder (state, key) {
      if (state.orderList[key]) {
        state.orderList[key].amount += 1
      } else {
        Vue.set(state.orderList, key, state.order)
      }
      state.total += state.order.price
      state.amount += 1
    }
  },
  getters: {
    amount (state) {
      return state.amount
    },
    items: state => state.items,
    orders: state => state.cart.orders,
    totalPrice: state => {
      let price = 0
      state.cart.orders.forEach((o) => {
        price += (o.amount * o.price)
      })
      return price
    }
  }
})
