const db = require('../dbhelper/userHelper')
const utile = require('../../utils/response')
const collection = db.get('artice')
class articleControllers {
    static async add(ctx,next){
        try {
            let res = await collection.insert([{name:ctx.request.body.name,article:ctx.request.body.article}])
            ctx.response.body = utile.success('新增成功')
            // ctx.redirect('back')
        } catch (error) {
            ctx.response.body = utile.error(error)
        }
    }
    static async search(ctx,next){
        try {
            const test = await collection.count()
            let res =  await collection.find({})
            ctx.response.body = utile.success(res)
        } catch (error) {
            ctx.response.body = utile.error(error)
        }
    }
    static async remove(ctx,next){
        try {
            console.log(ctx.request.body._id)
            await collection.remove({"_id":ctx.request.body._id})
            ctx.response.body = utile.success('删除成功')
        } catch (error) {
            ctx.response.body = utile.error(error)
        }
    }
}

module.exports = articleControllers