<template>
  <div>
    <nav class="navbar">
      <div class="navbar-brand">
         <a class="navbar-item" href="#">
        </a>
        <a class="navbar-item" href="#">
          <span class="icon" style="color: #2544E3;">
            <strong>ORDER</strong>ME</span>
        </a>
        <a class="navbar-item" @click="goToCart" target="_blank">
          <div class="notify-container">
            <span class="notify-bubble" v-if="getAmount != 0">{{ getAmount }}</span>
            <span class="icon">
                  <i class="fa fa-lg fa-shopping-cart fa-flip-horizontal"></i>
                </span>
          </div>
        </a>
        <div style="color: #2544E3;" :class="['navbar-burger', 'burger', { 'is-active' : menuIsActive } ]" v-on:click="toggleMenu()" data-target="navMenuDocumentation">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenuDocumentation" :class="['navbar-menu', { 'is-active' : menuIsActive}]">
        <div class="navbar-start">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link  is-active" href="#">
              About Me
            </a>
          </div>
        </div>
        <div class="navbar-end">
        </div>
      </div>
    </nav>
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

section {
  padding: 0 0 0 0.3em!important;
}

.line {
  margin: .2rem .2rem .2rem .2rem;
}

.order-button {
  display: block;
  flex-wrap: wrap;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 8px;
  position: absolute;
  right:    0;
  bottom:   0;
}

.order-icon {
  margin-right: 0.1em!important;
}
</style>
