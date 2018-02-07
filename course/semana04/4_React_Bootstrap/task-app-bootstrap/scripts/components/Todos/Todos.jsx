
class Todos extends React.Component {
    constructor() {
        super()
    }

    onAddTasks = (task) => this.props.onAddTasks(task)

    render() {
        return (
            <div class='col-md-6'>
                <div class="todolist not-done">
                    <h1>Todos</h1>
                    <TaskInput onAddTask={this.props.onAddTask} />
                    <TaskList valueTasks={this.props.valueTasks} />
                    <TaskLeft valueTasks={this.props.valueTasks} />
                </div>
            </div>
        )
    }
}