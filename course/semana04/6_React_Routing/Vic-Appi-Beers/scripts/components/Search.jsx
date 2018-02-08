const { Component } = React
class Search extends Component {
    constructor() {
        super()

        this.state = {
            query: ''
        }
    }

    keepQuery(query) {
        this.setState({ query })
    }

    search() {
        if (this.state.query)
            this.props.history.push(`/search/${this.state.query}`)
    }

    render() {
        return (

            <section className="jumbotron">
                <div className="col-12">
                    <form onSubmit={e => { e.preventDefault(); this.search() }}>
                        <input type="text" onChange={e => this.keepQuery(e.target.value)} />
                    </form>
                </div>
            </section>

        )
    }
}


