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
        if (this.state.input) {
            this.props.onAddTask(new Task(this.state.input))
            this.setState({ input: '' })
        }
    }

    render() {
        return (
            <form onSubmit={this.onAddTask}>
                <input
                    type="text"
                    className="form-control add-todo"
                    onChange={this.keepInput} value={this.state.input}
                    placeholder="Add todo"
                    required />
            </form>

        )
    }
}