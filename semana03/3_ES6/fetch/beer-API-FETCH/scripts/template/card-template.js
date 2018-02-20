//Template Card
function addCards(res) {
    let listCard = '';
    let count = 0;
    res.forEach(function (el) {
        count++;
        if (el.labels === undefined) el.labels = {
            "medium": "./img/beer.png"
        }
        listCard += `
        <div class="card col-3" id="card${count}" style='overflow:scroll'>
            <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                <div class="flipper" >
                    <div class="front">
                        <img class="card-img-top" src="${el.labels.medium}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${el.name}</h5>
                        </div>
                    </div>
                    <div class="back">
                        <h1>${el.name}</h1>
                        <div class="card-body">
                            <span>${el.description !== undefined ? el.description : "no descriptcion found"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
        `;
    });
    return listCard
}