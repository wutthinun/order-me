import * as types from '../mutation-types'
import _ from 'lodash'

export default {
  [types.ADD_TO_CART] (state, { item }) {
    const order = _.find(state.orders, (o) => o.id === item.id)
    if (order) {
      order.amount++
    } else {
      item.status = 'SELECT'
      item.amount = 1
      state.orders.push(item)
    }
    let tempCart = state.orders.slice()
    state.orders = tempCart.slice()
  },

  [types.CLEAR_SELECT_CART] (state) {
    state.orders.splice(0)
  },

  [types.GET_ORDERED] (state, ordered) {
    state.ordered = ordered
  }
}
