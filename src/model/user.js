const {schema , model, Schema} = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
    },
    email: {
        type:String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 20,
    },
    age: {
        type: Number,
        default: null,
    },
    isUser: {
        type: Boolean,
        default: true, 
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },

}, {timestamp: true}
)

const userModel = model('users', userSchema)

module.exports = userModel;