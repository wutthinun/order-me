import data from '@/data/cook'

const getWholeOrders = async () => await data.getWholeOrders()

const finishedItem = async (orderKey, itemIndex) => await data.updateStatusItemOrder(orderKey, itemIndex, 'FINISHED')

export default {
  getWholeOrders,
  finishedItem
}
