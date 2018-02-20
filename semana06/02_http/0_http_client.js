//node . 'http://google.com'
const http = require('http')
const url = process.argv[2]

http.get(url, (res) => {

    res.setEncoding('utf-8')

    res.on('finished', () => console.log("finishSocket"))

    res.on('data',() => console.log("come data"))

    res.on('error', () => console.error("some error"))

    res.on('end', () => console.log("End conecction"))
})