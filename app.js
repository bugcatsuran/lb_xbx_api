const Koa = require('koa')
const Router = require('koa-router')
const goodsRouter = require('./routes/goods')
const indexRouter = require('./routes/index')
const config = require('config')
const bodyparser = require('koa-bodyparser')
const serverPort = config.get('server.port')


require('./model/base')


const app = new Koa()
const router = new Router()


app.use(bodyparser({enableTypes: ['json', 'form', 'text']}))
app.use(indexRouter.routes())
app.use(goodsRouter.routes())
app.use(router.allowedMethods())


app.listen(serverPort)
