class TaskInput extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <form action="">
                <input type="text" class="form-control add-todo" placeholder="Add todo" />
                <button id="checkAll" class="btn btn-success">Mark all as done</button>
            </form>
        )
    }
}