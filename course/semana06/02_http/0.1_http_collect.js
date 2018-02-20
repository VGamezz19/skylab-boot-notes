//node . 'http://google.com'
const http = require('http')
const url = process.argv[2]

http.get(url, (res) => {

    res.setEncoding('utf-8')

    let rawData = ''
    let count = 0;
    res.on('data',(res) => {
        count ++
        rawData += res
    })

    res.on('error', () => console.error("some error"))

    res.on('end', () =>{
        console.log("end conection",rawData, "__>>>>>", count)
    })
})