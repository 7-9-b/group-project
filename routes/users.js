const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = mongoose.model('User');

// SIGNUP
router.post('/signup', ((req, res) => {
  let newUser = new User();
  newUser.email = req.body.userEmail;
  newUser.setPassword(req.body.userPassword);
  newUser.save((err, userInfo) => {
    if(err) {
      res.sendStatus(500)
    } else {
      res.json({token: newUser.generateJWT()})
    }
  })
}))

// LOGIN
router.post('/login', ((req, res) => {
  User.findOne({email: req.body.userEmail}, ((err, user) => {
    if(err) {
      res.send(err)
    } else if(!user) {
      res.json('account does not exist')
    } else {
      if(user.validatePassword(req.body.userPassword)) {
        res.json({token: user.generateJWT()})
      } else {
        res.json('incorrect password')
      }
    }
  }))
}))

module.exports = router;