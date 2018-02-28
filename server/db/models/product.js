mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  name: String,
  price: Number, //Stored in øre not kroners
  amount: Number
});

module.exports = mongoose.model('Product', ProductSchema);
