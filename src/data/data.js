import db from '@/firebase.conf'

const getShopById = async (id) => await db.ref('shop_id').child(id).once('value')

export default {
  getShopById
}
