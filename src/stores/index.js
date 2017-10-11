import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderList: {},
    order: {},
    item: {},
    items: [],
    total: 0,
    amount: 0,
    orderKey: ''
  },
  mutations: {
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
    }
  }
})
