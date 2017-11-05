<template>
  <div class="container is-centered">
    <section class="hero is-medium">
      <div class="hero-body" style=" padding: 1rem;">
        <div class="container">
          <logo />
        </div>
      </div>
    </section>
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
      <div class="box" v-for="(order, orderKey) in wholeOrders" :key="orderKey">
        <div class="columns">
          <div class="column is-12">
            <label class="">Desk: {{ order.desk }}</label>
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, itemIndex) in order.items" :key="itemIndex">
              <td>{{ item.name }}</td>
              <td>{{ item.amount }}</td>
              <td>
                <div class="container is-fluid">
                  <div class="is-pulled-right">
                     <button v-if="item.status !== 'FINISHED'" class="button is-small is-info" @click="finishedItem({orderKey, itemIndex})">
                      <span>พร้อมเสริฟ</span>
                      <span class="icon">
                        <i class="fa fa-check" aria-hidden="true"></i>
                      </span>
                      </button>

                      <div v-if="item.status === 'FINISHED'" class="has-text-success">
                          <span class="icon">
                            <i class="fa fa-check" aria-hidden="true"></i>
                          </span>
                           <span>เสร็จแล้ว</span>
                      </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="column">
          <!-- <button class="button is-success is-fullwidth" @click="done(orderKey)">Done</button> -->
        </div>
      </div>
    </section>

  </div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex'

import Logo from '@/components/Logo'
export default {
  components: {
    'logo': Logo
  },
  computed: mapGetters({
    wholeOrders: 'wholeOrders'

  }),
  data () {
    return {}
  },
  methods: {
    ...mapActions([
      'getWholeOrders',
      'finishedItem'
    ]),
    done (orderKey) {
      this.$firebaseRefs.nomkafe.child('order').child(orderKey).update({status: 'DONE'})
    }
  },
  mounted () {
    this.getWholeOrders()
  }
}
</script>

