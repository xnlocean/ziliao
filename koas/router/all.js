/**
 * 整合所有子路由
 */

const router = require('koa-router')()

//文章
const article = require('./article')

router.use('/article',  article.routes(), article.allowedMethods())

module.exports = router