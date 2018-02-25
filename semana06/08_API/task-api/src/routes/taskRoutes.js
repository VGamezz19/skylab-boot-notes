const bodyParser = require('body-parser')

const taskLogic = require('../logic/taskLogic')

const { Router } = require('express')

const { success, fail } = require('../config/response')

const router = Router()

router.get('/tasoks', (req, res) => res.json(success('Users listing succeeded.', userLogic.list())))


// router.get('/ta/:username', (req, res) => {
//     //const username = req.params.username
//     //const { username } = req.params
//     const { params: { username } } = req

//     try {
//         const user = userLogic.retrieve(username)

//         res.json(success('User retrieval succeeded.', user))
//     } catch (err) {
//         res.json(fail('User retrieval failed.', err.message))
//     }
// })