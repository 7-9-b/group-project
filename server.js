// module imports
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();

//models
require('./models/user');
require('.models/feed');

let users = require('./routes/users');
let feed = require('./routes/feed');

// PRODUCTION ONLY
app.use(express.static(path.join(__dirname, 'client/build')));

// app middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(passport.initialize());
app.use('/users', users);
app.use('/feed', feed);

mongoose.connect('mongodb://KimBailey:March-319@ds137611.mlab.com:37611/ikeafinal')

// PRODUCTION ONLY
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/client/build/index.html'));
// });

// Development mode port
const port = process.env.PORT || 5000;
app.listen(port)

module.exports = app;

