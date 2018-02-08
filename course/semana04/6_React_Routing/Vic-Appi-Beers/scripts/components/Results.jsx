
const { Component } = React
class Results extends Component {
    constructor() {
        super()

        this.state = {
            beers: []
        }
    }

    loadBeers(query) {
        beersApi.search(query)
            .then(beers => this.setState({ beers }))
            .catch(console.error)
    }

    componentDidMount() {
        this.loadBeers(this.props.match.params.query)
    }

    componentWillReceiveProps(props) {
        this.loadBeers(props.match.params.query)
    }

    render() {
        console.log(this.state.beers)
        return (
            <section className='row'>
                <div className="col-12" id='box'>
                    {this.state.beers.map(beer => {
                        return (
                            <div className="card ">
                                <div className="flip-container">
                                    <div className="flipper">
                                        <div className="front">
                                            <img className="card-img-top" src={beer.labels ? beer.labels.medium : './img/beer.png'} alt="Card image cap" />
                                            <div className="card-body">
                                                <h5 className="card-title">{beer.name}</h5>
                                            </div>
                                        </div>
                                        <div className="back">
                                            <h1>{beer.name}</h1>
                                            <div className="card-body">
                                                <span>{beer.description !== undefined ? beer.description : "no descriptcion found"}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </section>
        )


    }

}

