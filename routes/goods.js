const Router = require('koa-router')
const goodsModel = require('../model/goods');

const router = new Router({
  prefix: '/v1',
});

router.get('/goods/list', async (ctx) => {
  const { type, page, num } = ctx.request.query;
  const list = await goodsModel.getGoodsList({ type, page, num });
  ctx.body = list;
})

router.post('/goods/update', async (ctx) => {
  const res = await goodsModel.updateOne(ctx.request.body);
  ctx.body = res;
})

router.post('/goods/delete', async (ctx) => {
  const res = await goodsModel.delete(ctx.request.body);
  ctx.body = res;
})

router.post('/goods/detail', async (ctx) => {
  const { page, num } = ctx.request.query;
  ctx.body = 'good详情';
})

module.exports = router;
