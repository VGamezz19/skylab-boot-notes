export default class Task {
    constructor(title) {
        this.id = Task.count++
            this.title = title
        this.create = true
        this.done = false
    }
}

Task.count = 0