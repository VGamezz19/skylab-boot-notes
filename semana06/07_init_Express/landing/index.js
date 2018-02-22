const express = require('express')
const app = express()
const port = process.argv[2]

app.get('/', (req,res) => res.send('Hello, World!'))
app.listen(port, () => console.log(`landing server running on port ${port}`))