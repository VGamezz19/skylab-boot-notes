// //HTTP REQUEST
// function getApiBeer(URL, callback) {
// 	var xhr = new XMLHttpRequest();

// 	xhr.onreadystatechange = function () {
// 		var DONE = 4
// 		var OK = 200
// 		if (this.readyState === DONE) {
// 			if (this.status === OK) {
// 				//Todo OK
// 				clearTimeout(timeoutError);
// 				return callback(null, JSON.parse(this.responseText))
// 			} else {
// 				clearTimeout(timeoutError);
// 				return callback(new Error(this.status + "Error en la peticion httpRequest/AJAX"))
// 			}
// 		}
// 	}
// 	xhr.open('GET', URL);
// 	var timeoutError = setTimeout(function () {
// 		xhr.abort()
// 		return callback(new Error(this.status + "Error en la peticion httpRequest/AJAX"))
// 	}, 3000)
// 	xhr.send(null);
//}


var getApiBeerTest = {
	call(errorRequest = () => console.error("some Erro"),url, callInit = () => undefined, callBack = () => undefined) {

		if (!url) console.error("Error, getApiBeer.call() <-- need URL")

		callInit()
		fetch(url,{method: 'GET', timeout: 2000})
			.then(res => res.json())
			.then((res) => {
				callBack(res)
				return res
			})
			.catch(err => errorRequest())
	}
}