<template>
  <div class="container is-fluid">
    <div class="columns is-gapless is-mobile" >
      <div class="column is-4" v-for="item in items" :key="item.id" @click="addToCart(item)">
        <div class="notify-container cursor-hand">
          <span class="notify-bubble">0</span>
          <img class="is-96x96" src="../../assets/images-menu/2.jpg"/>
          <div class="text-background"></div>
          <div class="text">
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  props: [],
  name: 'items',
  components: {},
  computed: mapGetters({
    items: 'items'
  }),
  methods: mapActions([
    'addToCart'
  ]),
  created () {
  }
}
</script>

<style>
.cursor-hand {
  cursor: pointer;
}
.text {
  left: 0;
  position: absolute;
  text-align: center;
  color: white;
  top: calc(50% - 25px/2);
  line-height: 25px;
  width: calc(100% - 28px);
  margin: 0 14px;
  background: rgba(0, 0, 0, 0.5);
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
