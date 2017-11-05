import * as types from '../mutation-types'
import service from '@/services/cook'

export const getWholeOrders = ({ commit }) => {
  service.getWholeOrders().then(wholeOrders => {
    commit(types.GET_WHOLE_ORDERS, wholeOrders)
  })
}
