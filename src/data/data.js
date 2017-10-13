import db from '@/firebase.conf'

const getShopById = (id) => {
  return db.ref('shop_id').child(id).once('value')
}

export default {
  getShopById
}
