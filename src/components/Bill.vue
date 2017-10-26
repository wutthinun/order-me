<template>
  <div class="container">
    <div class="columns is-desktop">
      <div class="column is-4">
        <bill-list :orders="orders" @orderSelect="orderSelect"></bill-list>
      </div>

      <div class="column">
        <bill-detail :selected="selected" :orderKey="orderKey"></bill-detail>
      </div>
    </div>
  </div>
</template>
<script>
import db from '../firebase.conf'
import BillList from './BillList'
import BillDetail from './BillDetail'

export default {
  firebase: {
    nomkafe: db.child('123456789')
  },
  components: {
    'bill-list': BillList,
    'bill-detail': BillDetail
  },
  data () {
    return {
      orders: {},
      selected: {},
      orderKey: ''
    }
  },
  methods: {
    orderSelect ({ selected, orderKey }) {
      this.selected = selected
      this.orderKey = orderKey
    }
  },
  beforeMount () {
    this.$firebaseRefs.nomkafe.child('orders').orderByChild('status').equalTo('UNPAID').on('value', snapshot => {
      this.orders = snapshot.val()
    })
  }
}
</script>

