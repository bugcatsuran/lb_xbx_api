const Koa = require('koa');
const Router = require('koa-router');
const indexRouter = require('./routes/index');
const { name, version } = require('./package.json');





const app = new Koa();
const router = new Router();




router.get('/version', (ctx) => {
  ctx.body = `${name}: ${version}`;
});

app.use(router.routes()).use(router.allowedMethods());
app.use(indexRouter.routes());

app.listen(3000);
