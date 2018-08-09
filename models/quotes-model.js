const mongoose = require('mongoose')
const Schema = mongoose.Schema

const quotesSchema = new Schema({
    customerName: String,
    service: String,
    width: Number,
    length: Number,
    comments: String,
    date: {
        type: Date,
        default: new Date()
    }
})

const Quotes = mongoose.model('Quotes', quotesSchema, 'QuoteFormData')

module.exports = Quotes