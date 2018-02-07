function AlreadyDone(props) {
    return (
        <div class="col-md-6">
            <div class="todolist">
                <h1>Already Done</h1>
                <ul id="done-items" class="list-unstyled">
                    {props.valueTasks.map((task,idTask) => {
                        if( task.done === true && task.create) {
                            return (
                                <li>
                                    {task.title}
                                    <button className="remove-item btn btn-default btn-xs pull-right">
                                        <span onClick = {()=> props.onDeleteTask(idTask)} className="glyphicon glyphicon-remove"></span>
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