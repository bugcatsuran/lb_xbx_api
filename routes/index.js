const { name, version } = require('../package.json');
const Router = require('koa-router');
const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = '欢迎来到小正太的世界~';
})

router.get('/version', (ctx) => {
  ctx.body = `${name}: ${version}`;
});


module.exports = router; 