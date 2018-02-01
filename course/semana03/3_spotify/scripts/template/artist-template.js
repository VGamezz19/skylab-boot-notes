//Template Card
function addArtistTemplate(res) {
    var listArtistTemplate = '';
    var count = 0;
    res.forEach(function (el) {
        if (!el.images.length) el.images = [{
            "url": "somthing"
        }, {
            "url": "./img/defauldImage.png"
        }]
        count++;
        listArtistTemplate += `
        <div class="card card-artist col-3" id="${el.id}">
            <img class="card-img-top" src="${ el.images[1].url }" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${el.name}</h5>
            </div>
        </div>   
        `;
    });
    return listArtistTemplate
}