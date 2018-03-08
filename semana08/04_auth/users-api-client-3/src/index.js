const rp = require('request-promise')

const api = {
    _baseUrl() {
        with (this) {
            return `${protocol}://${host}:${port}/api`
        }
    },

    _call(method, path, body, headers) {
        return rp({
            method,
            uri: `${this._baseUrl()}/${path}`,
            headers,
            body,
            json: true
        })
    },

    login(username, password) {
        return this._call('post', 'login', { username, password })
    },

    list(token) {
        return this._call('get', 'users', undefined, {'Authorization': 'Bearer '+token})
    },

    create(name, surname, email, username, password, token) {
        return this._call('post', 'user', { name, surname, email, username, password }, {'Authorization': 'Bearer '+token})
    },

    retrieve(id, token){
        return this._call('get', `user/${id}`, undefined , {'Authorization': 'Bearer '+token})
    },

    update(id, name, surname, email, username, password, newUsername, newPassword, token) { 
        return this._call('put', `user/${id}`, { name, surname, email, username, password, newUsername, newPassword }, {'Authorization': 'Bearer '+token})
    },

    remove(id, username, password , token) {
        return this._call('delete', `user/${id}`, {username, password}, {'Authorization': 'Bearer '+token})
    }
}

module.exports = api