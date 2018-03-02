require('dotenv').config()

const express = require('express')
const { MongoClient } = require('mongodb')

const app = express()

MongoClient.connect('mongodb://localhost:27017', (err, conn) => {
    if (err) throw err

    const db = conn.db('bootcamp')

    app.get('/', (req, res) => {
        const query = req.query.q || req.query.query || ''
    
        const regex = new RegExp(query, 'i')

        db.collection('user').find({ name: regex, email: regex}).toArray((err, data) => {
            if (err) throw err

            res.json(data)
        })
    })

    const port = process.env.PORT

    app.listen(port, () => console.log(`server runnning on port ${port}`)) 

    //Cuando el proceso se termine, cerrar la conexion de mongoDB
    //y la de Node
    process.on('SIGINT', () => {
        console.log('stopping server')

        conn.close()

        process.exit()
    })
})