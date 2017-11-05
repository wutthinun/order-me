import * as types from './mutation-types'
import service from '@/services/services'

export const addToCart = ({ commit }, item) => commit(types.ADD_TO_CART, { item })

export const clearSelectCart = ({ commit }) => {
  commit(types.CLEAR_SELECT_CART)
}

export const getOrdered = ({ commit }, orderKey) => {
  service.getOrdered(orderKey).then((orders) => {
    const ordered = orders.items
    commit(types.GET_ORDERED, ordered)
  })
}

export const getAllItems = ({ commit }, db) => commit(types.GET_ALL_ITEMS, db)

export const purchase = ({commit, dispatch}, { orderKey }) => {
  service.purchase(orderKey)
  commit(types.RESET_PURCHASE_ORDER)
  dispatch('getUnpaidOrder')
}

export const initOrder = ({commit}) => service.initOrder().then(
  key => {
    commit(types.SET_ORDER_KEY, { key })
  }
)
