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
            let task = {
                title: this.state.input,
                create: true,
                done: false
            }
            this.props.onAddTask(task)
            this.setState({ input: '' })
        }
    }

    onCheckAll = () => this.props.onCheckAll()
    render() {
        return (
            <div>
                <form onSubmit={this.onAddTask}>
                    <input
                        type="text"
                        class="form-control add-todo"
                        onChange={this.keepInput} value={this.state.input}
                        placeholder="Add todo"
                        required />

                </form>
                <button
                    id="checkAll"
                    class="btn btn-success"
                    onClick={this.onCheckAll}>
                    Mark all as done</button>
            </div>

        )
    }
}