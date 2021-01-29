const mongoose = require('mongoose')
require('dotenv').config()

const path = process.env.DB_CONNECTION
console.log(path)
module.exports = () => mongoose.connect(path, {useNewUrlParser: true, useUnifiedTopology: true})