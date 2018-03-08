# [← |](https://github.com/VGamezz19/skylab-boot-notes/blob/master/semana08/) JWT

El token lo usaremos para autentificar dentro del servidor.

El cliente tendra un token cifrazo, con el cuerpo `{}` y firmado con un `secret`. lo unico que enlaza ese token con el `servidor` es ese secreto. que solo sabe el servidor.

Ejemplo usando jsonwebtoken npm:

```js
const jwt = require('jsonwebtoken')

const theSecret = 'a secret phrase'

const token = jwt.sign({ message: 'Hello, World!' }, theSecret, { expiresIn: 3 })

console.log(token)

setTimeout(() => {
    const payload = jwt.verify(token, theSecret)

    console.log(new Date(payload.iat * 1000))
    console.log(new Date(payload.exp * 1000))

    console.log(`token expires in ${payload.exp - payload.iat}s`)

    console.log(payload)
}, 1000)
```