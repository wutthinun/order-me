import data from '@/data/data'

const getOrdered = async (orderKey) => {
  const ordered = await data.getOrdered(orderKey)
  return ordered.val()
}

const getWholeOrders = async () => await data.getWholeOrders()

const initOrder = async () => await data.initOrder()

export default {
  getOrdered,
  getWholeOrders,
  initOrder
}
