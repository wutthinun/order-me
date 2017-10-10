<template>
  <div class="box is-fullheight">
    <div class="columns" v-for="( item1, index1 ) in tmpItem" :key="index1">
      <div class="column is-4" v-for="(value, key) in item1" :key="key">
        <div class="box">
          <img src="../assets/milke_shake.jpeg" alt="" @click="addOrder(value)">
          <figure>{{value.name}}: {{value.price}}</figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['items', 'tmpItem'],
  name: 'item-list',
  data () {
    return {
      msg: 'Item List'
    }
  },
  methods: {
    addOrder (item) {
      this.$emit('orders', item)
    }
  },
  mounted () {
  }
}
</script>

<style>
</style>

