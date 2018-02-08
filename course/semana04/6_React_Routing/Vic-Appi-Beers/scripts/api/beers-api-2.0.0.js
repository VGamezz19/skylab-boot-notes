
const FETCH_TIMEOUT = 3000
const beersApi = {

	urlBase: 'http://quiet-inlet-67115.herokuapp.com/api/search/all?q=',

	call(path) {
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
			.catch(err => {throw new Error(err)})
	},

	search(query) {
		let path = this.urlBase + query
		if (!query) return console.error("Error, getApiBeer.getSearch() <-- need URL")

		return this.call(path)
	}
}