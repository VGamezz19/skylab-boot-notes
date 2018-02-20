
class Todos extends React.Component {
    constructor() {
        super()
    }

    onAddTask = (task) => this.props.onAddTask(task)
    onDoneTask = (idTask) => this.props.onDoneTask(idTask)
    onCheckAll = () => this.props.onCheckAll()

    render() {
        return (
            <div className='col-md-6'>
                <div className='todolist not-done'>
                    <h1>Todos</h1>
                    <TaskInput onAddTask={this.onAddTask} />
                    <TaskAllCheck onCheckAll={this.onCheckAll} />
                    <TaskList
                        onDoneTask={this.props.onDoneTask}
                        valueTasks={this.props.valueTasks} />
                    <TaskLeft valueTasks={this.props.valueTasks} />
                </div>
            </div>
        )
    }
}