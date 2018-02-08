class SpotiApp extends React.Component {
    constructor() {
        super()
        this.state = {
            selectArtist: ''
        }
    }
    clickArtist = idArtist => {
        this.setState({ selectArtist: idArtist })
    }

    render() {
        return (
            <div>
                <Artist onClickArtist={this.clickArtist} />
                {this.state.selectArtist ? <Album selectArtist={this.state.selectArtist} /> : ''}
            </div>

        )
    }
}

