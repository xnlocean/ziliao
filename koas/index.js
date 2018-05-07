'use strict'

const monk = require('monk')
const fs = require('fs')
const path = require('path')
const url = 'user:123456@localhost:27017/test'
const db = monk(url)
const Router = require('koa-router')
const convert = require('koa-convert')
const koaBody = require('koa-body')
const router = new Router()
const Koa = require('koa')
const app = new Koa()

const collection = db.get('artice')
// app.use( async ctx => {
    //     const test = await collection.count()
    //     db.close()
    //     ctx.body = test
    // })
app.use(koaBody({multipart: true}))

//新增
router.post("/add",async(ctx,next) =>{
    await collection.insert([{name:ctx.request.body.name,article:ctx.request.body.article}])
    db.close()
    ctx.redirect('back')
})

//删除
router.post("/remove",async(ctx,next) =>{
    console.log(ctx.request.body._id)
    await collection.remove({"_id":ctx.request.body._id})
    ctx.response.body = "成功"
    db.close()
})

//查询
router.get("/search" ,async(ctx,next) =>{
    const test = await collection.count()
    await collection.find({}).then((doc) =>{
        ctx.response.body = doc
    })
    db.close()
})

app.use(require('koa-static')(__dirname + '/public'));
app.use(router.routes())
app.use(router.allowedMethods());

app.listen(3000)
console.log('app starting at port 3000')