import Vue from 'vue'
import { Input, Form, FormItem, Button } from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import './permission'
import '@/styles/index'

// Vue.use(Element, {
//   size: 'medium'
// })

// 按需加载
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Button)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
