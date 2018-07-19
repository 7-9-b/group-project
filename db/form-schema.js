const mongoose = require('mongoose')
let Schema = mongoose.Schema

const formSchema = new Schema({
    customerName: String,
    service: {
        type: String,
        enum: ['flooring', 'landscaping', 'windows']
    },
    date: Date,
    comments: String
})

const Form = mongoose.model('Form', formSchema)

module.exports = Form