const spotiApi = {
	baseURL: "https://api.spotify.com/v1/",

	token: "BQCpRsL2SEIEhEIeGqtIwEz81ZtWou6CfL54kli9MdhwliiaAidI9fTHe8JvgRnXk93EPglZwJ0MLttVg91ZefCKbFUSdzbxqgCu9sT5RqHqru-tZS5ylz_10wVTFCtBJqw5SsYrfCa2xep_n5ojdlM4SAxviwe_LjAv-g",

	getHeaders: function () {
		return {
			headers: {
				'Authorization': 'Bearer ' + this.token
			}
		}
	},

	timeout: 2000,

	call: function (_PATH) {
		return new Promise((resolve, reject) => {
				const timeout = setTimeout(function () {
					reject(new Error('Request timed out'));
				}, this.timeout);

				fetch(_PATH, this.getHeaders())
					.then(res => {
						clearTimeout(timeout);

						return res.json();
					})
					.then(data => resolve(data))
					.catch(function (err) {
						reject(err);
					})
			})
			.catch(err => {
				throw new Error(err)
			})
	},

	getArtists: function (query) {
		let path = this.baseURL + "search?q=" + query + "&type=artist";

		return this.call(path)
			.then(res =>  res.artists.items)
			.then(res => {
				res.forEach(function (el) {
					if (!el.images.length) el.images = [{
						"url": "somthing"
					}, {
						"url": "./img/defauldImage.png"
					}]
				})

				return res
			})
	},

	getAlbums: function (id) {
		let path = this.baseURL + 'artists/' + id + "/albums";

		return this.call(path).then(res =>  res.items)
	},

	getTraks: function (id) {
		let path = this.baseURL + "albums/" + id + "/tracks"

		return this.call(path).then(res =>  res.items)
	}
}