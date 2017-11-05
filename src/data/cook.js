import db from '@/firebase.conf'

const shop = () => (db.child(localStorage.getItem('shop_id')))

const getWholeOrders = async () => {
  let wholeOrders = []
  await shop().child('orders').on('value', snapshot => {
    wholeOrders = snapshot.val()
  })
  return wholeOrders
}

const updateStatusItemOrder = async (orderKey, itemIndex, status) => await shop().child('orders').child(orderKey)
                                                                               .child('items')
                                                                               .child(itemIndex)
                                                                               .update({ status })

export default {
  getWholeOrders,
  updateStatusItemOrder
}
