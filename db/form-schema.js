const mongoose = require('mongoose')
const Schema = mongoose.Schema

const formSchema = new Schema({
    customerName: String,
    service: String,
    width: Number,
    length: Number,
    comments: String,
})

const Form = mongoose.model('Form', formSchema, 'users')

module.exports = Form