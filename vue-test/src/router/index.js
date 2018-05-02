import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载
// const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(VueRouter)

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

export default new VueRouter({
  routes
})
