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
		token: "BQBzq7Gzq8jmRSJThDrybjME71IZ2teqYv1WaT5zFxHzq_4_XyC9ruTjPvps9TIOqQK9S18Ois0yPfHpkywpA20rzotFt3tuGUifs0VzTbDRWxHvQVwY8JK1g3RePf4WkS0HixNSg5irC2GnszPtWcgm-MCCFwuKZpE3bQ",
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