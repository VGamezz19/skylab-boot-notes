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


http.get(url, (res) => {

    res.setEncoding('utf-8')

    res.on <<----

socket --> TCP/IP
WebSocket --> ??
serverConect --> ??
http --> ??

GET
PUT
PUT
DELETE
PATCH

HTTP COLLECT ---> collect