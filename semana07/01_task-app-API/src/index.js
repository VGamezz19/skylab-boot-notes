require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const {apiTask} = require('./api/apiTask')
const app = express()

let tasks

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    //tasks.push({ id: 1, text: 'hola mundo!', done: false})
   // require('./api/apiTask')
   
   async function fu () {
       await apiTask().getTaskTodo().then(res => tasks = res.data)
       console.log(tasks)
    res.render('index', { tasks })
   }

   fu()
    
})

const formBodyParser = bodyParser.urlencoded({ extended: false })

app.post('/tasks', formBodyParser, (req, res) => {
    const { body: { text } } = req
    apiTask().setCreateTask(text)

    res.redirect('/')
})

app.get('/tasks/:id/done', (req, res) => {
    const {  params: { id } } = req

    const task = tasks.find(task => task.id == id)

    if (task) task.done = true

    res.redirect('/')
})

app.get('/tasks/:id/remove', (req, res) => {
    const {  params: { id } } = req

    const index = tasks.findIndex(task => task.id == id)

    if (index > -1) tasks.splice(index, 1)

    res.redirect('/')
})

const port = process.env.PORT

app.listen(port, () => console.log(`Task App running on port ${port}`))