const express = require('express');

const router = express.Router();
const productRouter = require('./api/product.js');
const userRouter = require('./api/user.js');

router.use('/product',productRouter);
router.use('/user',userRouter);

router.get('/', function(req,res){
  res.send('This is the API root');
});

module.exports = router
