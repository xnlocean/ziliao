import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载
const _import = require('./_import_' + process.env.NODE_ENV)
Vue.use(VueRouter)

const routes = [
  { path: '/login', components: _import('login/index') }
]

export default new VueRouter({
  routes
})
