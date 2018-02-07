function TaskAllCheck(props) {
    return (<button
        id="checkAll"
        className="btn btn-success"
        onClick={props.onCheckAll}>
        Mark all as done</button>
    )
}