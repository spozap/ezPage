const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const dbConnection = require('./config/dbConnection')

const port = 3000

dbConnection()

app.use(bodyParser.json({type: 'application/json' })) // Parse body os requests to JSON

app.get('/',(req,res) => {
    res.send(`Connection was successful`)
})

require('./routes/userRoutes')(app);

app.listen(port , () => {
    console.log(`App started on port ${port}`)
})