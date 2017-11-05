import db from '@/firebase.conf'

const shop = () => (db.child(localStorage.getItem('shop_id')))

const getShopById = async id => await db.child('shop_id').child(id).once('value')

const getOrdered = async (orderKey) => await shop().child('orders').child(orderKey).once('value')

const initOrder = async () => {
  return await shop().child('orders').push({
    desk: localStorage.getItem('desk'),
    time: new Date().toString(),
    status: 'UNPAID'
  }).key
}

const getUnpaidOrder = async () => await shop().child('orders').orderByChild('status').equalTo('UNPAID').once('value')

const purchase = async (orderKey) => await shop().child('orders').child(orderKey).update({ status: 'PAID' })

const saveOrder = async (order, orderkey) => {
  if (orderkey) {
    shop().child('orders').child(orderkey).update(order, (error) => {
      if (error) {
        console.error('ERROR: ', error)
      } else {
        console.info('Update success')
      }
    })
  } else {
    orderkey = shop().child('orders').push(order).key
  }
  return orderkey
}

export default {
  getShopById,
  getOrdered,
  initOrder,
  getUnpaidOrder,
  purchase,
  saveOrder
}
