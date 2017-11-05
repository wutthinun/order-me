import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const cart = {
  state: {
    orders: [],
    ordered: []
  },
  mutations,
  actions,
  getters
}

export default cart
