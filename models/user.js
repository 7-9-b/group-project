let mongoose = require('mongoose');
let crypto = require('crypto');
let jwt = require('jsonwebtoken');

let UserSchema = new mongoose.Schema({
    email: String,
    passwordHAsh : String,
    salt: String
});

UserSchema.method("setPassword", function(password) {
    this.salt = crypto.randonBytes(16).toString('hex');
    this.passwordHAsh = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString('hex');
});

UserSchema.method("validatePassword", function(password) {
    let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString('hex');
    return (hash === this.passwordHash);
});

UserSchema.method("generateJWT", function(){
    return jwt.sign({
        id:this_id,
        email: this.email,
    }, 'SecretKey');
});

let User = mongoose.model('User', UserSchema);
module.exports = User;
