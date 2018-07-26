// module imports
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')

// Routes
// const users = require('./routes/users')
const router = require('./routes/quotes')

// Database 
const mongoose = require('mongoose')
const url = 'mongodb://enyanat:password1@ds163769.mlab.com:63769/test-db'
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

// app middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// app.use('/users', users)
app.use('/', router)


// PRODUCTION ONLY
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// Development mode port
const port = process.env.PORT || 5000;
app.listen(port)

module.exports = app;
