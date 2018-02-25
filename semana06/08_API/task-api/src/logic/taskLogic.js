const taskData = require('../data/taskData')

const taskLogic = {
    create(_text) {

        taskData.create(_text)
    },

    maskDone(_id) {

        return taskData.update(_id) //It should update done to true.

    },

    remove(_id) {

        return taskData.delete(_id) //It should update done to true.
    },

    listDone() {


        const tasks = taskData.list()
        return tasks.filter(task => task.done === true)
    },

    listTodo() {

        const tasks = taskData.list()
        return tasks.filter(task => task.done === false)

    },

    removeAll() {

        const tasks = taskData.list() // WARN --> Bug HERE!!
        const len = tasks.length

        for (let i = 0; i < len; i++) {
            taskData.delete(tasks[i].id)
        }

    },

    update(_id, text) {

        taskData.update(_id, text)

    }
}

module.exports = taskLogic