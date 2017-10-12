<template>
  <div class="container is-fluid">
    <div class="columns is-gapless is-mobile" v-for="(item, index) in items" :key="index">
      <div class="column is-4" v-for="(value, key) in item" :key="key" @click="addOrder(value, key)">
        <div class="notify-container">
          <span class="notify-bubble" v-if="order[key]">{{ order[key].amount }}</span>
          <img class="is-96x96" src="../../assets/images-menu/2.jpg"/>
          <div class="text-background"></div>
          <div class="text">
            {{ value.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from '../../firebase.conf'

export default {
  props: [],
  firebase: {
    nomkafe: db.ref('nomkafe')
  },
  name: 'items',
  components: {},
  data () {
    return {
      items: this.$store.state.items,
      order: this.$store.state.orderList
    }
  },
  methods: {
    addOrder (item, key) {
      this.$store.state.order = {
        desk: 5,
        name: item.name,
        amount: 1,
        price: item.price,
        status: 'NEW',
        time: new Date().toString()
      }

      this.$store.commit('addOrder', key)
    }
  },
  mounted () {
  }
}
</script>

<style>
.image-item {
    position:relative;
}

.text {
    left: 0;
    position:absolute;
    font-weight: bold;
    text-align:center;
    color: white;
    top: 35px;
    width: 100%;
}

.text-background {
  opacity: 0.6;
  position: absolute;
  top: 35px;
  left: 5%;
  width: 90%;
  height: 22px;
  background: black;
}

.notify-container {
  position: relative;
	display: inline-block;
}

.notify-bubble {
  position: absolute;
  top: -8px;
  right: -7px;
  padding: 2px 5px 2px 6px;
  background-color: #C88E51;
  color: white;
  font-size: 0.65em;
  border-radius: 50%;
  box-shadow: 1px 1px 1px gray;
}
</style>
