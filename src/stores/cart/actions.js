import * as types from '../mutation-types'
import service from '@/services/services'

export const saveOrder = async ({ commit, dispatch }, { order, orderKey }) => {
  const key = await service.saveOrder(order, orderKey)
  if (key) {
    commit(types.SET_ORDER_KEY, { key })
    dispatch('clearSelectCart')
    dispatch('getOrdered', key)
    dispatch('setIsSendOrderSuccess')
  } else {
    dispatch('clearSelectCart')
    commit(types.SET_ORDER_KEY, { key })
    location.hash = '/thank'

    localStorage.removeItem('shop_id')
    localStorage.removeItem('desk')
  }
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

export const setIsSendOrderSuccess = ({ commit }) => commit(types.SET_SEND_ORDER_SUCCESS)

export const getIsSendOrderSuccess = ({ commit }) => commit(types.GET_SEND_ORDER_SUCCESS)
