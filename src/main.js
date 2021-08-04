import Vue from 'vue'
import App from '@/App'
import store from '@/store'
import router from '@/routes'
import babelPolyfill from 'babel-polyfill'

new Vue({
  el: '#app',
  store,
  router,
  babelPolyfill,
  render: h => h(App)
})