require('dotenv').config()

const express = require('express')
const { MongoClient } = require('mongodb')

const app = express()

app.set('view engine', 'pug')

MongoClient.connect('mongodb://localhost:27017', (err, conn) => {
    if (err) throw err

    const db = conn.db('bootcamp')

    app.get('/', (req, res) => {

        db.collection('users').find().toArray((err, data) => {
            if (err) throw err
           // console.log({data})
            res.render("index", {data})

            //res.json(data)
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