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
        <a class="navbar-item" href="#" target="_blank">
          <span class="icon">
            <i class="fa fa-lg fa-shopping-cart fa-flip-horizontal"></i>
          </span>
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
    <button class="button is-info is-outlined is-large order-button">
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
      menuIsActive: false
    }
  },
  methods: {
    toggleMenu () {
      this.menuIsActive = !this.menuIsActive
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

section {
  padding: 0 0 0 0.3em!important;
}

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
