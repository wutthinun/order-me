<template>
  <nav class="panel">
    <p class="panel-heading">
      Order list
    </p>
    <div :class="{'panel-block': true, 'is-active': false}" v-for="(value, key) in orders" :key="key"
      @click="setPurchaseOrder({order: value})"
    >
    <span class="panel-icon">
      <i class="fa fa-book"></i>
    </span>
    {{value.desk}}
    </div>
  </nav> 
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'getUnpaidOrder',
      'setPurchaseOrder'
    ])
  },
  computed: {
    ...mapGetters({
      orders: 'getUnpaidOrder'
    })
  },
  mounted () {
    this.getUnpaidOrder()
  }
}
</script>
