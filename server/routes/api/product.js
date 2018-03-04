const express = require('express')
const bodyParser = require('body-parser')
const Product = require('../../db/models/product')
const auth = require('../../auth/auth')

const router = express.Router();

router.use(bodyParser.json());

router.get('/', function(req,res){
  // TODO: Implement Search if needed
  Product.find(function(err, products){
    if (err){
      // TODO: Implement proper error respons
      res.send(err);
    }
    else{
      // TODO: Implement proper success respons
      res.json(products)
    }
  })
});

router.get('/:id', function(req,res){
  Product.findById(req.params.id, function(err, product){
    if (err){
      // TODO: Implement proper error respons
      res.send(err)
    }
    // TODO: Implement proper success respons
    res.json(product)
  });
});

router.post('/',auth.authenticate,auth.authorize, function(req,res){

  let product = new Product();
  product.save(function(err){
    if (err) {
      // TODO: Implement proper error respons
      res.send(err);
    }
    else{
      // TODO: Implement proper success respons
      res.send('Product created')
    }

  })
});

router.put('/:id', auth.authenticate,auth.authorize, function(req,res){
  Product.findById(req.params.id, function(err, product){
    if (err){
      // TODO: Implement proper error respons
      res.send(err);
    }
    else {
      product.name = req.body.name || product.name;
      product.price = req.body.price || product.price;
      product.category = req.body.category || product.category;
      product.stock = req.body.stock || product.stock;
      product.salePercentage = req.body.salePercentage || product.salePercentage;
      product.getBy = req.body.getBy || product.getBy;
      product.payFor = req.body.payFor || product.payFor;
      product.save(function(err){
        if (err){
          // TODO: Implement proper error respons
          res.send(err);
        }
        else{
          // TODO: Implement proper success respons
          res.send('Product updated!')
        }
      });
    }
  });
});

router.delete('/:id', auth.authenticate,auth.authorize, function(req,res){
  Product.remove({_id: req.params.id}, function(err, product){
    if (err){
      // TODO: Implement proper error respons
      res.send(err)
    }
    else{
      // TODO: Implement proper success respons
      res.send('Product Deleted!')
    }
  });
});

module.exports = router
