const express = require('express')
const router = express.Router()
const Quotes = require('../models/quotes-model')

router.post('/quoteform', (req, res) => {
    console.log(req.body)

    const form = new Quotes()
        form.customerName = req.body.customerName
        form.service = req.body.service
        form.width = req.body.width
        form.length = req.body.length
        form.comments = req.body.comments

    form.save((err) => {
        if(err){
            res.sendStatus(500)
        } else {
            res.sendStatus(200)
        }
    })

})

module.exports = router







