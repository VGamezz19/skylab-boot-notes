class SearchArtist extends React.Component {

    constructor() {
        super()
        this.state = {
            input: ''
        }
    }

    keepInput = input => this.setState({ input: input })
    onSearchArtist = () => {
        if (this.state.input === '') return console.error("Empty search")
        
        this.props.onSearchArtist(this.state.input)
        this.setState({ input: '' })
    }

    render() {
        return (
            <form onSubmit={(e) => { e.preventDefault(); this.onSearchArtist() }}>
                <div class="input-group input-group-lg">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-lg">
                            <span class="oi oi-musical-note"></span>
                        </span>
                    </div>
                    <input
                        type="text"
                        onChange={e => { e.preventDefault(); this.keepInput(e.target.value) }}
                        value={this.state.input}
                        class="form-control"
                        id="inputSearch"
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm" />
                </div>
            </form>
        )

    }
}