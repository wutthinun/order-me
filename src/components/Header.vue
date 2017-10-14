<template>
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
</template>

<script>
export default {
  name: 'header-bar',
  data () {
    return {
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
  computed: {
    getAmount () {
      return this.$store.getters.amount
    }
  }
}
</script>

<style>

</style>
