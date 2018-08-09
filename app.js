const Koa = require('koa')
const Router = require('koa-router')
const goodsRouter = require('./routes/goods')
const indexRouter = require('./routes/index')
require('./model/base')




const app = new Koa()
const router = new Router()




app.use(indexRouter.routes())
app.use(goodsRouter.routes())
app.use(router.allowedMethods());



app.listen(8000)
