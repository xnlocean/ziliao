import Vue from 'vue'
import App from './App'
import router from './router'
import './permission'

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
