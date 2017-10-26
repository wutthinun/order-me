import db from '@/firebase.conf'

const getShopById = async id => await db.child('shop_id').child(id).once('value')

const getOrdered = async (orderKey) => await db.child(localStorage.getItem('shop_id')).child('orders').child(orderKey).once('value')

const getWholeOrders = async () => {
  let wholeOrders = []
  await db.child(localStorage.getItem('shop_id')).child('orders').on('value', snapshot => {
    wholeOrders = snapshot.val()
  })
  return wholeOrders
}

export default {
  getShopById,
  getOrdered,
  getWholeOrders
}
