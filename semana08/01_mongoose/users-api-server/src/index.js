require(`dotenv`).config()

const express = require('express')

const routes = require('./routes')

const cors = require('cors')

require('./db')

const app = express()

app.use(cors())

app.use('/api', routes)

const port = process.env.PORT

app.listen(port, () => console.log(`users api running on port ${port}`))