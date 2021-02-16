const express = require('express')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const app = express()
const dbConnection = require('./config/dbConnection')

const port = 5000

dbConnection()

app.set('jwt-key', process.env.JWT_KEY)

app.use(bodyParser.json({type: 'application/json' })) // Parse body os requests to JSON

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
     info: {
       title: 'ezPage API',
       version: '1.0.0',
     },
   },
   apis: ['./src/routes/*.js'],
 };

const swaggerSpec = swaggerJsDoc(options)

app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec))

app.get('/',(req,res) => {
    res.send(`Connection was successful`)
})

require('./routes/userRoutes')(app);
require('./routes/authRoutes')(app)

app.listen(port , () => {
    console.log(`App started on port ${port}`)
})