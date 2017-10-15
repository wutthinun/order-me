<template>
  <div class="container is-centered">
    <section>
      <div class="columns">
        <div class="column">
          <div class="tags has-addons">
            <span class="tag">รายการอาหารรอคิว</span>
            <span class="tag is-warning">0</span>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="box" v-for="(items, key1) in orders" :key="key1">
        <div class="columns">
          <div class="column is-12">
            <label class="">Desk: {{ items.desk }}</label>
          </div>
          <div class="column is-hidden-mobile"></div>
          <div class="column is-hidden-mobile"></div>
          <div class="column is-hidden-mobile"></div>
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
        <div class="column">
          <button class="button is-success is-fullwidth" @click="done(key1)">Done</button>
        </div>
      </div>
    </section>

  </div>
</template>
<script>
import db from '../firebase.conf'
export default {
  firebase: {
    nomkafe: db.child('123456789')
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

