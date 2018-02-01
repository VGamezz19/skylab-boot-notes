var $form = $('form');
var $select = $('#selectSearch');
var $input = $('#inputSearch');
var $mainBox = $('#box');
var $albumBox = $('#albumBox')
var $document = $(document);

$form.submit(function (e) {
    e.preventDefault();
    var queryInputed = $input.val();
    var typeSelected = $select.val();
    var timeoutDefauld = 3000;

    if (queryInputed === '') throw new Error("Empty search")

    clearContent();
    if (typeSelected === "artist") {
        getArtistFromAPI(queryInputed, typeSelected, timeoutDefauld);
    }
});

function getArtistFromAPI(query, type, timeout) {
    spotiApi.getArtists(query, type, function (err, res) {
        if (err) throw new Error("err -->", err);
        $mainBox.html(addArtistTemplate(res.artists.items))

        addEventsClickOnCardsArtist(timeout);
    }, timeout);
}

function addEventsClickOnCardsArtist(timeout) {
    return $document.on('click', '.card', function (e) {
        var id = $(this).attr("id")
        getAlbumsFromIdArtist(id, timeout)
    })
}

function getAlbumsFromIdArtist(id, timeout) {
    spotiApi.getAlbums(id, function (err, res) {
        if (err) throw new Error("err -->", err);
        $albumBox.html(addAlbumTemplate(res.items))
        addEventClickAlbumArtist(timeout);
    }, timeout)
}

function addEventClickAlbumArtist(timeout) {
    return $document.on('click', '.album-card', function (e) {
        console.log("albumClick")
        var id = $(this).attr("id")
        getAllTraksFromAlbum(id, timeout)
    })
}

function getAllTraksFromAlbum(id, timeout) {
    spotiApi.getTraks(id, function (err, res) {
        if (err) throw new Error("err -->", err);
        console.log("TRAKS", res)
        $('#modal').html(addTraksTemplate(res.items));
        $('.modal-trak').modal('show')
        

    }, timeout)
}



//Content HTML

function clearContent() {
    $albumBox.html("")
    $mainBox.html("")
}