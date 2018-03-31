mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
  products: [{
    product: mongoose.Schema.Types.ObjectId,
    stock: { type: Number, default: 1 },
  }]
});

module.exports = mongoose.model('Order', OrderSchema);
