const Router = require('koa-router');
const router = new Router({
  prefix: '/v1',
});

router.get('/goods/list', async (ctx) =>{
  const { page,num } = ctx.request.query;
  ctx.body = '获取goods';
})

router.post('/goods/add', async (ctx) =>{
  const { page,num } = ctx.request.query;
  ctx.body = '添加good';
})

router.post('/goods/update', async (ctx) =>{
  const { page,num } = ctx.request.query;
  ctx.body = '更新good';
})

router.post('/goods/delete', async (ctx) =>{
  const { page,num } = ctx.request.query;
  ctx.body = '删除good';
})

router.post('/goods/detail', async (ctx) =>{
  const { page,num } = ctx.request.query;
  ctx.body = 'good详情';
})

module.exports = router;
