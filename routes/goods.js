const Router = require('koa-router')
const goodsModel = require('../model/goods');

const router = new Router({
  prefix: '/v1',
});

router.get('/goods/list', async (ctx) =>{
  const { page,num } = ctx.request.query;
  const list = await goodsModel.getGoodsList({ num, page });
  ctx.body = list;
})

router.post('/goods/add', async (ctx) =>{
  console.log(ctx.request.body,666)
  return
  const res = await goodsModel.addGoods(ctx.request.body);
  ctx.body = res;
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
