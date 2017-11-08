import * as types from './mutation-types'
import service from '@/services/services'

export const addToCart = ({ commit }, item) => commit(types.ADD_TO_CART, { item })

export const getAllItems = ({ commit }) => service.getItems().then(items => commit(types.GET_ALL_ITEMS, items))

export const initOrder = ({commit}) => service.initOrder().then(
  key => {
    commit(types.SET_ORDER_KEY, { key })
  }
)

export const setOrderKey = ({ commit }, { key }) => commit(types.SET_ORDER_KEY, { key })
