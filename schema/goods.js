const mongoose = require('mongoose')
const { Schema } = mongoose
module.exports = {
  title: {type: String ,required: true},
  img: {type: String },
  price: Schema.Types.Decimal128,
  stock: {type: Number},
  type: {type: Number}
};