import Vuex from 'vuex'
import Vue from 'vue'
import * as actions from './actions'
import * as types from './mutation-types'

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

export default new Vuex.Store({
  actions,
  state,
  mutations: {
    [types.ADD_TO_CART] (state, { item }) {
      item.status = 'SELECT'
      state.cart.orders.push(item)
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
    orders: state => state.cart.orders
  }
})
