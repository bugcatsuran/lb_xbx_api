const mongoose = require('mongoose')
const { Schema } = mongoose
const goodsSchema = require('../schema/goods')
const config = require('config')
const { goodsDb } = config.get('mongodb.dbCollection.goods');

const goodsModel = mongoose.model('goods', goodsSchema, 'goodsDb');

class Goods {
  constructor(model) {
    this.model = model;
  }

  async getGoodsList({ page = 1, num = 10 }) {
    let result = {}
    const pageIndex = Number(page);
    const pageNum = Number(num);
    result.data = await this.model.find()
      .sort({ _id: -1 })
      .skip((pageIndex - 1) * pageNum)
      .limit(pageNum)
    return result
  }

  async updateOne(param) {
    let result = {}
    if (!param.title) {
      result.data = 'please input goods title'
      result.code = -100
      return result
    }
    if (param._id) {
      const res = await this.model.updateOne(
        { _id: id },
        param,
        { new: true },
      )
      result.data = 'add success'
      result.code = 200
    } else {
      const res = await this.model.create({
        ...param
      })
      result.data = 'add success'
      result.code = 200
    }
  }

  async delete(param) {
    let result = {}
    result.data = 'delete success'
    result.code = 200
  }
}

module.exports = new Goods(goodsModel);
