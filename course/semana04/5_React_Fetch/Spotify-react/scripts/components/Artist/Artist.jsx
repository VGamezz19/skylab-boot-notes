class Artist extends React.Component {
    constructor() {
        super()
        this.state = {
            artists: []
        }
    }
    searchArtist = query => {
        spotiApi.getArtists(query)
            .then(_artists => {
                this.setState({ artists: _artists })
            })
            .catch(err => console.error("err -->", err))
    }
    render() {
        return (
            <section>
                <div class="col-md-4 offset-md-4 mb-5 col-sm-12">
                    <SearchArtist onSearchArtist={this.searchArtist} />
                </div>

                <div class='row'>
                    {this.state.artists.length < 1 ? '' : <ListArtist valueArtists={this.state.artists} />}
                </div>
            </section>

        )
    }
}