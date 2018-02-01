//Template Card
function addAlbumTemplate(res) {
    var listAlbumTemplate = '';
    var count = 0;
    res.forEach(function (el) {
        if (!el.images.length) el.images = [{
            "url": "somthing"
        }, {
            "url": "./img/defauldImage.png"
        }]
        count++;
        listAlbumTemplate += `
        <div class="card album-card col-3" id="${el.id}">
            <img class="card-img-top" src="${ el.images[1].url }" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${el.name}</h5>
            </div>
        </div>   
        `;
    });

    return listAlbumTemplate;
}