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
