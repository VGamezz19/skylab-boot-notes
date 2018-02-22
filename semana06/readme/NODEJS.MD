# [← |](https://github.com/VGamezz19/skylab-boot-notes/blob/master/semana06/)   NodeJS

## Init

Para más informacin mirar [Node](https://nodejs.org/en/docs/)

Para poder hacer `debug` del codigo en `NodeJS` --> `npm i -g devtool`
para utlizarlo --> `$ devtool ${nombre-del-fichero} {parametros-del-fichero-en-la-ejecucion}`

## Caracteristicas

Si ejecutarmos `$ node` en nuestra terminal, se ejecutara la consola de node y podremos efectuar testeos como si fuera la consola de google crhome.

Si queremos ejecutar un fichero con `node` hemos de seguir este comando --> `$ node ${nombre-fihcer}`

🚨 Como dato: se fectuamos `node .` se ejecutar por defecto el `index.js` de donde estemos en la consola.

## CommonJS

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

## NodeJS

para poder obteer los parametros que me pasan al ejecutar `node`. por ejemplo `$ node ${nombre-fichero} 1 2 3` los tendre que recuperar con la propiedad `process.argv`

- Ejemplo:

```javascript
//node ${this-flie} 1 2 3

console.log(process.argv) //[node,path, ...arguments]

const [node, path, ...nums] = process.argv

console.log(nums) //[1,2,3]
```

### fs

nos permite manipular archivos locales, asyncrona o syncronamente.
-- [Doc fs](https://nodejs.org/api/fs.html) --

### path

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

### http

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