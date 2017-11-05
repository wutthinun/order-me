import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const cook = {
  state: {
    wholeOrders: []
  },
  mutations,
  actions,
  getters
}

export default cook
