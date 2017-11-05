import * as types from '../mutation-types'
import service from '@/services/services'

export const getWholeOrders = ({ commit }) => {
  service.getWholeOrders().then(wholeOrders => {
    commit(types.GET_WHOLE_ORDERS, wholeOrders)
  })
}
