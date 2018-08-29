let express = require('express');
let mongoose = require('mongoose');
let router = express.Router();
let Quote = mongoose.model('Quote');

router.post('/', (req, res) => {
    let newQuote = new Quote();
    newQuote.name = req.body.name;
    newQuote.phone = req.body.phone;
    newQuote.service = req.body.service;
    newQuote.comments = req.body.comments;
    newQuote.save((err) => {
        if(err) {
            res.send(err)
        } else {
            res.sendStatus(200)
        }
    })
})

router.get('/', (req, res) => {
    Quote.find({}).then((quotes) => {
        res.json(quotes)
    })
})

router.put('/:id', (req, res) => {
    Quote.findById(req.params.id, (err, quote) => {
        if(err) {
            res.send(err)
        } else {
            quote.service = req.body.newQuote;
            quote.save((err) => {
                if(err) {
                    res.send(err)
                } else {
                    res.sendStatus(200)
                }
            })
        }
    })
})

router.delete('/:id', (req, res) => {
    Quote.deleteOne({_id: req.params.id}, (err) => {
        if(err) {
            res.send(err)
        } else {
            res.sendStatus(200)
        }
    })
})

module.exports = router;







