import Vue from 'vue'
import App from './App'
import router from './router'
import css from './assets/styleshets/home.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  css,
  render: h => h(App)
})
