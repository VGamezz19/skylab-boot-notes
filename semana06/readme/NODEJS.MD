## [← |](https://github.com/VGamezz19/skylab-boot-notes/blob/master/semana06/)   NodeJS


### Init.

Para más informacin mirar [Node](https://nodejs.org/en/docs/)


Para poder hacer `debug` del codigo en `NodeJS` --> `npm i -g devtool`
para utlizarlo --> `$ devtool ${nombre-del-fichero} {parametros-del-fichero-en-la-ejecucion}`

### Caracteristicas

Si ejecutarmos `$ node ` en nuestra terminal, se ejecutara la consola de node y podremos efectuar testeos como si fuera la consola de google crhome.

Si queremos ejecutar un fichero con `node` hemos de seguir este comando --> `$ node ${nombre-fihcer}`. 

🚨 Como dato: se fectuamos `node .` se ejecutar por defecto el `index.js` de donde estemos en la consola.

### CommonJS

Node implemente la modularizacion de sus archivos, usando la libreria `commonJS`.

```javascript
// ./exportableCode.js
module.exports = function() {
    //Some code exportable.
}

// ./importableCode.JS
const codeExport = require('./exportableCode') 
//Isn't necessari to put the extension file, becouse by defould
//Node take files with .js, if there isn't a JS, we need to pot it. (in the require)

codeExport()
```

### NodeJS

para poder obteer los parametros que me pasan al ejecutar `node`. por ejemplo `$ node ${nombre-fichero} 1 2 3` los tendre que recuperar con la propiedad `process.argv`

- Ejemplo:

```javascript
//node ${this-flie} 1 2 3

console.log(process.argv) //[node,path, ...arguments]

const [node, path, ...nums] = process.argv

console.log(nums) //[1,2,3]
```

#### fs

nos permite manipular archivos locales, asyncrona o syncronamente.
-- [Doc fs](https://nodejs.org/api/fs.html) --

#### path

The path module provides utilities for working with file and directory paths.
-- [Doc path](https://nodejs.org/api/path.html) --

Ejemplo :

```javascript
const fs = require('fs')
const path = require('path')

module.exports = function(_path, ext, callback) {
    fs.readdir(_path, (err, files) => {
        if (err) throw err

        const filtered = files.filter(file => path.extname(file) === `.${ext}`)
        callback(filtered)
    })
}
```

Este codigo, se esta efectuando un filtrado de ficheros segun la extension. Con el paquete `fs` usamos el metodo `readdir(path, callback(err,data))`. en `data` nos llegara un `array` de los nombre de los ficheros. Los filtramos y usamos `path.extname` para compararlo con la extension seleccionada.
  

#### http

Para efectuar diferentes protocolos `GET, POST, PUT, DELETE, PATCH`.
-- [Doc http](https://nodejs.org/api/http.html) --

Ejemplo metodo GET:

```javascript
//node . 'http://google.com'
const http = require('http')
const url = process.argv[2]

http.get(url, (res) => {

    res.setEncoding('utf-8')

    res.on('finished', () => console.log("finishSocket"))

    res.on('data',() => console.log("come data"))

    res.on('error', () => console.error("some error"))

    res.on('end', () => console.log("End conecction"))
})
```

⚠️ Hemos de tener en cuenta que si la respuesta (`res`) es muy grande, me llegara en `chunks` (trozos). y tendre que recogerla todoa de esta forma:
```javascript
let rawData = ''
res.on('data',(chunk) => {
        rawData += chunk
    })
``` 

#### net.createServer()

-- [Doc net](https://nodejs.org/api/net.html) --

Ejemplo:
```javascript
    const net = require('net')

function warrant2Digits(number) {
    return number < 10 ? '0' + number : number
}

const server = net.createServer(socket => {
    const date = new Date

    const formattedDate = `${date.getFullYear()}-${warrant2Digits(date.getMonth() + 1)}-${warrant2Digits(date.getDate())} ${warrant2Digits(date.getHours())}:${warrant2Digits(date.getMinutes())}\n`
    
    socket.on('close', () => console.log('closing socket')) //evento on CLOSE
    
    //socket.write(formattedDate)

    socket.end(formattedDate)
})

const port = process.argv[2]

server.listen(port, () => console.log(`time server running on port ${port}`))

// $ node 1_timeNet 8000
```

En este codigo estamos creando un servidor `TCP`. y simplemente, cuando alguien se conecte por el puerto especificado, el servidor efectuara un `dateFormat` (creado por nosotros) y pasara a ejecutar el `socket.end()` lo que hace es enviar los datos pasandos por el handler, y despues cerrar la conexion.

🚨 Es importante **remarcar** que los metodos `on` generar **Eventos**

#### http.createServer()

-- [Doc http](https://nodejs.org/api/http.html) --

Ejemplo:
```javascript
const http = require('http')
const map = require('through2-map')

const server = http.createServer((req, res) => {
    if (req.method === 'POST')
        req.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res)
})

const port = process.argv[2]

server.listen(port, () => console.log(`http uppercaserer running on port ${port}`))
```

En este codigo estamos creando un servidor `HTTP`, y conjunto con el paquete `through2-map` estamos pasando a Uppercase un fichero que nos pasan por `POST`.

#### Diferencias entre HTTP y NET


`http.createServer()` configura un servidor que maneja el protocolo `HTTP`:
- Get --> get data
- Post --> post data
- Put --> update data 
- Delete --> delete data
- Patch --> update data 

net.createServer () crea un servidor que simplemente entiende cuándo ha ocurrido una conexión TCP, y se han transmitido datos, etc., pero no sabe nada sobre si se ha recibido una solicitud HTTP válida, etc.
`socker/WebSocket` usan el protocolo `TCP`

 *WebSocket es una tecnología que proporciona un canal de comunicación bidireccional y full-duplex sobre un único socket TCP* 