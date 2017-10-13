<template>
  <div>
    <nav class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <i class="fa fa-chevron-left" aria-hidden="true"></i>
        </a>
        <a class="navbar-item" @click="router.back()">
          <strong>หมายเลขโต๊ะ {{ desk }}</strong>
        </a>
      </div>
    </nav>
    <hr class="line">
    <strong>ทั้งหมด {{ amount }} รายการ</strong>
    <hr class="line">
    <div class="container is-fluid" style="margin-bottom: 2px" v-for="(item, index) in order" :key="index">
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
                  <strong><small>{{ item.name }}</small></strong>
                  <br>
                  ราคา {{ item.price }} ฿
                </p>
              </div>
              <div class="column is-1">
                <small>X</small>
              </div>
              <div class="column"><strong><small>{{ item.amount }}</small></strong></div>
              <div class="column is-2"><strong><small>{{ item.price * item.amount }} ฿</small></strong></div>
            </div>
          </div>
        </div>
      </article>
    </div>

    <div class="columns total">
      <hr class="line">
      <div class="column is-offset-8">
        <strong>รวมเป็นเงิน {{ total }} ฿</strong>
      </div>
      <button class="button is-success is-outlined is-large order-button" @click="sendOrder">
        <span class="icon is-small order-icon">
          <i class="fa fa-lg fa-shopping-cart"></i>
        </span>
        ยืนยัน
      </button>
    </div>
  </div>
</template>

<script>
import db from '../../firebase.conf'

export default {
  props: [],
  name: 'cart',
  firebase: {
    nomkafe: db.child('123456789')
  },
  components: {},
  data () {
    return {
      menuIsActive: false,
      order: this.$store.state.orderList,
      total: this.$store.state.total,
      amount: this.$store.state.amount,
      desk: sessionStorage.getItem('desk')
    }
  },
  methods: {
    toggleMenu () {
      this.menuIsActive = !this.menuIsActive
    },
    sendOrder () {
      const order = {
        item: this.order,
        desk: this.desk,
        price: this.total,
        time: new Date().toString()
      }

      if (this.$store.state.orderKey) {
        this.$firebaseRefs.nomkafe.child('orders').child(this.$store.state.orderKey).update(order, (error) => {
          if (error) {
            console.error('ERROR: ', error)
          } else {
            console.info('Update success')
          }
        })
      } else {
        this.$store.state.orderKey = this.$firebaseRefs.nomkafe.child('orders').push(order).key
      }
      this.$router.back()
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
