import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const bill = {
  state: {
    purchaseOrder: {},
    unpaidOrder: []
  },
  mutations,
  actions,
  getters
}

export default bill
