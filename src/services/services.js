import data from '@/data/data'

const getOrdered = async (orderKey) => {
  const ordered = await data.getOrdered(orderKey)
  return ordered.val()
}

const initOrder = async () => await data.initOrder()

const getUnpaidOrder = async () => {
  const orders = await data.getUnpaidOrder()
  return orders.val()
}

const purchase = async (orderKey) => data.purchase(orderKey)

const saveOrder = async (order, orderKey) => {
  if (orderKey) { 
    const ordered = await getOrdered(orderKey)
    let newItem = [
      ...ordered.items,
      ...order.items
    ]
    order.items = newItem
  }
  await data.saveOrder(order, orderKey)
}

const getItems = async () => {
  const items = await data.getItems()
  return items.val()
}

export default {
  getOrdered,
  initOrder,
  getUnpaidOrder,
  purchase,
  saveOrder,
  getItems
}
