const mongoose = require('mongoose')
const { Schema } = mongoose
const goodsScheme = require('../schema/goods')


const goodsModel = mongoose.model('goods', goodsScheme, 'goods');


class Goods {
  constructor(model) {
    this.model = model;
  }

  async getGoodsList({ page = 1, num = 10 }) {
    const pageIndex = Number(page);
    const pageNum = Number(num);
    let result = {};
    if (pageIndex === 1) {
      result = await this.model.aggregate().sample(pageNum);
    } else {
      result = await this.model.find()
        .sort({ _id: -1 })
        .skip((pageIndex - 1) * pageNum)
        .limit(pageNum);
    }
    return result;
  }
}

module.exports = new Goods(goodsModel);
