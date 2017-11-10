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
            <input class="input" v-model="receive" type="number" name="receive" min="0" @keypress="validatePrice" @focus="focus" id="receive"/>
          </th>
        </tr>
        <tr v-if="selected.price">
          <th style="text-align: center">Cash</th>
          <th></th>
          <th>
            <label for="">{{ cash }}</label>
          </th>
        </tr>
      </tfoot>
    </table>
    <div class="culumns is-desktop" v-if="cash >= 0">
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
    }),
    cash() {
      return this.selected.price && this.receive - (this.selected.price | 0 )
    }
  },
  methods: {
    purchase () {
      this.$store.dispatch('purchase', { orderKey: this.selected.key }).then(() => { this.receive = 0 })
    },
    validatePrice(e) {
      const c = String.fromCharCode(e.charCode)
      const p = new RegExp(/^[0-9]/)
      if (!p.test(c)) e.returnValue = false
    },
    focus(e) {
      if (+e.target.value === 0) e.target.value = ''
    }
  }
}
</script>
