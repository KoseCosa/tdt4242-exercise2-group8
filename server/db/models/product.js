mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  amount: Number
});

module.exports = mongoose.model('Product', ProductSchema);
