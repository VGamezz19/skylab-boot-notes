## [← |](https://github.com/VGamezz19/skylab-curso/blob/dev/course/semana03/)   API

Existen dos tipos de APIS. la API Servidor, que nos servira informacion de la BBDD, o la API-Client. Que nos gestionara la API del servidor, y nos tratara y proporcionara los datos ya masticados.

-   API CLIENT

Como no se ha de estructurar una API-Client ❌

```javascript
//HTTP REQUEST
function getApiBeer(URL, callback) {
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
		var DONE = 4
		var OK = 200
		if (this.readyState === DONE) {
			if (this.status === OK) {
				//Todo OK
				clearTimeout(timeoutError);
				return callback(null, JSON.parse(this.responseText))
			} else {
				clearTimeout(timeoutError);
				return callback(new Error(this.status + "Error en la peticion httpRequest/AJAX"))
			}
		}
	}
	xhr.open('GET', URL);
	var timeoutError = setTimeout(function(){
		xhr.abort()
		return callback(new Error(this.status + "Error en la peticion httpRequest/AJAX"))
	},3000)
	xhr.send(null);
}

```

Como REALMENTE se ha de estructurar una API-Client ✅

```javascript
	spotiApi = {
		baseURL: "https://api.spotify.com/v1/",

		token: "BQCmW83yv194FIW58ZSdJqMykOB3FOh24IehtpeXycFnO5TFXsQ9lWyUVPEJKCC5zV8CxPpvW80bhztui9ErzlBTpkBDbNHSNNJKR4X3GFcKXuxRKV3ErL8KNHT_H1gnl0D7oqDfDIiHZUkykNEA2jd988K1lgiWVNjIig",
		
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
```

Es más reutilizable gestionar la **API-Client** como si fuera un objeto, y lo maximo reutilizable posbile! pero sin olvidarnos que una funcion/metodo, solo puede tener una dependencia.

