import data from '@/data/data'

const login = (shopId) => {
  return data.getShopById(shopId).then(shop => {
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
