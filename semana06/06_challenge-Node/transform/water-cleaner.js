const {
    Transform
} = require('stream')
const byline = require('byline')
const fs = require('fs')


const waterClean = new Transform({
    transform(chunk, encoding, next) {
        let element = chunk.toString()
        if(element === 'H2O') this.push(element)
        next()
    }
})

byline.createStream(fs.ReadStream('water.txt')).pipe(waterClean).pipe(process.stdout)