ReactDOM.render(<div class = 'container'><TaskApp/></div> , document.getElementById('root'))




// 'use strict'

// //Smart Component Father / ClassComponent
// class TaskApp extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             tasks: [],
//             tasksRemoved: []
//         }
//     }

//     addTask = (task) => {
//         this.setState(prevStates => ({ tasks: [...prevStates.tasks, task] }))
//     }

//     removeTask = (idTask) => {
//         this.setState(prevStates => {

//             return {
//                 tasksRemoved: [...prevStates.tasksRemoved, prevStates.tasks.filter((task, _id) => idTask === _id)],
//                 tasks: prevStates.tasks.filter((task, _id) => idTask !== _id),
//             }
//         })
//     }

//     refresList = () => {
//         this.setState({ tasksRemoved: [] })
//     }
//     render() {
//         return (
//             <div>
//                 <TaskInput onAddTask={this.addTask} />

//                 {this.state.tasks.length > 0 ?
//                     <TaskList
//                         tasks={this.state.tasks}
//                         onRemoveTask={this.removeTask} /> : ``}

//                 {this.state.tasksRemoved.length > 0 ? <TaskDeleteList
//                     tasks={this.state.tasksRemoved}
//                     onRemoveTask={this.removeTask}
//                     onRefresh={this.refresList} /> : ``}
//             </div>
//         )
//     }
// }

// //Smart Component Child / ClassComponent
// class TaskInput extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             input: ""
//         }
//     }

//     addTaskChild = e => {
//         e.preventDefault()
//         this.props.onAddTask(this.state.input)
//         this.setState({input: ''})
//     }

//     keepInput = e => this.setState({ input: e.target.value })

//     render() {
//         return (
//             <form onSubmit={this.addTaskChild}>
//                 <input
//                     className = 'round-blue-input'
//                     type="text"
//                     onChange={this.keepInput}
//                     value={this.state.input} />
//                 <button 
//                     type="submit"
//                     className = 'round-red-button'>
//                     Enviar</button>
//             </form>
//         )
//     }
// }

// //Idiot Component Child () /FunctionalComponent
// function TaskList(props) {
//     //AddingList
//     return (<ul> {props.tasks.length > 0 ? `Your Tasks! 😁` : ``}
//         {props.tasks.map((task, index) => {
//             return <li>{task}  <a onClick={(e) => { e.preventDefault(); props.onRemoveTask(index) }}>🗑</a></li>
//         })}
//     </ul>)
// }
// ////Idiot Component Child () /FunctionalComponent
// function TaskDeleteList(props) {
//     return (
//         <ul> You was remuve 🗑 ...
//         <button onClick={props.onRefresh}  className = 'round-grey-button' type="submit">Refres</button>
//             {props.tasks.map((task, index) => {
//                 return <li>{task}</li>
//             })}
//         </ul>)
// }

// //ReactDOM GOD
// ReactDOM.render(<TaskApp />, document.getElementById('root'))