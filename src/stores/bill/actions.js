import * as types from '../mutation-types'
import service from '@/services/services'

export const resetPurchaseOrder = ({ commit }) => commit(types.RESET_PURCHASE_ORDER)

export const setPurchaseOrder = ({ commit }, { order }) => commit(types.SET_PURCHASE_ORDER, { order })

export const getUnpaidOrder = ({ commit }) => service.getUnpaidOrder().then(orders => commit(types.SET_UNPAID_ORDER, { orders }))
