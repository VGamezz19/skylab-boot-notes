function TaskLeft(props) {
    let num = 0
    return (
        <div class="todo-footer">
            <strong><span class="count-todos"></span></strong>
            {props.valueleftDone()} Items Left
        </div>
    )
}