const mongoose = require('mongoose')
const Schema = mongoose.Schema

const quotesSchema = new Schema({
    customerName: String,
    service: String,
    width: Number,
    length: Number,
    comments: String,
})

const Quotes = mongoose.model('Quotes', quotesSchema, 'quotes')

module.exports = Quotes