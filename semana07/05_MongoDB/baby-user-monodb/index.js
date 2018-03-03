require('dotenv').config()

const express = require('express')
const { MongoClient, ObjectID } = require('mongodb')

const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'pug')

const formBodyParser = bodyParser.urlencoded({extended: false})

MongoClient.connect('mongodb://localhost:27017', (err, conn) => {
    if (err) throw err

    const db = conn.db('bootcamp')

    app.get('/:id?', (req, res) => {
        const {params: {id}} = req

        db.collection('users').find().toArray((err, data) => {
            if (err) throw err
            res.render("index", {data, id})
        })
    })

    app.get('/user/:id', (req, res) => {

    })

    app.post('/user/', formBodyParser, (req, res) => {
        const {body: {name, email, surname, password }} = req

        db.collection('users').insert({name, email, surname, password}, (err, data) => {
            if (err) throw error

            res.redirect('/')
        })
    })

    app.get('/user/:id/delete', (req, res) => {
        const {params: {id}} = req

        db.collection('users').remove({"_id": ObjectID(id)}, (err, data) => {
        
            res.redirect('/')

        })
    })

    app.get('/user/:id/edit', (req, res) => {
        const {params: {id}} = req

        res.redirect('/')
    })

    app.post('/user/updated', formBodyParser, (req,res) => {
        const {body: {name, email, surname, password }, param: {id}} = req

        db.collection('users').updateOne({"_id": ObjectID(id)},{$set:{name, email, surname, password }}, (err, data) => {
            if (err) throw err
            
            res.redirect('/')

        })

    })

    const port = process.env.PORT

    app.listen(port, () => console.log(`server runnning on port ${port}`)) 

    process.on('SIGINT', () => {
        console.log('stopping server')

        conn.close()

        process.exit()
    })
})