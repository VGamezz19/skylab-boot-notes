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
                                    <button className="remove-item btn btn-default btn-xs pull-right">
                                        <span
                                            onClick={(e) => {
                                                e.preventDefault()
                                                props.onDeleteTask(idTask)
                                            }}
                                            className="glyphicon glyphicon-remove" />
                                    </button>
                                </li>
                            )
                        }
                    })}
                </ul>
            </div>
        </div>
    )
}