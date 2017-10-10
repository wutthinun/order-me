<template>
  <div class="container is-fluid">
    <div class="columns is-gapless is-mobile">
      <div class="column">
        <div class="image-item">
            <img class="is-96x96" src="../../assets/images-menu/1.jpg"/>
            <div class="text-background"></div>
            <div class="text">
              บิงซูสตอเบอรี่
            </div>
        </div>
      </div>
      <div class="column">
        <div class="image-item">
            <img src="../../assets/images-menu/2.jpg"/>
            <div class="text-background"></div>
            <div class="text">
              นมน้ำผึ้ง
            </div>
        </div>
      </div>
      <div class="column">
        <div class="image-item">
            <img src="../../assets/images-menu/3.jpg"/>
            <div class="text-background"></div>
            <div class="text">
              บิงซูบลูเบอรี่
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [],
  name: 'items',
  components: {},
  data () {
    return {
      msg: 'Items'
    }
  },
  methods: {},
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
</style>
