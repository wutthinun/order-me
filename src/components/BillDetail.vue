<template>
  <div class="box">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Item</th>
          <th>Amount</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, key) in selected.items" :key="key">
          <td>{{ value.name }}</td>
          <td>{{ value.amount }}</td>
          <td>{{ value.price * value.amount }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th style="text-align: center">Total</th>
          <th></th>
          <th>{{ selected.price || 0 }}</th>
        </tr>
        <tr v-if="selected.price">
          <th style="text-align: center">Receive</th>
          <th></th>
          <th>
            <input class="input" v-model="receive" type="number" name="receive" id="receive"/>
          </th>
        </tr>
        <tr v-if="selected.price">
          <th style="text-align: center">Cash</th>
          <th></th>
          <th>
            <label for="">{{ receive - (selected.price | 0 ) }}</label>
          </th>
        </tr>
      </tfoot>
    </table>

    <div class="culumns is-desktop" v-if="receive != 0">
      <div class="column">
        <button class="button is-success is-medium is-fullwidth"
          @click="purchase"
        >Purchase</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      receive: 0
    }
  },
  computed: {
    ...mapGetters({
      selected: 'getPurchaseOrder'
    })
  },
  methods: {
    purchase () {
      this.$store.dispatch('purchase', { orderKey: this.selected.key }).then(() => { this.receive = 0 })
    }
  }
}
</script>
