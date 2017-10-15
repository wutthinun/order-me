import * as types from './mutation-types'

export const addToCart = ({ commit }, item) => {
  commit(types.ADD_TO_CART, { item })
}
