// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import db from './firebase.conf'
import store from './stores'
import _ from 'lodash'

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
    nomkafe: db.child(localStorage.getItem('shop_id') || '123456789')
  },
  mounted () {
    this.$firebaseRefs.nomkafe.child('items').on('value', snapshot => {
      this.items = snapshot.val()
      this.$store.state.items = _.map(this.items, (item, key) => {
        item.id = key
        return item
      })
    })
  }
})

