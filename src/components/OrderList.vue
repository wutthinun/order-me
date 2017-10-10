<template>
	<div class="box is-fullheight">
    <p class="panel-heading" :style="havePrice" @click="confirmOrder">
      <label for="">{{ price }} : &#3647; </label>
    </p>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Order</th>
          <th style="text-align: right">Amount</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="( order, name ) in orders" :key="order.amount" >
          <td v-text="name"></td>
          <td class="table-number" v-text="order.amount"></td>
          <td>
            <button class="button is-small is-info" @click="increment(order)">+</button>
            <button class="button is-small is-danger" @click="decrement(order)">-</button>
          </td>
        </tr>
      </tbody>
    </table>
    
    <!-- Modal -->
    <confirm-modal :isActive="isActive" :orders="orders" @closeModal="closeModal" @sendOrder="sendOrder"></confirm-modal>

	</div>
</template>

<script>
import ConfirmModal from './ConfirmOrderModal'

export default {
  props: ['orders', 'price'],
  name: 'order-list',
  components: {
    'confirm-modal': ConfirmModal
  },
  data () {
    return {
      msg: 'Order List',
      newOrder: {},
      isActive: false
    }
  },
  methods: {
    add () {
      this.newOrder = this.orders
    },
    increment (order) {
      this.$emit('increment', order)
    },
    decrement (order) {
      this.$emit('decrement', order)
    },
    confirmOrder () {
      if (this.price !== 0) {
        this.isActive = true
      }
    },
    closeModal () {
      this.isActive = false
    },
    sendOrder (desk) {
      this.$emit('sendOrder', desk)
    }
  },
  computed: {
    havePrice () {
      return this.price !== 0 ? 'background-color: hsl(141, 71%, 48%)' : ''
    }
  }
}
</script>

<style>
  .table-number {
    text-align: right;
  }
</style>
