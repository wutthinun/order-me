<template>
  <div>
    <section class="hero is-medium">
      <div class="hero-body" style=" padding: 1rem;">
        <div class="container">
          <div class="columns is-mobile">
            <div class="column is-2">
              <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
            </div>
            <div class="column">
              <span style="color: #2544E3;"><strong>ORDER</strong>ME</span>
            </div>
            <div class="column is-2" @click="goToCart">
              <div class="notify-container">
                <span class="notify-bubble" v-if="getAmount != 0">{{ getAmount }}</span>
                <span class="icon">
                  <i class="fa fa-lg fa-shopping-cart fa-flip-horizontal"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="line">
    <menus/>
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
import Menus from '@/components/menus/Menus'
import Items from '@/components/items/Items'
export default {
  props: [],
  name: 'prototype',
  components: {
    'menus': Menus,
    'items': Items
  },
  data () {
    return {
      msg: 'Prototype',
      menuIsActive: false,
      amount: this.$store.getters.amount
    }
  },
  methods: {
    toggleMenu () {
      this.menuIsActive = !this.menuIsActive
    },
    goToCart () {
      this.$router.push({path: 'cart'})
    }
  },
  mounted () {
  },
  computed: {
    getAmount () {
      return this.$store.getters.amount
    }
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
