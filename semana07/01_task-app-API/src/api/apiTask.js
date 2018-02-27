const axios = require('axios');

// axios.get('http://localhost:5000/api/tasks/todo')
//     .then(function (response) {
//         console.log(response.data); // ex.: { user: 'Your User'}
//         console.log(response.status); // ex.: 200
//     });


function apiTask() {
    return {
        __get: function (path) {
            return axios.get(path)
                .then(res => res.data)
        },
        __post : function (path, text){
            return axios.post(path, {text})
        },
        getTaskTodo: function () {
            return this.__get(`http://localhost:5000/api/tasks/todo`)
        },
        getTaskDone: function () {
            return this.__get(`http://localhost:5000/api/tasks/done`)
        },
        setCreateTask: function(text) {
            return this.__post(`http://localhost:5000/api/tasks/`, text)
        }
    }
}

module.exports = {
    apiTask
}



// if(false){
//     require('pene')
// }

//     router.get('/tasks/todo', (req, res) => res.json(success('Task for todo listing succeeded.', taskLogic.listTodo())))

//   router.get('/tasks/done', (req, res) => res.json(success('Tasks done listing succeeded.', taskLogic.listDone())))

//   router.post('/tasks', jsonBodyParser, (req, res) => {
//       const { text } = req.body

//       taskLogic.create (text)

//       res.json(success('Create Task succeeded.'))

//   })

//   router.patch('/tasks/:id', jsonBodyParser, (req, res) => {
//       const { text } = req.body
//       const { params: { id } } = req

//       try {
//           taskLogic.update(id, text)

//           res.json(success('Task Updated succeeded.'))
//       } catch (err) {
//           res.json(fail('Task Updated failed.', err.message))
//       }

//   })

//   router.put('/tasks/:id', (req, res) =>{
//       const { params: { id } } = req

//       try {
//           taskLogic.update(id)

//           res.json(success('Task Update to Done succeeded'))

//       } catch(err) {
//           res.json(fail('Task Update failed.', err.message))
//       }
//   })

//   router.delete('/tasks/:id', (req, res) => {
//       const { params: { id } } = req

//       try {
//           taskLogic.remove(id)

//           res.json(success('Task Delete succeeded.'))
//       } catch (err) {
//           res.json(fail('Task Delete failed.', err.message))
//       }
//   }) 

//   router.delete('/tasks/', (req, res) => {

//       taskLogic.removeAll()

//       res.json(success('Task Delete-All succeeded.'))
//   }) 
// module.exports = router