// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import db from './firebase.conf'
import store from './stores'

Vue.config.productionTip = false
Vue.use(VueFire)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store,
  firebase: {
    nomkafe: db.child(sessionStorage.getItem('shop_id') || '123456789')
  },
  mounted () {
    console.log(this.$firebaseRefs.nomkafe)
    this.$firebaseRefs.nomkafe.child('items').on('value', snapshot => {
      this.items = snapshot.val()
      const metrix = 3
      let counter = 1
      let obj = {}
      for (let key in this.items) {
        if (counter <= metrix) {
          obj[key] = this.items[key]
          counter++
        } else {
          this.$store.state.items.push(obj)
          obj = {}

          counter = 1
          obj[key] = this.items[key]
          counter++
        }
      }
      this.$store.state.items.push(obj)
    })
  }
})

