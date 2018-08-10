const mongoose = require('mongoose')
const { Schema } = mongoose
const goodsScheme = require('../schema/goods')


const goodsModel = mongoose.model('goods', goodsScheme, 'goods');


class Goods {
  constructor(model) {
    this.model = model;
  }
}

module.exports = new Goods(goodsModel);
