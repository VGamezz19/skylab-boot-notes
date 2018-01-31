var spotiApi;

(function () {
	//Define Variables
	var xhr = new XMLHttpRequest();
	var DONE = 4
	var OK = 200
	function timeoutPetition  (time, callback) {
		setTimeout(function () {
			xhr.abort()
			return callback(new Error(this.status + "Error en la peticion httpRequest/AJAX"))
		}, time)
	}

	function clearAbort(timeout) {
		return clearTimeout(timeout)
	}
º
	spotiApi = {
		token: "Bearer BQAIUGgAn-b3bCuBbO9lFX4W6p6lsHkzP8v0NhbdU2W389uek-AXh6MJf0K71tDjrfa3h5zAFPEKUatBxp_e7zNKnvhsBxTovBOuxfIMvbz0mOvNYqNKLmUFYJgrifyub4qQoc6uR6YuLihf4Czs607GlwtFAGThvcmIzg",

		call: function (_URL, _callbackCall, _timeToBreak) {
			xhr.onreadystatechange = function () {
				if (this.readyState === DONE) {
					if (this.status === OK) {
						//TODO --> TRY to enter the real TIMEOUT
						clearAbort(this.timeout)

						return _callbackCall(null, JSON.parse(this.responseText))
					} else {
						//TODO --> TRY to enter the real TIMEOUT
						clearAbort(this.timeout)

						return _callbackCall(new Error(this.status + "Error en la peticion httpRequest/AJAX"))
					}
				}
			}
			xhr.open('GET', _URL);
			timeoutPetition(_timeToBreak, callback)
			xhr.send(null);
		},
	}
})()