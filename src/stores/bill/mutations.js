import * as types from '../mutation-types'
import _ from 'lodash'

export default {
  [types.RESET_PURCHASE_ORDER] (state) {
    state.purchaseOrder = {}
  },

  [types.SET_PURCHASE_ORDER] (state, { order }) {
    state.purchaseOrder = order
  },

  [types.SET_UNPAID_ORDER] (state, { orders }) {
    state.unpaidOrder = _.map(orders, (item, key) => {
      item.key = key
      return item
    })
  }
}
