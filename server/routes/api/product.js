const express = require('express');

const router = express.Router();

router.get('/', function(req,res){
  res.send('This should return all products');
});

router.get('/:id', function(req,res){
  res.send('This should return the produt with id: '+req.params.id);
});

router.post('/', function(req,res){
  res.send('This should create a new product');
});

router.put('/:id', function(req,res){
  res.send('This should return the produt with id: '+req.params.id);
});

router.delete()

module.exports = router
