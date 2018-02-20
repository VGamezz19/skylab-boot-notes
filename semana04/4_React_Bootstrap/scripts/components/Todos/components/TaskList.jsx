function TaskList(props) {
    return (
        <ul id="sortable" className="list-unstyled">
            {props.valueTasks.map((task, id) => {
                if (task.create && !task.done) {
                    return (<li className="ui-state-default">
                        <div className="checkbox">
                            <label>
                                <input
                                    type="checkbox"
                                    onChange={() => { props.onDoneTask(id) }}
                                    value="" />
                                {task.title}
                            </label>
                        </div>
                    </li>)
                }
            })}
        </ul>
    )
}