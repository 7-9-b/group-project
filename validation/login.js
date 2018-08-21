const Validator = require('validator')
const isEmpty = require('./empty')

function validateLogin(data) {
    let errors = {}
    data.email = !isEmpty(data.email) ? data.email : ''
    data.password = !isEmpty(data.password) ? data.password: ''

    if(!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid'
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = 'Email is required'
    }

    if (!Validator.isLength(data.password, { min: 5, max: 30})) {
        errors.password = 'Password must have at least 5 characters'
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password is required'
    }

    return {
        errors, 
        isValid: isEmpty(errors)
    }
}

module.exports = validateLogin