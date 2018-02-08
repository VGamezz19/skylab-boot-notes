class Album extends React.Component {
    constructor() {
        super()
        this.state = {
            album: []
        }
    }
    searchArtist = query => {
        spotiApi.getalbum(query)
            .then(_album => {
                this.setState({ album: _album })
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
                    {this.state.album.length < 1 ? '' : <ListArtist valuealbum={this.state.album} />}
                </div>
            </section>

        )
    }
}