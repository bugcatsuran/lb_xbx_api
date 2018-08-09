const Router = require('koa-router');
const router = new Router({
  prefix: '/v1',
});

router.get('/goods/list', async (ctx) =>{
  const { page,num } = ctx.request.query;
  ctx.body = '我是goods';
})

module.exports = router;
