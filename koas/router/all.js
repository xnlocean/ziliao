/**
 * 整合所有子路由
 */

const router = require('koa-router')()
//文章
const article = require('./article')

//网易云搜索
const musicSearch = require('./music/search')

router.use('/article',  article.routes(), article.allowedMethods())

//搜索
router.use('/search', musicSearch.routes(), musicSearch.allowedMethods())

module.exports = router