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
import { mapActions } from 'vuex'

export default {
  props: [],
  name: 'menu-container',
  components: {
    'header-bar': HeaderBar,
    'menus': Menus,
    'items': Items
  },
  data () {
    return {}
  },
  methods: {
    ...mapActions([
      'getAllItems',
      'getUnpaidOrder'
    ]),
    goToCart () {
      this.$router.push({path: 'cart'})
    }
  },
  created () {
    this.getAllItems()
    this.getUnpaidOrder()
    // console.log('INIT ORDER')
    // this.$store.dispatch('initOrder')
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
