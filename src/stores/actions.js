import * as types from './mutation-types'
import service from '@/services/services'

export const addToCart = ({ commit }, item) => {
  commit(types.ADD_TO_CART, { item })
}

export const clearSelectCart = ({ commit }) => {
  commit(types.CLEAR_SELECT_CART)
}

export const getOrdered = ({ commit }, orderKey) => {
  service.getOrdered(orderKey).then((orders) => {
    const ordered = orders.item
    commit(types.GET_ORDERED, ordered)
  })
}
