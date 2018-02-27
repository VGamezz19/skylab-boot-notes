# [← |](https://github.com/VGamezz19/skylab-boot-notes/blob/master/semana07/)   PUG

Pug es un lenguaje para renderizar template en la parte back-end.

`npm i -s pug`

para poder usarlo en un entorno `Express`, podemos configurarlo de la siguiente manera:

```js
const express = require('express')
const app = express()
app.set('view engine', 'pug')
```

especificando a app que va a trabajar con `views` y que tendra que renderizar formato `pug`

-- Mirar [documentacion](https://pugjs.org/api/getting-started.html)

## Variables

Podemos enviar variables a la template pug por `Express` de esta forma:

```js
//index.js
app.get('/', (req, res)=> {
    res.render('index', {test : 'Hello World'}
})
```

y directamente podremos acceder a la palabra `test` que contendra `Hello World`

Para más informacion, mirar la documentacion oficial, esta muy completa.