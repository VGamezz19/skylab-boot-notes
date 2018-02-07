function TaskList(props) {
    return (
        <ul id="sortable" class="list-unstyled">
            {props.valueTasks.map((task, id) => {
                if (task.create && !task.done) {
                    return(<li class="ui-state-default">
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" onChange={()=> {props.onDoneTask(id)}} value="" />{task.title}</label>
                        </div>
                    </li>)
                }
            })}
        </ul>
    )
}