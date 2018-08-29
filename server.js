// module imports
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const expressSession = require('express-session')
const path = require('path');
const passport = require('passport')


// database setup
const mongoose = require('mongoose')
const url = 'mongodb://isaac:abc123@ds127342.mlab.com:27342/final-project-db';
const db = mongoose.connection

mongoose.connect(url, {useNewUrlParser: true }, function(err, db){
    if (err){
        console.log(err)
    } else {
        console.log('Connected to the database')
    }
})

db.on('error', function(err){
    console.log(err)
})

db.once('open', function(){
    console.log('Connected to the database')
})


// PRODUCTION ONLY
app.use(express.static(path.join(__dirname, 'client/build')));

// models
require('./models/users-model')
require('./models/quotes-model')

// routes
const users = require('./routes/users')
const quotes = require('./routes/quotes')


// app middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors())
app.use(passport.initialize())
require('./passport')(passport)
app.use(passport.initialize())
app.use(passport.session())

app.use('/users', users)
app.use('/quotes', quotes)


// PRODUCTION ONLY
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});


// Development mode port
const port = process.env.PORT || 5000;
app.listen(port)

module.exports = app;
