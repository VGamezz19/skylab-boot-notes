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
// var URLQ = 'http://quiet-inlet-67115.herokuapp.com/api/search/all?q=';
// var URLID = 'https://quiet-inlet-67115.herokuapp.com/api/beer/';
const FETCH_TIMEOUT = 3000

const getApiBeer = {
	urlBase: 'http://quiet-inlet-67115.herokuapp.com/api/search/all?q=',

	call(errorRequest, path, callInit) {
		callInit()

		return new Promise(function (resolve, reject) {
				const timeout = setTimeout(function () {
					reject(new Error('Request timed out'));
				}, FETCH_TIMEOUT);

				fetch(path)
					.then(res => {
						clearTimeout(timeout);
						return resolve(res);
					})
					.catch(function (err) {
						reject(err);
					})
			})
			.then(res => res.json())
			.catch(err => errorRequest())
	},
	getSearch(reject = () => console.error("some Erro"), query, initReq = () => undefined) {
		let path = this.urlBase + query
		if (!query) return console.error("Error, getApiBeer.getSearch() <-- need URL")

		return this.call(reject, path, initReq)
	}
}