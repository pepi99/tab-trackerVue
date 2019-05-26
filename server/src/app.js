console.log('hey')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined')) // Information about users (OS, IP, browsers, etc..)
app.use(bodyParser.json()) // easily deals with json
app.use(cors()) // any client from around the world can access the server

app.get('/status', (req, res) => {
    res.send({
        message: 'Hello'
    })
})
app.listen(8001)