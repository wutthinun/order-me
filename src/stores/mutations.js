import * as types from './mutation-types'
import Vue from 'vue'
import _ from 'lodash'

export default {
  [types.GET_ALL_ITEMS] (state, items) {
    state.items = _.map(items, (item, key) => {
      item.id = key
      return item
    })
  },

  [types.PURCHASE] (state, { db, orderKey }) {
    db.child('orders').child(orderKey).update({ status: 'PAID' })
  },

  [types.SET_ORDER_KEY] (state, {key}) {
    state.orderKey = key
  },

  addOrder (state, key) {
    if (state.orderList[key]) {
      state.orderList[key].amount += 1
    } else {
      Vue.set(state.orderList, key, state.order)
    }
    state.total += state.order.price
    state.amount += 1
  }
}
