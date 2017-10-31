import Vuex from 'vuex'
import Vue from 'vue'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  cart: {
    orders: [],
    ordered: []
  },
  cook: {
    wholeOrders: []
  },
  bill: {
    purchaseOrder: {},
    unpaidOrder: []
  },
  order: {},
  item: {},
  items: [],
  total: 0,
  amount: 0,
  orderKey: null
}

export default new Vuex.Store({
  actions,
  state,
  mutations,
  getters
})
