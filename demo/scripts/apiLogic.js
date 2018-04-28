console.log("apiLogic")

function newRequest(url){
    return fetch(url)
        .then(r => r.json())
        .then(console.log)
}