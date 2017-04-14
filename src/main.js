import Vue from 'vue'
import App from './App'
import store from './store/'
import 'foundation-sites/dist/css/foundation.css'
import 'foundation-sites/dist/js/foundation.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
