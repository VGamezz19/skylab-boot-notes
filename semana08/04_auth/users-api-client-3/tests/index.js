require('dotenv').config()

const api = require('../src/index')

const assert = require('assert')

const mongoose = require('mongoose')

const { API_PROTOCOL, API_HOST, API_PORT, JWT_SECRET: secret, JWT_EXP: expiration } = process.env

const expiresIn = parseInt(expiration)

const jwt = require('jsonwebtoken')

const token = jwt.sign({ username: 'userTest' }, secret, { expiresIn })

let index = 0

let name, surname, email, username, password

api.protocol = API_PROTOCOL
api.host = API_HOST
api.port = API_PORT

describe('API-client', () => {

    before(function (done) {

        require('./db')

        mongoose.connection.once('connected', () => {
            mongoose.connection.db.collection('users').drop(err => {

                if (err) console.error(`Some error when try to connect BBDD ${err}`)

                done()
            });
        });
    })


    describe('Enviroment-tdd', () => {

        it('mandatory arguments in this API', () => {

            assert(require('mongoose'), 'you need installed mongoose, please add it with yarn add --dev jsonwebtoken')

            assert(require('jsonwebtoken'), 'you need installed jsonwebtoken, please add it with yarn add --dev jsonwebtoken')

            assert(secret, `secret should exist`)

            assert(expiration, `expiration should exist`)

            assert(token, 'token should exist')
        })
    })

    describe('Succes Cases', () => {
        beforeEach(() => {
            index++;

            name = `n${index}`
            surname = `s${index}`
            email = `e${index}`
            username = `u${index}`
            password = `p${index}`

        });

        it('should exist', () => {

            assert(api, 'should exist api')

            assert(api.protocol, 'api.protocol should exist')

            assert(api.host, 'api.host should exist')

            assert(api._call, 'api._cal should exist')

            assert(api.list, 'api.list should exist')

            assert(api.create, 'api.create should exist')

            assert(api.update, 'api.update should exist')

            assert(api.retrieve, 'api.retrieve should exist')

            assert(api.remove, 'api.remove should exist')

            assert.equal(typeof (api), 'object', 'should instace of as Object')
        })

        it('should login', done => {
            api.create(name, surname, email, username, password, token)
            .then(res => {

                assert.equal(res.status, 'OK', `results should be OK , but got error: ${res.error}`)

                assert(res.data && res.data.id, 'should return data id')

                return api.login(username, password,token)

            })
            .then(res => {

                assert.equal(res.status, 'OK', `results should be OK, but got error: ${res.error}`)

                assert(res.data.token.length > 100,`should more than 100 caracters`)

                assert.notEqual(res.data.token, token, 'should return new token')

                assert(jwt.verify(res.data.token, secret), 'should verify token')

                done()
            })
            .catch(done)
        })

        it('should list', done => {

            api.create(name, surname, email, username, password, token)
                .then(res => {

                    assert.equal(res.status, 'OK', `results should be OK , but got error: ${res.error}`)

                    assert(res.data && res.data.id, 'should return data id')

                    return api.list(token)

                })
                .then(res => {

                    assert.equal(res.status, 'OK', `results should be OK, but got error: ${res.error}`)

                    assert(res.data && res.data.length > 0, `should return data array`)

                    done()
                })
                .catch(done)

        })

        it('should create', done => {
            api.create(name, surname, email, username, password, token)
                .then(res => {

                    assert.equal(res.status, 'OK', `results should be OK , but got error: ${res.error}`)

                    assert(res.data && res.data.id, 'should return data id')

                    done()
                })
                .catch(done)
        })

        it('should retrieve', done => {
            let id
            api.create(name, surname, email, username, password, token)
                .then(res => {

                    assert.equal(res.status, 'OK', `results should be OK , but got error: ${res.error}`)

                    assert(res.data && res.data.id, 'should return data id')

                    id = res.data.id

                    return api.retrieve(id, token)
                })
                .then(res => {

                    assert.equal(res.status, 'OK', `results should be OK , but got error: ${res.error}`)

                    assert.equal(res.data.name, name, `${res.data.name} should be same as name --> ${name}`)

                    assert.equal(res.data.surname, surname, `${res.data.surname} should be same as surname --> ${surname}`)

                    assert.equal(res.data.email, email, `${res.data.email} should be same as email --> ${email}`)

                    assert.equal(res.data.username, username, `${res.data.username} should be same as username --> ${username}`)

                    assert.equal(res.data.password, undefined, `password should be undefine, but return something`)

                    assert.equal(res.data.id, id, `${res.data.id} should be same as id --> ${id}`)

                    done()
                })
                .catch(done)
        })

        it('should update', done => {
            let newPassword = "paco",
                newUsername = "paquito",
                id
            api.create(name, surname, email, username, password, token)
                .then(res => {

                    assert.equal(res.status, 'OK', `results should be OK , but got error: ${res.error}`)

                    assert(res.data && res.data.id, 'should return data id')

                    id = res.data.id

                    return api.update(id, name, surname, email, username, password, newUsername, newPassword, token)
                })
                .then(res => {

                    assert.equal(res.status, 'OK', `results should be OK , but got error: ${res.error}`)

                    return api.retrieve(id, token)
                })
                .then(res => {

                    assert.equal(res.status, 'OK', `results should be OK , but got error: ${res.error}`)

                    assert.equal(res.data.name, name, `${res.data.name} should be same as name --> ${name}`)

                    assert.equal(res.data.surname, surname, `${res.data.surname} should be same as surname --> ${surname}`)

                    assert.equal(res.data.email, email, `${res.data.email} should be same as email --> ${email}`)

                    assert.equal(res.data.username, newUsername, `${res.username} should be same as newUsername --> ${newUsername}`)

                    assert.equal(res.data.password, undefined, `password should be undefine, but return something`)

                    assert.equal(res.data.id, id, `${res.data.id} should be same as id --> ${id}`)

                    done()
                })
                .catch(done)
        })

        it('should delete', done => {

            api.create(name, surname, email, username, password, token)
                .then(res => {

                    assert.equal(res.status, 'OK', `results should be OK , but got error: ${res.error}`)

                    assert(res.data && res.data.id, 'should return data id')

                    id = res.data.id

                    return api.remove(id, username, password, token)
                })
                .then(res => {

                    assert.equal(res.status, 'OK', `results should be OK , but got error: ${res.error}`)


                    return api.retrieve(id, token)
                })
                .then(res => {

                    assert.equal(res.status, 'KO', `results should be KO becouse user does not exist`)

                    done()
                })
                .catch(done)
        })
    })

    after(() => {

        mongoose.disconnect()
    })

})