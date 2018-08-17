const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')

const validateSignup = require('../validation/signup')
const validateLogin = require('../validation/login')

router.post('/signup', (req, res) => {
    const { errors, isValid } = validateSignup(req.body)

    // check validation
    if (!isValid) {
        return res.status(400).json(errors)
    }

    // check if email exists
    User.findOne({
        email: req.body.email
    }).then(user => {
        if(user) {
            return res.status(400).json({
                email: 'Email already exists'
            })
        }
        // create new user
        else {
            const newUser = new User({
                email: req.body.email,
                password: newUser.hashPassword(req.body.password)
            })

            // salt and hash password
            bcrypt.genSalt(10, (err, salt) => {
                if (err)
                    console.error('Error in generating salt', err)
                else {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err)
                            console.error('Error in hashing', err)
                        else {
                            newUser.password = hash
                            newUser
                                .save()
                                .then(user => {
                                    res.json(user)
                                })
                        }
                    })
                }
            })
        }
    })

})

router.post('/login', (req, res) => {
    const { errors, isValid } = validateLogin(req.body)

    // check validation
    if(!isValid) {
        return res.status(400).json(errors)
    }

    const email = req.body.email
    const password = req.body.password

    // check if email exists
    User.findOne({email})
        .then(user => {
            if(!user) {
                errors.email = 'User not found'
                return res.status(404).json(errors)
            }
        
        bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = {
                            id: user.id,
                            email: user.email
                        }
                        
                        // generate jwt token if success
                        jwt.sign(payload, 'secret', {
                            expiresIn: 3600
                        }, (err, token) => {
                            if (err)
                                console.error('Error in token', err)
                            else {
                                res.json({
                                    success: true,
                                    token: `Bearer ${token}`
                                })
                            }
                        })
                    } else {
                        errors.password = 'Incorrect Password'
                        return res.status(400).json(errors)
                    }
                })
        })
})

router.get('/', passport.authenticate('jwt', { session: false}), (req, res) => {
    return res.json({
        id: req.user.id,
        email: req.user.email
    })
})

// router.post('/signup', ((req, res, next) => {
//     let newUser = new User()
//     newUser.email = req.body.email
//     newUser.password = newUser.hashPassword(req.body.password)
//     newUser.save((err) => {
//         if (err) {
//             res.send(err)
//         } else {
//             res.json({ token: newUser.generateJWT() })
//         }
//     })
// }))

// router.post('/login', ((req, res) => {
//     console.log(req.body)
//     User.findOne({ 
//         email: req.body.email
//     }, ((err, user) => {
//             console.log(user)
//             if (err) {
//                 res.sendStatus(500)
//             } else {
//                 if(user.checkPassword(req.body.password)) {
//                     res.json({ token: user.generateJWT() })
//             } else {
//                 res.json('Incorrect password')
//                 }
//             }
//         })
//     )
// }))

module.exports = router