const express = require('express')
const app = express()

const port = 3000

app.get('/',(req,res) => {
    res.send(`Connection was successful`)
})

app.listen(port , () => {
    console.log(`App started on port ${port}`)
})