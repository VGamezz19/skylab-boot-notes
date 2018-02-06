'use strict';

function HelloWord() {
    return <h1>Hello Word</h1>
}

function Hello(props) {
    return <h1>Hello, {props.name}</h1>
}

class Calc extends React.Component { //Calc esta heredando todos los metodos de ReactComponent
    constructor() {
        super()

        this.state = {
            a: 0,
            b: 0,
            res: 0
        }
    }
    calculate = (e) => {
        e.preventDefault()

        this.setState({
            res: this.state.a + this.state.b
        })
        this.setState((prevState) => console.log(prevState))
        // this.setState(prevState => {
        //     return {
        //         res: prevState.a + prevState.b
        //     }
        // })
    }

    keepA = (e) => {
        let a = parseFloat(e.target.value)
        this.setState({a: a})
    }

    keepB = (e) => {
        let b = parseFloat(e.target.value)
        this.setState({b: b})
    }

    render() {
        return (
            <main>
                <section>
                    <form onSubmit={this.calculate}>
                        <input type="text" onChange={this.keepA}/>
                        +
                        <input type="text" onChange={this.keepB}/>
                        <button type="submit">=</button>
                        <input type="text" disabled value={this.state.res}/>
                    </form>
                </section>
            </main>
        )
    }
}

ReactDOM.render(
    <main>
    <section>
        <HelloWord/>
        <Hello name='John'/>
        <Calc/>
    </section>
</main>, document.getElementById('root'))
