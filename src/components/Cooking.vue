<template>
  <div class="container">
    <div class="box" v-for="(items, key1) in orders" :key="key1">
      <div class="columns">
        <div class="column">
          <button class="button is-focused is-fullwidth">Desk: {{ items.desk }}</button>
        </div>
        <div class="column is-hidden-mobile"></div>
        <div class="column is-hidden-mobile"></div>
        <div class="column is-hidden-mobile"></div>
        <div class="column">
          <button class="button is-success is-fullwidth" @click="done(key1)">Done</button>
        </div>
      </div>
      <table class="table is-fullwidth">
        <thead>
          <tr>
            <th>Item</th>
            <th>Amount</th>
            <!-- <th></th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, key2) in items.order" :key="key2">
            <td>{{ item.name }}</td>
            <td>{{ item.amount }}</td>
            <!-- <td><button class="button is-small is-info" @click="increment(order)">done</button></td> -->
          </tr>
        </tbody>
      </table>
    </div>
  </div> 
</template>
<script>
import db from '../firebase.conf'
export default {
  firebase: {
    nomkafe: db.ref('nomkafe')
  },
  data () {
    return {
      orders: {}
    }
  },
  methods: {
    done (orderKey) {
      this.$firebaseRefs.nomkafe.child('order').child(orderKey).update({status: 'DONE'})
    }
  },
  mounted () {
    this.$firebaseRefs.nomkafe.child('order').orderByChild('status').equalTo('NEW').on('value', snapshot => {
      this.orders = snapshot.val()
    })
  }
}
</script>

