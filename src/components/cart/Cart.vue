<template>
  <div>
    <nav class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <i class="fa fa-chevron-left" aria-hidden="true"></i>
        </a>
        <a class="navbar-item" href="#">
          <strong>หมายเลขโต๊ะ 25</strong>
        </a>
      </div>
    </nav>
    <hr class="line">
    <strong>ทั้งหมด 8 รายการ</strong>
    <hr class="line">
    <div class="container is-fluid">
      <article class="media">
        <figure class="media-left">
          <p class="image is-64x64">
            <img src="../../assets/images-menu/1.jpg">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <div class="columns is-mobile is-gapless">
              <div class="column is-half">
                <p>
                  <strong><small>บิงซูสตอเบอรี่</small></strong>
                  <br>
                  ราคา 180฿
                </p>
              </div>
              <div class="column is-1">
                <small>X</small>
              </div>
              <div class="column"><strong><small>1</small></strong></div>
              <div class="column is-2"><strong><small>180฿</small></strong></div>
            </div>
          </div>
        </div>
      </article>
    </div>

    <div class="columns total">
      <hr class="line">
      <div class="column is-offset-8">
        <strong>รวมเป็นเงิน 180฿</strong>
      </div>
      <button class="button is-success is-outlined is-large order-button">
      <span class="icon is-small order-icon">
         <i class="fa fa-lg fa-shopping-cart"></i>
      </span>
      ยืนยัน
    </button>
    </div>
  </div>
</template>

<script>
export default {
  props: [],
  name: 'cart',
  components: {},
  data () {
    return {
      msg: 'Cart',
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
  display: block;
  flex-wrap: wrap;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 8px;
  right:    0;
  bottom:   0;
}

.total {
  display: block;
  flex-wrap: wrap;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 8px;
  position: absolute;
  text-align: right;
  bottom:   0;
}

.order-icon {
  margin-right: 0.1em!important;
}
</style>
