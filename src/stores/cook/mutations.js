import * as types from '../mutation-types'

export default {
  [types.GET_WHOLE_ORDERS] (state, wholeOrders) {
    state.wholeOrders = wholeOrders
  }
}
