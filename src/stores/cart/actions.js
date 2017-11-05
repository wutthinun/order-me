import * as types from '../mutation-types'
import service from '@/services/services'

export const saveOrder = async ({ commit, dispatch }, { order, orderKey }) => {
  const key = await service.saveOrder(order, orderKey)
  commit(types.SET_ORDER_KEY, { key })
  dispatch('clearSelectCart')
  dispatch('getOrdered', key)
}

export const getOrdered = ({ commit }, orderKey) => {
  service.getOrdered(orderKey).then((orders) => {
    const ordered = orders.items
    commit(types.GET_ORDERED, ordered)
  })
}

export const clearSelectCart = ({ commit }) => {
  commit(types.CLEAR_SELECT_CART)
}
