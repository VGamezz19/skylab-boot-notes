'use strict'

class TaskApp extends React.Component {
    constructor() {
        super()
        this.state = {
            input: '',
            tasks: []
        }
    }

    keepInput = (e) => {
        this.setState({input: e.target.value})
    }

    addTask = e => {
        e.preventDefault()
        this.setState(prevState => {
            console.log(prevState)
            return {
                //tasks: prevState.tasks.concat(this.state.inoput)
                tasks: [
                    ...prevState.tasks,
                    this.state.input
                ],
                input: ''
                //?? setStates + prevState...
            }
        })
    }

    removeTask = index => {
        console.log(index)
        this.setState(prevState => {
            return {tasks: prevState.tasks.filter((task, i) => index !==i)}
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addTask}>
                    <input
                        type="text"
                        className='round-blue-input'
                        placeholder="Input memo"
                        onChange={this.keepInput}
                        value={this.state.input}/>
                    <button className='round-red-button' type="submit">Add</button>
                </form>
                <ul>
                    {this.state.tasks.map((task, index) => 
                        <li>
                            {task}
                            <a onClick={(e) => {
                                    e.preventDefault()
                                    this.removeTask(index)
                                }
                            }>🗑</a>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

ReactDOM.render(
    <TaskApp/>, document.getElementById('root'))