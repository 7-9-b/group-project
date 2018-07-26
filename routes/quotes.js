const express = require('express')
const router = express.Router()
const Quotes = require('../models/quotes-model')

router.post('/quoteform', (req, res) => {
    const form = new Quotes()
        form.customerName = req.body.customerName
        form.service = req.body.service
        form.width = req.body.width
        form.length = req.body.length
        form.comments = req.body.comments

        console.log(req.body)
})

module.exports = router




