import data from '@/data/data'

const login = async (shopId) => {
  const shop = await data.getShopById(shopId)
  if (shop.val()) {
    localStorage.setItem('shop_id', shopId)
    return true
  }
  return false
}

export default {
  login
}
