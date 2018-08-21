const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
    },
    date: {
        type: Date,
        default: new Date()
    }
})

const User = mongoose.model('User', userSchema, 'Users')

module.exports = User