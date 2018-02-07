class TaskInput extends React.Component {
    constructor() {
        super()
        this.state = {
            input: ''
        }
    }
    keepInput = e => this.setState({ input: e.target.value })

    onAddTask = (e) => {
        e.preventDefault()
        if(this.state.input) {
            let task =  {
                title: this.state.input,
                create: true,
                done: false
            }
            this.props.onAddTask(task)
            this.setState({input: ''})
        }     
    }
    render() {
        return (
            <form onSubmit={this.onAddTask}>
                <input type="text" class="form-control add-todo" onChange={this.keepInput} value={this.state.input} placeholder="Add todo" />
                <button id="checkAll" class="btn btn-success">Mark all as done</button>
            </form>
        )
    }
}