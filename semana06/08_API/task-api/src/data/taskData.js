const tasks = []
const taskData = {
    list() { return tasks },

    create(text, id = (new Date()).getTime(), done = false) {
        return tasks.push({ id, text,done })
    },

    retrieve(_id) {
        const task = tasks.find(task => task.id == _id)

        if (task) return task

        throw new Error('Taks doesn\'t exist.')
    },

    update(id, _text = false) {
        const task = this.retrieve(id)

        if (!_text) return task.done = true

        return task.text = _text
    },

    delete(_id) {

        if(!_id){
            return tasks.splice(0, tasks.length)
        } 

        const index = tasks.findIndex(task => task.id == _id)

        if (index < 0) throw Error('Task does not exist.')

        return tasks.splice(index, 1)

    }
}

module.exports = taskData