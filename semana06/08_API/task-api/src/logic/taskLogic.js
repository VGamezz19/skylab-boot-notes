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

        const tasks = taskData.list()
        let i = 0
        while (i < tasks.length) {
            taskData.delete(tasks[i])
            i++
        }

        return taskData.list()

    },

    update(_id, text) {

        taskLogic.update(_id,text)

    }
}

module.exports = taskLogic