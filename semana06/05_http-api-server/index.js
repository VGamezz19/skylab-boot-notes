const http = require('http')
const url = require('url')
const [node, path, port] = process.argv
const nameEjecutor = process.env.LOGNAME

const server = http.createServer((req, res) => {
    const _url = url.parse(req.url, true)
    if(_url.pathname === '/api/parsetime') {
        const date = new Date(_url.query.iso)

        const data= {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }
        //Vamos a responder en formato JSON!
        res.writeHead(200, { 'Content-Type': 'application/json' }) 

        res.end(JSON.stringify( data))
    }

    res.writeHead(405, 'Sorry...:(')
    
    res.end() //hace un .write() y despues un on.('end')

})

server.listen(port, () => console.log(`Hello ${nameEjecutor}, the server liten in ${port}`))