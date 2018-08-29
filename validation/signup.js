const Validator = require('validator')
const isEmpty = require('./empty')

function validateSignUp(data) {
    let errors = {}
    data.email = !isEmpty(data.email) ? data.email : ''
    data.password = !isEmpty(data.password) ? data.password : ''
    data.confirmPassword = !isEmpty(data.confirmPassword) ? data.confirmPassword : ''

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid'
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email is required'
    }

    if (!Validator.isLength(data.password, { min: 5, max: 30})) {
        errors.password = 'Password must have at least 5 characters'
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password is required'
    }

    if (Validator.isEmpty(data.confirmPassword)) {
        errors.confirmPassword = 'Please confirm password'
    }

    if (!Validator.equals(data.password, data.confirmPassword)) {
        errors.confirmPassword = 'Passwords must match'
    }

    return {
        errors, 
        isValid: isEmpty(errors)
    }
}

module.exports = validateSignUp