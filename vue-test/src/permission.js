import router from './router'
router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next({ path: '/login' })
  } else {
    next()
  }
})

router.afterEach(() => {
})
