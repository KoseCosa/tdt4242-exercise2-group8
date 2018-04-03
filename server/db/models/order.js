mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  products: [{
    _id: false,
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    amount: { type: Number, default: 1 },
  }],
  status: { type: String, default: "Processing" }
});

module.exports = mongoose.model('Order', OrderSchema);
