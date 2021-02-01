const mongoose = require('mongoose');
const { Schema } = mongoose

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const userModel = mongoose.model('Blog', userSchema);

module.exports = userModel;