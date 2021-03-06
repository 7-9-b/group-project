const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuoteSchema = new Schema({
    name: String,
    phone: String,
    service: String,
    comments: String
})

const Quote = mongoose.model('Quote', QuoteSchema)

module.exports = Quote;