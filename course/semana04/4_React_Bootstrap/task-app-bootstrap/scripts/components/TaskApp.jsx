
class TaskApp extends React.Component {
    constructor() {
        super()
        this.state = {
            tasks: []
        }
    }

    addTask = (task) => {
        this.setState(prevStates => ({ tasks: [...prevStates.tasks, task] }))
    }

    doneTask = (idTask) => {
        this.setState(prevState => ({
            tasks: prevState.tasks.map((task, _id) => {
                if (idTask === _id) {
                    task.done = true
                    return task
                }
                return task
            })
        }))
    }

    deleteTask = idTask => {
        this.setState(prevState => ({
            tasks: prevState.tasks.map((task, _id) => {
                if (idTask === _id) {
                    task.create = false
                    return task
                }
                return task
            })
        }))
    }

    checkAll = () => {
        this.setState(prevState => ({
            tasks: prevState.tasks.map(task => {
                task.done = true
                return task
            })
        }))
    }

    render() {
        return (
            <div class='row'>
                <Todos
                    onAddTask={this.addTask}
                    onDoneTask={this.doneTask}
                    onCheckAll={this.checkAll}
                    valueTasks={this.state.tasks} />
                <AlreadyDone
                    onDeleteTask={this.deleteTask}
                    valueTasks={this.state.tasks} />
            </div>
        )
    }
}