<template>
  <nav class="panel">
    <p class="panel-heading" @click="getUnpaidOrder">
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
<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'

export default Vue.extend({
  methods: {
    ...mapActions({
      getUnpaidOrder: 'getUnpaidOrder',
      setPurchaseOrder: 'setPurchaseOrder'
    })
  },
  computed: {
    ...mapGetters({
      orders: 'getUnpaidOrder'
    })
  },
  mounted () {
    this.getUnpaidOrder()
  }
})
</script>
