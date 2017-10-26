<template>
  <nav class="panel">
    <p class="panel-heading">
      Order list
    </p>
    <div :class="{'panel-block': true, 'is-active': orderKey == key}" v-for="(value, key) in orders" :key="key"
      @click="selected = value; orderKey = key; selectOrder()"
    >
    <span class="panel-icon">
      <i class="fa fa-book"></i>
    </span>
    {{value.desk}}
    </div>
  </nav> 
</template>
<script>
export default {
  props: ['orders'],
  data () {
    return {
      selected: {},
      orderKey: ''
    }
  },
  methods: {
    selectOrder () {
      this.$emit('orderSelect', {selected: this.selected, orderKey: this.orderKey})
    }
  }
}
</script>

