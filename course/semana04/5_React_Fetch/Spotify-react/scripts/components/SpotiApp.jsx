class SpotiApp extends React.Component {
    constructor() {
        super()
        this.state = {
            selectArtist: ''
        }
    }


    render() {
        return (
            <div>
                <Artist/>
                {this.state.selectArtist ? '' : <Album selectArtist = {this.state.selectArtist} />}
            </div>
           
        )
    }
}

