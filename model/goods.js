const mongoose = require('mongoose')
const { Schema } = mongoose
const goodsScheme = require('../schema/goods')
const config = require('config')
const { goodsDb } = config.get('mongodb.dbCollection.goods');


 
const goodsModel = mongoose.model('goods', goodsScheme, 'goodsDb');


class Goods {
  constructor(model) {
    this.model = model;
  }

  async getGoodsList({ page = 1, num = 10 }) {
    const pageIndex = Number(page);
    const pageNum = Number(num);
    const result = await this.model.find()
    .sort({ _id: -1 })
    .skip((pageIndex - 1) * pageNum)
    .limit(pageNum)
    return result
  }

  async addGoods(param) {
    let result = ''
    if(!param.title) {
      result = 'goods title undefined'
      return
    }
    // console.log(param,6666666666666666)
    // db.goodsDb.insert(param)
    // result = 'add success'
  }
}

module.exports = new Goods(goodsModel);
