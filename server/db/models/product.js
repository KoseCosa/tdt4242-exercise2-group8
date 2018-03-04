mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  name: String;
  price: Number;
  category: String;
  stock: Number;
  salePercentage: { type: Number, min: 0, max: 100 };
  packageDeal: {
    get: Number;
    pay: Number;
  };
});

module.exports = mongoose.model('Product', ProductSchema);
