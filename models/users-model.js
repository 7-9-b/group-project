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

// userSchema.method('hashPassword', (password) => {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
// })

// userSchema.method('checkPassword', (password) => {
//     return bcrypt.compareSync(password, this.password)
// })

// userSchema.method('generateJWT', () => {
//     return jwt.sign({
//         id: this._id,
//         email: this.email
//     }, 'SecretKey')
// })

const User = mongoose.model('User', userSchema, 'testDB')

module.exports = User