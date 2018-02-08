function ListArtist(props) {
    return (
        <div id="box" className="card-columns col-md-10 offset-md-1 col-sm-12">
            {props.valueArtists.map(artist => {
                return (
                    <div className="card card-artist " key={artist.id}>
                        <img 
                            className="card-img-top" 
                            src={artist.images[1].url} 
                            alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{artist.name}</h5>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
