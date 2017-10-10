<template>
    <div :class="{modal: isModal, 'is-active': isActive}">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Confirm Order {{ isActive }}</p>
          <button class="delete" aria-label="close" @click="closeModal"></button>
        </header>
        <section class="modal-card-body">
          <div class="field is-horizontal">
            <div class="field-label is-large">Desk: </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input class="input is-danger is-large" type="text" v-model="desk">
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot" style="text-align: center">
          <button class="button is-success" @click="sendOrder" :disabled="desk == null || desk == 0" >Confirm</button>
          <button class="button" @click="closeModal">Cancel</button>
        </footer>
      </div>
    </div>
</template>
<script>
export default {
  props: ['orders', 'isActive'],
  data () {
    return {
      desk: null,
      isModal: true
    }
  },
  methods: {
    sendOrder () {
      this.$emit('sendOrder', this.desk)
      this.closeModal()
      this.desk = null
    },
    closeModal () {
      this.$emit('closeModal')
    }
  },
  watch: {
    isActive () { }
  }
}
</script>
<style scoped>

</style>

