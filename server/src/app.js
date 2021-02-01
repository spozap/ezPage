const express = require('express')
const app = express()
const dbConnection = require('./config/dbConnection')

const port = 3000

dbConnection()

app.get('/',(req,res) => {
    res.send(`Connection was successful`)
})

require('./routes/userRoutes')(app);

app.listen(port , () => {
    console.log(`App started on port ${port}`)
})