import * as types from '../mutation-types'
import service from '@/services/services'

export const saveOrder = async ({ commit, dispatch }, { order, orderKey }) => {
  const key = await service.saveOrder(order, orderKey)
  commit(types.SET_ORDER_KEY, { key })
  dispatch('clearSelectCart')
  dispatch('getOrdered', key)
}
