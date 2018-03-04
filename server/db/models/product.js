mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  name: { type: String, default: 'Unknown' },
  price: { type: Number, default: 1000},
  category: { type: String, default: "Unknown" },
  stock: { type: Number, default: 0 },
  salePercentage: { type: Number, min: 0, max: 100, default: 0 },
  getBy: { type: Number, min: 1, default: 1 },
  payFor: { type: Number, min: 1, default: 1 }
});

module.exports = mongoose.model('Product', ProductSchema);
