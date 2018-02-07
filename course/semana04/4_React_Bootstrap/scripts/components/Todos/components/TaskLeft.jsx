function TaskLeft(props) {
    let num = 0
    return (
        <div className="todo-footer">
            <strong>
                <span className="count-todos">
                    {props.valueTasks.reduce((acum, task) => {
                        console.log("reduce", task, acum)
                        return task.done ? acum : acum += 1
                    }, 0)} Items Left
                </span>
            </strong>
        </div>
    )
}