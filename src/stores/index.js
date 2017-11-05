import Vuex from 'vuex'
import Vue from 'vue'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

import bill from './bill'
import cook from './cook'

Vue.use(Vuex)

const state = {
  cart: {
    orders: [],
    ordered: []
  },
  order: {},
  item: {},
  items: [],
  total: 0,
  amount: 0,
  orderKey: null
}

export default new Vuex.Store({
  modules: {
    bill,
    cook
  },
  actions,
  state,
  mutations,
  getters
})
