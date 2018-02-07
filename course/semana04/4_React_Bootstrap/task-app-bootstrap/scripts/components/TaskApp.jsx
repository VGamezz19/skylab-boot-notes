
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

    render() {
        return (
            <div class='row'>
                <Todos
                    onAddTask={this.addTask}
                    valueTasks={this.state.tasks} />
                <AlreadyDone
                    valueTasks={this.state.tasks} />
            </div>
        )
    }
}