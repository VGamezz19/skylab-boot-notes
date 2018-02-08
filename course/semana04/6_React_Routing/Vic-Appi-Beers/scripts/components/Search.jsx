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

                    {/* <section class='sectionProgress hidden'>
    <div class="progress">
        <div style="width: 0%" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75"
            aria-valuemin="0" aria-valuemax="100" style></div>
    </div>
</section> */}
                </div>
            </section>

        )
    }
}


