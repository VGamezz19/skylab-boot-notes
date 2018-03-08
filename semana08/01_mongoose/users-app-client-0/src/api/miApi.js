import api from 'users-api-client'

const { REACT_APP_API_PROTOCOL, REACT_APP_API_HOST, REACT_APP_API_PORT } = process.env

api.protocol = REACT_APP_API_PROTOCOL
api.host = REACT_APP_API_HOST
api.port = REACT_APP_API_PORT

export default api