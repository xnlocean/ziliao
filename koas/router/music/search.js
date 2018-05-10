const router = require('koa-router')()
const { createWebAPIRequest } = require("../../utils/util");
const utile = require('../../utils/response')

router.get("/", (ctx, next) => {
  return new Promise(function(resolve, reject) {
    const cookie = ctx.request.get("Cookie") ? ctx.get("Cookie") : "";
    const keywords = ctx.request.query.keywords;
    const type = ctx.request.query.type || 1;
    const limit = ctx.request.query.limit || 30;
    const offset = ctx.request.query.offset || 0;
    // *(type)* 搜索单曲(1)，歌手(100)，专辑(10)，歌单(1000)，用户(1002)
    const data = {
      csrf_token: "",
      limit,
      type,
      s: keywords,
      offset
    };
    
    createWebAPIRequest(
      "music.163.com",
      "/weapi/search/get",
      "POST",
      data,
      cookie,
      music_req => {
        ctx.body = music_req
        resolve(next())
      },
      err => {
        ctx.body = music_req
        resolve(next())
      }
    );
  })
});

module.exports = router