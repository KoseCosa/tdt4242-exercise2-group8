const express = require('express')
const bodyParser = require('body-parser')
const User = require('../../db/models/user.js')

const router = express.Router();

router.use(bodyParser.json());

router.get('/', function(req,res){
  // TODO: Implement Search if needed
  User.find(function(err, Users){
    if (err){
      // TODO: Implement proper error respons
      res.send(err);
    }
    else{
      // TODO: Implement proper success respons
      res.json(Users)
    }
  })
});

router.get('/:username', function(req,res){
  User.findOne({'username':req.params.username}, function(err, User){
    if (err){
      // TODO: Implement proper error respons
      res.send(err)
    }
    else{
      // TODO: Implement proper success respons
      res.json(User)
    }
  });
});

router.post('/', function(req,res){
  // TODO: Implement User Authentication
  let user = new User();
  user.username = req.body.username;
  user.password = req.body.password;
  user.save(function(err){
    if (err) {
      // TODO: Implement proper error respons
      res.send(err);
    }
    else{
      // TODO: Implement proper success respons
      res.send('User created')
    }
  })
});

router.put('/:username', function(req,res){
  // TODO: Implement User Authentication
  User.findOne({'username':req.params.username}, function(err, user){
    if (err){
      // TODO: Implement proper error respons
      res.send(err);
    }
    else{
      user.username = req.body.username || user.username;
      user.password = req.body.password || user.password;
      user.save(function(err){
        if (err){
          // TODO: Implement proper error respons
          res.send(err);
        }
        else{
          // TODO: Implement proper success respons
          res.send('User updated!')
        };
      });
    };
  });
});

router.delete('/:username', function(req,res){
  // TODO: Implement User Authentication
  User.remove({username: req.params.username}, function(err, User){
    if (err){
      // TODO: Implement proper error respons
      res.send(err)
    }
    else{
      // TODO: Implement proper success respons
      res.send('User Deleted!')
    }
  });
});

module.exports = router
