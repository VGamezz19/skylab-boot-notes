require('dotenv').config()

const express = require('express')

const app = express()

const bodyParser = require('body-parser')

//All petitions of this aplications, have these middleware `bodyParser.json()`
app.use(bodyParser.json())

require('./data/taskData')

// ============= ⚡️  =============
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server listin in port ${PORT}`))