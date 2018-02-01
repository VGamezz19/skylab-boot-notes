var $form = $('form');
var $select = $('#selectSearch');
var $input = $('#inputSearch');
var $mainBox = $('#box');
var $albumBox = $('#albumBox')
var $document = $(document);

$form.submit(function (e) {
    e.preventDefault();
    var queryInputed = $input.val();
    var typeSelected = 'artist';
    var timeoutDefauld = 3000;

    if (queryInputed === '') throw new Error("Empty search")

    clearContent();
    getArtistFromAPI(queryInputed, typeSelected, timeoutDefauld);

    goToPosition("#box")
});

function getArtistFromAPI(query, type, timeout) {
    spotiApi.getArtists(query, type, function (err, res) {
        if (err) throw new Error("err -->", err);
        $mainBox.html(addArtistTemplate(res.artists.items))
        $mainBox.addClass("jumbotron")

        addEventsClickOnCardsArtist(timeout);
    }, timeout);
}

function addEventsClickOnCardsArtist(timeout) {
    return $document.on('click', '.card', function (e) {
        var id = $(this).attr("id");
        getAlbumsFromIdArtist(id, timeout);

        goToPosition("#albumBox");
    })
}

function getAlbumsFromIdArtist(id, timeout) {
    spotiApi.getAlbums(id, function (err, res) {
        if (err) throw new Error("err -->", err);
        $albumBox.html(addAlbumTemplate(res.items));
        $albumBox.addClass("jumbotron");

        addEventClickAlbumArtist(timeout);
    }, timeout)
}

function addEventClickAlbumArtist(timeout) {
    return $document.on('click', '.album-card', function (e) {
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
    $albumBox.removeClass("jumbotron")
    $mainBox.html("")
    $mainBox.removeClass("jumbotron")
}

function goToPosition(divid) {
    $('html, body').animate({
        scrollTop: $(divid).position().top - 50
    }, 'slow');
}