const express = require('express')
const parseurl = require('parseurl')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const url = 'mongodb://EzrahN:IKEAForce3@ds137611.mlab.com:37611/ikeafinal'
const Form = require('./form-schema')
const db = mongoose.connection

mongoose.connect(url, function(err, db){
    if (err){
        console.log(err)
    } else {
        console.log('Connected to database')
    }
})

db.once('open', function(){
    console.log('Connected to the database')
})

db.on('error', function(err){
    console.log(err)
})

app.post('/quoteform', function(req, res){
    Form.create({
        customerName: req.body.NameOfCustomer,
        service: req.body.TypeOfService,
        date: req.body.DateOfQuote,
        comments: req.body.CommentsOfQuote
    }).then(data => {
        res.json(data)
    })
})



