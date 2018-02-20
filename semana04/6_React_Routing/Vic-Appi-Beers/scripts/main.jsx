// NICE! Object destructuring...
const { Component } = React
// const { BrowserRouter, Route, NavLink } = ReactRouterDOM
const { HashRouter, Route, NavLink, withRouter } = ReactRouterDOM
const SearchWithRouter = withRouter(Search)

class App extends Component {
    constructor() {
        super()
    }

    render() {
        return <HashRouter>
            <main className="container-fluid">
                <header className="col-12">
                    <h1 className = 'text-center'>Search your Beer</h1>
                </header>
                
                <Route exact path="/" component={SearchWithRouter} />
                {/* Loader --- */}
                <Route path="/search/:query" component={Results} />
            </main>
        </HashRouter>
    }
}

ReactDOM.render(<App />, document.getElementById('root'))