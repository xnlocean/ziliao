const router = require('koa-router')()

//新增
router.post("/add", require("../app/controllers/app").add)
//删除
router.post("/remove", require("../app/controllers/app").remove)
//查询
router.get("/search" , require("../app/controllers/app").search)

module.exports = router