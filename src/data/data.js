import db from '@/firebase.conf'

const getShopById = async (id) => await db.child('shop_id').child(id).once('value')

export default {
  getShopById
}
