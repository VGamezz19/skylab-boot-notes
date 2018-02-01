var spotiApi;

(function () {
	//Define Variables
	var httpReq = new XMLHttpRequest();
	var DONE = 4;
	var OK = 200;
	var timeoutCache;

	function timeoutPetition(time, callback) {
		return setTimeout(function () {
			httpReq.abort()
			return callback(new Error(this.status + "Error en la peticion httpRequest/AJAX"))
		}, time)
	}

	function clearAbort(timeout) {
		return clearTimeout(timeout)
	}

	spotiApi = {
		baseURL: "https://api.spotify.com/v1/",
		headers: new Headers({
			'Content-Type': 'application/json'
		}),
		token: "BQDyhGSsjIF8mviH7t_lfF3r_tf0vjbNI7QE7N6dWagou6S2szFlUALvIIG0-kyppFo56f1ct6GZ4qc97k7kgfIn2gyP_ASXf8u3afJEc9oHuojzVBo1kwCma0lRDw05SFwxgKBpHiyJ0jFjmgK8k6W2D57b__VzA5LWLA",
		call: function (_PATH, _callbackCall, _timeToBreak) {
			httpReq.onreadystatechange = function () {
				if (this.readyState === DONE) {
					if (this.status === OK) {
						clearAbort(timeoutCache)
						return _callbackCall(null, JSON.parse(this.responseText))
					} else {
						clearAbort(timeoutCache)

						return _callbackCall(new Error(this.status + "Error en la peticion httpRequest/AJAX"))
					}
				}
			}

			httpReq.open('GET', this.baseURL + _PATH);
			httpReq.setRequestHeader('Authorization', 'Bearer ' + this.token);

			timeoutCache = timeoutPetition(_timeToBreak, _callbackCall)
			httpReq.send();
		},

		getArtists: function (query, type, callback, timeRequest) {
			var path = "search?q=" + query + "&type=" + type;

			this.call(path, callback, timeRequest)
		},
		getAlbums: function (id, callback, timeRequest) {
			var path = 'artists/' + id +"/albums";

			this.call(path, callback, timeRequest)
		},
		getTraks: function (id, callback, timeRequest) {
			var path = "albums/"+id+"/tracks"

			this.call(path, callback, timeRequest)
		}
	}
})()