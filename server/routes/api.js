const express = require('express');

const router = express.Router();
const productRouter = require('./api/product');
const userRouter = require('./api/user');
const authRouter = require('./api/auth')

router.use('/product',productRouter);
router.use('/user',userRouter);
router.use('/auth',authRouter);

router.get('/', function(req,res){
  res.send('This is the API root');
});

module.exports = router
