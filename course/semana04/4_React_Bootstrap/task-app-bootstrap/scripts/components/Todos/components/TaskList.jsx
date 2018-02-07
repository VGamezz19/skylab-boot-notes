function TaskList(props) {
    return (
        <ul id="sortable" class="list-unstyled">
            {props.valueTasks.map(task => {
                console.log(task)
                if (task.create && !task.done) {
                    return(<li class="ui-state-default">
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" value="" />{task.title}</label>
                        </div>
                    </li>)
                }
            })}
        </ul>
    )
}