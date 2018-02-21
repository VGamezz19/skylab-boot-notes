const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
    fs.createReadStream(file).pipe(res)
})

const port = process.argv[2]
const file = process.argv[3] 

server.listen(port, () => console.log(`escuchando en el puesto ${port}`))