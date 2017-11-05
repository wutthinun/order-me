import * as types from '../mutation-types'
import _ from 'lodash'

export default {
  [types.ADD_TO_CART] (state, { item }) {
    const order = _.find(state.cart.orders, (o) => o.id === item.id)
    if (order) {
      order.amount++
    } else {
      item.status = 'SELECT'
      item.amount = 1
      state.cart.orders.push(item)
    }
    let tempCart = state.cart.orders.slice()
    state.cart.orders = tempCart.slice()
  },

  [types.CLEAR_SELECT_CART] (state) {
    state.cart.orders.splice(0)
  },

  [types.GET_ORDERED] (state, ordered) {
    state.cart.ordered = ordered
  }
}
