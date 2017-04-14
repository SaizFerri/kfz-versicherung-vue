import Vue from 'vue'
import App from './App'
import 'foundation-sites/dist/css/foundation.css'
import 'foundation-sites/dist/js/foundation.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
