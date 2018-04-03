const express = require('express')
const bodyParser = require('body-parser')
const Order = require('../../db/models/order')
const User = require('../../db/models/user')
const Product = require('../../db/models/product')
const auth = require('../../auth/auth')

const router = express.Router();

router.use(bodyParser.json());

router.get('/', auth.authenticate, function(req,res){
  // TODO: Implement Search if needed
  if (req.user.admin) {
    Order.find().populate({path: 'user',select: 'username -_id'}).populate({path: 'products.product',select: 'name -_id'}).exec(function(err, orders){
      if (err){
        res.json({success: false, msg: err});
      }
      else{
        res.json({success: true, msg: 'Orders Found', orders: orders});
      }
    });
  }
  else {
    User.findById(req.user._id, function(err, user){
      Order.find({ user: req.user._id }).populate({path: 'user',select: 'username -_id'}).populate({path: 'products.product',select: 'name -_id'}).exec(function(err, orders){
        if (err){
          res.json({success: false, msg: err});
        }
        else{
          res.json({success: true, msg: 'Orders Found', orders: orders});
        }
      });
    })
  }
});

router.post('/',auth.authenticate, async function(req,res){
  let order = new Order();
  await User.findById(req.user.id, function(err, user){
    if (err){
      res.json({success: false, msg: "Error"});
    }
    else{
      order.user = user;
    }
  });
  for (let cartItem of req.body.products){
    await Product.findById(cartItem[0], function(err, product){
      console.log(product);
      if (err){
        res.json({success: false, msg: "Error"});
      }
      else{
        order.products.push({product: product, amount: cartItem[1]});
      }
    });
  }
  order.save(function(err){
    if (err) {
      res.json({success: false, msg: err});
    }
    else{
      res.json({success: true, msg: 'Order Created'});
    }
  });
});

router.put('/:id', auth.authenticate,auth.authorize, function(req,res){
  Order.findById(req.params.id, function(err, order){
    if (err){
      res.json({success: false, msg: err});
    }
    else {
        order.status = req.body.status || product.name;
        order.save(function(err){
        if (err){
          res.json({success: false, msg: "Error"});
        }
        else{
          res.json({success: true, msg: 'Order updated'});
        }
      });
    }
  });
});

module.exports = router
