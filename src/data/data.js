import db from '@/firebase.conf'

const getShopById = async id => await db.child('shop_id').child(id).once('value')

const getOrdered = async (orderKey) => await db.child(localStorage.getItem('shop_id')).child('orders').child(orderKey).once('value')

export default {
  getShopById,
  getOrdered
}
