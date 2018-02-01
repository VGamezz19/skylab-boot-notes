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

		token: "BQB0KtRComnivsc_8k51xrPa78e9z_xj3Zb5DvERgttF0R7PBsHzW-1MhxFdY6ZZw3P9XGLe5MFqpN2op7bRsbF7itqwXGb2McTj-AXAxIfsDeovHMTr13qLw7IeMFgIVQV2zajApKMoWksdFCV2jwCj3CQQ2ApPts6SBA",
		
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
			httpReq.send();

			timeoutCache = timeoutPetition(_timeToBreak, _callbackCall)	
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