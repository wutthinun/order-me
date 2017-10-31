import * as types from './mutation-types'
import Vue from 'vue'
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
  },

  [types.GET_WHOLE_ORDERS] (state, wholeOrders) {
    state.cook.wholeOrders = wholeOrders
  },

  [types.GET_ALL_ITEMS] (state, db) {
    db.child('items').on('value', snapshot => {
      state.items = _.map(snapshot.val(), (item, key) => {
        item.id = key
        return item
      })
    })
  },

  [types.PURCHASE] (state, { db, orderKey }) {
    db.child('orders').child(orderKey).update({ status: 'PAID' })
  },

  [types.SET_ORDER_KEY] (state, {key}) {
    state.orderKey = key
  },

  [types.RESET_PURCHASE_ORDER] (state) {
    state.bill.purchaseOrder = {}
  },

  [types.SET_PURCHASE_ORDER] (state, { order }) {
    state.bill.purchaseOrder = order
  },

  [types.SET_UNPAID_ORDER] (state, { orders }) {
    state.bill.unpaidOrder = _.map(orders, (item, key) => {
      item.key = key
      return item
    })
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
