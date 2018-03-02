mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  stock: Number,
  salePercentage: Number
  // Add Package Deal Object
});

module.exports = mongoose.model('Product', ProductSchema);
