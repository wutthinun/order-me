import data from '@/data/data'

const getOrdered = async (orderKey) => {
  const ordered = await data.getOrdered(orderKey)
  return ordered.val()
}

const getWholeOrders = async () => await data.getWholeOrders()

const initOrder = async () => await data.initOrder()

const getUnpaidOrder = async () => {
  const orders = await data.getUnpaidOrder()
  return orders.val()
}

const purchase = async (orderKey) => data.purchase(orderKey)

const saveOrder = async (order, orderKey) => data.saveOrder(order, orderKey)

export default {
  getOrdered,
  getWholeOrders,
  initOrder,
  getUnpaidOrder,
  purchase,
  saveOrder
}
