const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: new Date()
    }
})

userSchema.methods = {
    checkPassword: (password) => {
        return bcrypt.compareSync(password, this.password)
    },
    hashPassword: (password) => {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
    }
}

const User = mongoose.model('User', userSchema, 'testDB')

module.exports = User
