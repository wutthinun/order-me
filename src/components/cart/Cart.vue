<template>
  <div>
    <nav class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item" @click="goBack">
          <i class="fa fa-chevron-left" aria-hidden="true"></i>
        </a>
        <a class="navbar-item">
          <strong>หมายเลขโต๊ะ {{ desk }}</strong>
        </a>
      </div>
    </nav>
    <hr class="line">
    <strong>ทั้งหมด {{ amount }} รายการ</strong>
    <hr class="line">
    <div class="container is-fluid" style="margin-bottom: 2px" v-for="(item, index) in [...orders, ...ordered]" :key="index">
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
        <strong>รวมเป็นเงิน {{ totalPrice }} ฿</strong>
      </div>
      <button class="button is-success is-outlined is-large order-button" :disabled="orders.length == 0" @click="sendOrder">
        <span class="icon is-small order-icon">
          <i class="fa fa-lg fa-shopping-cart"></i>
        </span>
        ยืนยัน
      </button>
    </div>
    <div :class="['modal', {'is-active': isSuccess}]">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="container icon is-9x">
          <span class="icon has-text-success">
            <i class="fa fa-9x fa-check-circle" aria-hidden="true"></i>
          </span>
        </div>
        <p class="p-send-order">ส่งรายการอาหารแล้ว</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: [],
  name: 'cart',
  components: {},
  computed: mapGetters({
    orders: 'orders',
    totalPrice: 'totalPrice',
    ordered: 'ordered',
    orderKey: 'orderKey',
    getUnpaidOrder: 'getUnpaidOrder'
  }),
  data () {
    return {
      isSuccess: false,
      menuIsActive: false,
      amount: this.$store.state.amount,
      desk: localStorage.getItem('desk')
    }
  },
  methods: {
    ...mapActions({
      saveOrders: 'saveOrder',
      setOrderKey: 'setOrderKey',
      getOrdered: 'getOrdered'
    }),
    toggleMenu () {
      this.menuIsActive = !this.menuIsActive
    },
    goBack() {
      this.$router.back()
    },
    sendOrder () {
      const order = {
        items: [
          ...this.orders.map(item => {
            item.status = 'NEW'
            return item
          })
        ],
        desk: this.desk,
        price: this.totalPrice,
        time: new Date().toString(),
        status: 'UNPAID'
      }

      this.saveOrders({ order, orderKey: this.orderKey })
      this.isSuccess = true
      setTimeout(() => {
        this.$router.back()
      }, 1500)
    }
  },
  mounted () {
    let [ orderKey ] = this.getUnpaidOrder.filter(o => o.desk === localStorage.getItem('desk') && o.status === 'UNPAID')
    if (orderKey) {
      this.setOrderKey({ key: orderKey.key })
      this.getOrdered(orderKey.key)
    }
  }
}
</script>

<style>
.p-send-order {
  color: white;
  font-size: 2em;
}
.is-9x {
  height: 9rem;
}
.fa-9x {
  font-size: 9em;
}
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
