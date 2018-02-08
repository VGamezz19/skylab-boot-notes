function ListaAlbum(props) {
    return props.valueAlbums.map(album => {
        return (
            <div class="card album-card" id={album.id}>
                <img class="card-img-top" src={album.images[1].url} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{album.name}</h5>
                </div>
            </div>
        )
    })
}

