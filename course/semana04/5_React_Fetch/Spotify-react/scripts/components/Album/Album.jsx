class Album extends React.Component {
    constructor() {
        super()

        this.state = {
            albums: []
        }
    }

    componentDidMount() {
        spotiApi.getAlbums(this.props.selectArtist).then(albums => this.setState({ albums }))
    }
    componentWillReceiveProps(props) {
        spotiApi.getAlbums(this.props.selectArtist).then(albums => this.setState({ albums }))
    }

    render() {
        return
        (
            <div class='row'>
                <div id="albumBox" class="card-columns  hidden col-md-10 offset-md-1 col-sm-12">
                    <ListaAlbum valueAlbums={this.state.albums} />
                </div>
            </div>
        )
    }
}