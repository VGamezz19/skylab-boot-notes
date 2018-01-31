//URLS


//HTTP REQUEST
function getApiBeer(URL, callback) {
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
		var DONE = 4
		var OK = 200
		if (this.readyState === DONE) {
			if (this.status === OK) {
				//Todo OK
				callback(null, JSON.parse(this.responseText))
			} else {
				callback(new Error(this.status + "Error en la peticion httpRequest/AJAX"))
			}
		}
	}
	xhr.open('GET', URL);
	xhr.send(null);
}