import Vuex from 'vuex'
import Vue from 'vue'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

import bill from './bill'
import cook from './cook'
import cart from './cart'

Vue.use(Vuex)

const state = {
  orderKey: null,
  items: []
}

export default new Vuex.Store({
  modules: {
    bill,
    cook,
    cart
  },
  actions,
  state,
  mutations,
  getters
})
