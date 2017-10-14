<template>
  <div>
    <header-bar />
    <hr class="line">
    <items />
    <button class="button is-info is-outlined is-large order-button" @click="goToCart">
      <span class="icon is-small order-icon">
         <i class="fa fa-lg fa-shopping-cart"></i>
      </span>
      สั่งเลย
    </button>
  </div>
</template>

<script>
import HeaderBar from '@/components/Header'
import Menus from '@/components/menus/Menus'
import Items from '@/components/items/Items'
export default {
  props: [],
  name: 'prototype',
  components: {
    'header-bar': HeaderBar,
    'menus': Menus,
    'items': Items
  },
  data () {
    return {
      msg: 'Prototype'
    }
  },
  methods: {
    goToCart () {
      this.$router.push({path: 'cart'})
    }
  },
  mounted () {
  }
}
</script>

<style>
strong {
    font-weight: 900;
}

/* section {
  padding: 0 0 0 0.3em!important;
} */

.line {
  margin: .2rem .2rem .2rem .2rem;
}

.order-button {
  right:    0;
  bottom:   0;
    margin: 0 2vw;
    width: calc(100% - 4vw);
    bottom: 2vw;
    position: fixed;
}

.order-icon {
  margin-right: 0.1em!important;
}

</style>
