function TaskLeft(props) {
    let num = 0
    return (
        <div class="todo-footer">
            <strong>
                <span class="count-todos">
                    {props.valueTasks.reduce((acum, task) => {
                        console.log("reduce", task, acum)
                        return task.done ? acum : acum += 1
                    }, 0)} Items Left
                </span>
            </strong>
        </div>
    )
}