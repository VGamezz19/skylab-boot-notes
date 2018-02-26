
require('dotenv').config()

const express = require('express')

const app = express()

const bodyParsers = require('body-parser')

const formBodyParser = bodyParsers.urlencoded({ extended: false })

// app.use(bodyParsers)

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index')
})

//============= 🔥 =============

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`server listen in port ${PORT}`))
