function AlreadyDone(props) {
    return (
        <div className="col-md-6">
            <div className="todolist">
                <h1>Already Done</h1>
                <ul id="done-items" className="list-unstyled">
                    {props.valueTasks.map((task, idTask) => {
                        if (task.done === true && task.create) {
                            return (
                                <li>
                                    {task.title}
                                    <XButton valueID={idTask} onAction={props.onDeleteTask} />
                                </li>
                            )
                        }
                    })}
                </ul>
            </div>
        </div>
    )
}

function XButton(props) {
    return (
        <button
            className="remove-item btn btn-default btn-xs pull-right"
            onClick={(e) => {
                e.preventDefault()
                props.onAction(props.valueID)
            }}>
            <span className="glyphicon glyphicon-remove" />
        </button>
    )
}