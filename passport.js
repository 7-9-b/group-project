const JWTStrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt
const mongoose = require('mongoose')
const User = mongoose.model('User')
const opts = {}

opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken()
opts.secretOrKey = 'secret'

module.exports = passport => {
    passport.use(new JWTStrategy(opts, (jwt_payload, done) => {
        User.findById(jwt_payload.id)
            .then(user => {
                if(user) {
                    return done(null, user)
                }
                return done(null, false)
            })
            .catch(err => console.error(err))
    }))
}

// const LocalStrategy = require('passport-local').Strategy
// const User = require('./models/users-model')

// const config = (passport) => {
    
//     passport.serializeUser((user, done) => {
//         done(null, user.id)
//     })

//     passport.deserializeUser((id, done) => {
//         User.findById(id, (err, user) => {
//             done(err, user)
//         })
//     })

//     passport.use('signup', new LocalStrategy({
//         usernameField: 'email',
//         passwordField: 'password',
//         passReqToCallback: true
//     },
//     (req, email, password, done) => {

//             User.findOne({ 'email': email }, (err, user) => {
//                 if(err)
//                     return done(err)
//                 if(user) {
//                     return done(null, false, console.log('Looks like you already have an account.'))
//                 } else {
//                     let newUser = new User()

//                     newUser.email = email
//                     newUser.password = newUser.hashPassword(password)

//                     newUser.save((err) => {
//                         if(err) {
//                             throw err
//                         } else {
//                             return done(null, user, console.log('You are signed up!'))
//                         }
//                     })
//                 }
//             })
//         }
//     ))

//     passport.use('login', new LocalStrategy({
//         usernameField: 'email',
//         passwordField: 'password',
//         passReqToCallback: true
//     },
//     (req, email, password, done) => {

//         User.findOne({ 'email': email }, (err, user) => {
//             if(err)
//                 return done(err)
//             if(!user)
//                 return done(null, false, console.log('No user found'))
//             if (!user.checkPassword(password))
//                 return done(null, false, console.log('Incorrect password'))

//             return done(null, user, console.log('Successful login'))
//             })
//         })
//     )
// }

// module.exports = config