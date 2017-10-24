import * as types from './mutation-types'

export const addToCart = ({ commit }, item) => {
  commit(types.ADD_TO_CART, { item })
}

export const clearSelectCart = ({ commit }) => {
  commit(types.CLEAR_SELECT_CART)
}
