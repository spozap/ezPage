const express = require('express')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const app = express()
const dbConnection = require('./config/dbConnection')

const port = 3000

dbConnection()

app.use(bodyParser.json({type: 'application/json' })) // Parse body os requests to JSON

const swaggerDefinition = {
    openapi: '3.0.2',
    info: {
        title: "ezPage API",
        version: "1.0.0"
    },
};

const options = {
    swaggerDefinition,
    apis: ['./server/src/routes/*.js'],
};

const swaggerSpec = swaggerJsDoc(options)

app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec))

app.get('/',(req,res) => {
    res.send(`Connection was successful`)
})

require('./routes/userRoutes')(app);

app.listen(port , () => {
    console.log(`App started on port ${port}`)
})