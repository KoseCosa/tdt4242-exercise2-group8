const express = require('express')
const bodyParser = require('body-parser')
const Product = require('../../db/models/product')
const auth = require('../../auth/auth')

const router = express.Router();

router.use(bodyParser.json());

router.get('/', function(req,res){
  Product.find(function(err, products){
    if (err){
      res.json({success: false, msg: err});
    }
    else{
      res.json({success: true, msg: 'Products Found', products: products});
    }
  })
});

router.get('/:id', function(req,res){
  Product.findById(req.params.id, function(err, product){
    if (err){
      res.json({success: false, msg: err});
    }
    else{
      res.json({success: true, msg: 'Product Found', product: product});
    }
  });
});

router.post('/',auth.authenticate,auth.authorize, function(req,res){
  let product = new Product();
  product.name = req.body.name || product.name;
  product.price = req.body.price || product.price;
  product.category = req.body.category || product.category;
  product.stock = req.body.stock || product.stock;
  product.salePercentage = req.body.salePercentage || product.salePercentage;
  product.getBy = req.body.getBy || product.getBy;
  product.getBy = req.body.payFor || product.payFor;
  product.save(function(err){
    if (err) {
      res.json({success: false, msg: err});
    }
    else{
      res.json({success: true, msg: 'Product Created'});
    }

  })
});

router.put('/:id', auth.authenticate,auth.authorize, function(req,res){
  console.log("put detected");
  Product.findById(req.params.id, function(err, product){
    if (err){
      res.json({success: false, msg: err});
    }
    else {
        product.name = req.body.name || product.name;
        product.price = req.body.price || product.price;
        product.category = req.body.category || product.category;
        product.stock = req.body.stock || product.stock;
        product.salePercentage = req.body.salePercentage || product.salePercentage;
        product.getBy = req.body.getBy || product.getBy;
        product.getBy = req.body.payFor || product.payFor;
        product.save(function(err){
        if (err){
          res.json({success: false, msg: err});
        }
        else{
          res.json({success: true, msg: 'Product updated'});
        }
      });
    }
  });
});

router.delete('/:id', auth.authenticate,auth.authorize, function(req,res){
  Product.remove({_id: req.params.id}, function(err, product){
    if (err){
      res.json({success: false, msg: err});
    }
    else{
      res.json({success: true, msg: 'Product Deleted'});
    }
  });
});

module.exports = router
