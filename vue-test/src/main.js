import Vue from 'vue'
import { Input } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import './permission'

// Vue.use(Element, {
//   size: 'medium'
// })

// 按需加载
Vue.use(Input)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
