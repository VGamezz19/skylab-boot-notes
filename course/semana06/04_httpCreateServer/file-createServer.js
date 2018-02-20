const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
    
    res.sendDate()
    fs.createReadStream(file).pipe(res)
    //fs.createWriteStream(file).wr
})

const port = process.argv[2]
const file = process.argv[3]

server.listen(port, () => console.log(`escuchando en el puesto ${port}`))