const express = require('express')
const formPost = express()
const Form = require('./form-schema')

formPost.post('/quoteform', function(req, res){
    const form = new Form()
        form.customerName = req.body.customerName
        form.service = req.body.service
        form.width = req.body.width
        form.length = req.body.length
        form.comments = req.body.comments

    res.send(req.body)
})

module.exports = formPost




