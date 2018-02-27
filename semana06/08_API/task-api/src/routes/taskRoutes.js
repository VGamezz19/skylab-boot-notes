const bodyParser = require('body-parser')

const taskLogic = require('../logic/taskLogic')

const { Router } = require('express')

const { success, fail } = require('../config/response')

const router = Router()

const jsonBodyParser = bodyParser.json()

router.get('/tasks/todo', (req, res) => res.json(success('Task for todo listing succeeded.', taskLogic.listTodo())))

router.get('/tasks/done', (req, res) => res.json(success('Tasks done listing succeeded.', taskLogic.listDone())))

router.get('/tasks/all', (req, res) => res.json(success('listing all tasks succeeded.', taskLogic.listAll())))

router.post('/tasks', jsonBodyParser, (req, res) => {
    const { text } = req.body

    taskLogic.create (text)

    res.json(success('Create Task succeeded.'))

})

router.patch('/tasks/:id', jsonBodyParser, (req, res) => {
    const { text } = req.body
    const { params: { id } } = req
    
    try {
        taskLogic.update(id, text)

        res.json(success('Task Updated succeeded.'))
    } catch (err) {
        res.json(fail('Task Updated failed.', err.message))
    }

})

router.put('/tasks/:id', (req, res) =>{
    const { params: { id } } = req

    try {
        taskLogic.update(id)

        res.json(success('Task Update to Done succeeded'))

    } catch(err) {
        res.json(fail('Task Update failed.', err.message))
    }
})

router.delete('/tasks/:id', (req, res) => {
    const { params: { id } } = req

    try {
        taskLogic.remove(id)

        res.json(success('Task Delete succeeded.'))
    } catch (err) {
        res.json(fail('Task Delete failed.', err.message))
    }
}) 

router.delete('/tasks/', (req, res) => {

    taskLogic.removeAll()

    res.json(success('Task Delete-All succeeded.'))
}) 
module.exports = router