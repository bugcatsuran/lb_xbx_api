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



  async getGoodsList({ type = 0, page = 1, num = 10 }) {

    let result = {}

    let filter = {};

    if (Number(type)) { filter.type = Number(type) };

    const data = await this.model.find(filter)
      .sort({ type: 1 })
      .skip((page - 1) * num)
      .limit(Number(num))

    const total = await this.model.count(filter);

    result.data = data.map((item) => {
      let ele = {
        _id: item._id,
        title: item.title,
        img: item.img,
        type: item.type,
        discountPrice: item.discountPrice ? item.discountPrice.toJSON()['$numberDecimal'] : null,
        price: item.price ? item.price.toJSON()['$numberDecimal'] : null,
        stock: item.stock
      }
      return ele
    })

    result.total = total;

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
        { _id: param._id },
        param,
        { new: true },
      )
      result.data = 'update success'
      result.code = 200
      return result
    }

    else {
      const res = await this.model.create({
        ...param
      })
      result.data = 'add success'
      result.code = 200
      return result
    }

  }



  async delete(param) {
    let result = {}
    result.data = 'delete success'
    result.code = 200
  }


}


module.exports = new Goods(goodsModel);
