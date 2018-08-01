const express = require('express')
const router = express.Router()
const User = require('../models/users-model')
const passport = require('passport')

router.get('/signup', (req, res) => {
    res.sendStatus(200)
})

router.get('/login', (req, res) => {
    res.sendStatus(200)
})

router.post('/signup', passport.authenticate('signup', {
    successRedirect: '/login',
    failureRedirect: '/signup'    
    }))

router.post('/login', passport.authenticate('login', {
    successRedirect: '/',
    failureRedirect: '/login'
    }))

module.exports = router