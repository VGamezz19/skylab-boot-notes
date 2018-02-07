
class Todos extends React.Component {
    constructor() {
        super()
        // this.state = {
        //     leftDone: 0
        // }
    }

    onAddTask = (task) => this.props.onAddTask(task)
    onDoneTask = (idTask) => this.props.onDoneTask(idTask)
    onCheckAll = () => this.props.onCheckAll()

    leftToDone = () => {
        let count = 0;
        for (let i = 0; i < this.props.valueTasks.length; i++) {
            if (this.props.valueTasks[i].done === false) {
                count++;
            }
        }
        return count
    }
    render() {
        return (
            <div class='col-md-6'>
                <div class="todolist not-done">
                    <h1>Todos</h1>
                    <TaskInput 
                        onCheckAll = {this.onCheckAll}
                        onAddTask={this.onAddTask} />
                    <TaskList
                        onDoneTask={this.props.onDoneTask}
                        valueTasks={this.props.valueTasks} />
                    <TaskLeft valueleftDone={() => this.leftToDone()} />
                </div>
            </div>
        )
    }
}