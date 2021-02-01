const mongoose = require('mongoose')
require('dotenv').config()

const path = process.env.DB_CONNECTION

module.exports = () => mongoose.connect(path, {useNewUrlParser: true, useUnifiedTopology: true})