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

const initOrder = async () => {
  return await db.child(localStorage.getItem('shop_id')).child('orders').push({
    desk: localStorage.getItem('desk'),
    time: new Date().toString(),
    status: 'UNPAID'
  }).key
}

const getUnpaidOrder = async () => await db.child(localStorage.getItem('shop_id')).child('orders').orderByChild('status').equalTo('UNPAID').once('value')

const purchase = async (orderKey) => await db.child(localStorage.getItem('shop_id')).child('orders').child(orderKey).update({ status: 'PAID' })

const saveOrder = async (order, orderkey) => {
  if (orderkey) {
    db.child(localStorage.getItem('shop_id')).child('orders').child(orderkey).update(order, (error) => {
      if (error) {
        console.error('ERROR: ', error)
      } else {
        console.info('Update success')
      }
    })
  } else {
    orderkey = db.child(localStorage.getItem('shop_id')).child('orders').push(order).key
  }
  return orderkey
}

export default {
  getShopById,
  getOrdered,
  getWholeOrders,
  initOrder,
  getUnpaidOrder,
  purchase,
  saveOrder
}
