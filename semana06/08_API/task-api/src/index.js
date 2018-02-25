require('dotenv').config()

const express = require('express')

const taskRoutes = require('./routes/taskRoutes')

const app = express()


app.use('/api', taskRoutes)

// ============= ⚡️  =============
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server listin in port ${PORT}`))