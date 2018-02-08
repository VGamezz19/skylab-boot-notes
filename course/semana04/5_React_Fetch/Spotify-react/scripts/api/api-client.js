const spotiApi = {
	baseURL: "https://api.spotify.com/v1/",

	token: "BQDXOfxSyxuVS3bzm11pttORyB_Px5IRwCI9xTV2e3EnSCFfzeTXPEOqN5TckZW9J0jL79lWiR4Q-lMDOUjaSA5WqQupD42HRlc2MN6tglb-RaIn23L1X4-oc1tHBNaT8BKCSzbFByCjusG-3iM12fFbsrNRyag37iXHzg",

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

		return this.call(path)
			.then(res =>  res.items)
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

	getTraks: function (id) {
		let path = this.baseURL + "albums/" + id + "/tracks"

		return this.call(path).then(res =>  res.items)
	}
}