# [← |](https://github.com/VGamezz19/skylab-boot-notes/blob/master/semana07/)   MongoDB

[MongoDB](https://docs.mongodb.com/) es una BBDD NoSQL que trabaja en formato `json`.

## Instalacion

`brew install mongodb`

Levantar el servicio de mongoDB

`brew services start mongodb`

`brew servicers stop mongodb`

`brew services restart mongodb`

## Cliente

HAy dos formas de acceder al cliente de `mongo`:

usando la interfaz grafica `robomongo` o mediante consola `$ mongo`

### $ mongo

al ejecutar el comandpo `mongo` en nuestra terminal, accederemos al cliente de mongo. Para insertar datos, primeramente tendremos que crear/posicionarnos en una BBDD

`use nameBBDD`

y para insertar datos en una nueva collecion usamos el comando [insertMany](https://docs.mongodb.com/manual/reference/method/db.collection.insertMany/):

`db.nombreColleccion.insertMany([array-Objects])`

## MongoDB - NodeJS

`yarn add mongodb`

```js
const { MongoClient } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017', (err, conn) => {
    if (err) throw err

    const db = conn.db('bootcamp')

    app.get('/', (req, res) => {

        db.collection('users').find().toArray((err, data) => {
            if (err) throw err
            res.json(data)
        })
    })

    const port = process.env.PORT
    app.listen(port, () => console.log(`server runnning on port ${port}`))

    process.on('SIGINT', () => {
        console.log('stopping server')

        conn.close()

        process.exit()
    })
})
```

Es importante levantar el `servidor` dentro del callback de la conexion de `MongoClient` para no tener problemas.

Por defecto, siempre tendremos que especificar que en el evento `.on('SIGINT'...` parar los servicions de `conn` y `process`

```js
    process.on('SIGINT', () => {
        console.log('stopping server')

        conn.close()

        process.exit()
    })
```

### Metodos MongoDB-Node
