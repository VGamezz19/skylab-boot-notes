# [← |](https://github.com/VGamezz19/skylab-boot-notes/blob/master/semana06/)   Node-Express

Express nos aporta una facilidad de generar y servir peticiones HTTP. (servidor web)

Ejemplo:

```javascript
const express = require('express')
const app = express()

app.listen(8000, () => console.log('server listen on $port --> 8000'))
//node .
```

`Express` nos facilita mucho la vida, y si queremos hacer alguna peticion del protocolo HTTP, tendremos que usar el metodo lexico del mismo:

Ejemplo:

```javascript
app.get('/', /* middleware */, (req, res) => res.send('Hello, GET!')-)

app.post('/', (req, res) => res.send('Hello, POST!'))

app.put('/', (req, res) => res.send('Hello, PUT!'))

//...
app.listen(//"...)
```

⚠️  Un Middleware es una transicion intermedia antes de terminar la peticion. En los casos anteriores, seria antes de efectuar el callBack de respuesta, y la deficion de la ruta.

Ejemplo:

```javascript

const requestTime = function (req, res, next) {
  req.requestTime = Date.now();
  next(); //Sin este NEXT, nunca se ejecutaria la proxima funcion.
  //Escribimos NEXT por convenio, refiriendose al proximo Middleware o callBack.
};

app.get('/', requestTime, function (req, res) {
  var responseText = 'Hello World!';
  responseText += 'Requested at: ' + req.requestTime + '';
  res.send(responseText);
});
```

## BodyParser metodos

Si queremos enviar datos que no sea text, tendremos que usar una libreria de Express llamada [body-parser](https://github.com/expressjs/body-parser)

- bodyParser.urlencoded({ extended: false })

devuelve un middleware y solo parseara en `urlencoded` y solo mirara el contenido `POST` que le lleve como urlencoded. Este parseo solo accepta `UTF-8`

- bodyParser.text()

- bodyParser.raw()

middleware que solo parsea a `Buffer` (Exadecimal code, lenguaje maquina)

- bodyParser.json([options])

Tambien podemos configurar nuestra `app` con el tipo de `parseo` que va a tratar `app.use(bodyParser.json());`. De esta forma, no tendremo que enlazar todas las peticiones de la api con el middleware bodyParser, estaran incluidas automaticamente.

## Env

Existe una libreria llamada `dotenv` que nos permite definir las variables de entorno del servidor, para utilizarlas en la ejecucion de nuestro programa Node.

Generamos un fichero `.env` en nuestra raiz. lo rellenamos con la informacion:

````txt
PORT=5000
DATA_PATH=./data/staff.json
````

y finalmente implementamos la informacion con un `dotenv.config()` al principio de `index.js` (para que sea lo primero que ejecutemos).

Una vez realizado esto, podremos usar las variables de entorno, (en este caso PORT y DATA_PATH) en nuestro programa.

Ejemplo:

```js
const PORT = process.env.PORT || 5000
            //process.evn.${nombre-variables}
```