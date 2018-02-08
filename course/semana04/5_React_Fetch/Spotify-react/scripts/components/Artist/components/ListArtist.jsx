function ListArtist(props) {
    return (
        <div id="box" class="card-columns col-md-10 offset-md-1  col-sm-12">
            {props.valueArtists.map(artist => {
                return (
                    <div class="card card-artist " data-depth="-0.6" id="${el.id}">
                        <img class="card-img-top" src={artist.images[1].url} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">{artist.name}</h5>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
