'use strict'

const monk = require('monk')
const fs = require('fs')
const path = require('path')
const url = 'admin:123456@localhost:27017/admin'
const db = monk(url)

const collection = db.get('test')
const Koa = require('koa')
const app = new Koa()
app.use( async ctx => {
    const test = await collection.count()
    db.close()
    ctx.body = test
})
app.listen(3000)
console.log('app starting at port 3000')