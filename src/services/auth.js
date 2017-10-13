import db from '@/firebase.conf'

const login = (shopId) => {
  return db.ref('shop_id').child(shopId).once('value').then(shop => {
    if (shop.val()) {
      localStorage.setItem('shop_id', shopId)
      return true
    }
    return false
  })
}

export default {
  login
}
