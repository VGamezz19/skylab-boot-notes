
## [← |](https://github.com/VGamezz19/skylab-boot-notes/blob/master/semana03/)   Fetch - Promise


### [Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)

Fetch Ejecutara una peticion a un servidor mediante una URL de forma asincrona.
Para controlar el flujo de esa ejecucion, es necesario el uso de `then`.
`then` tratara el dato que se le es retornado. por ejemplo, en esta peticion:
```javascript

const headers = { Authorization: 'Bearer ' + token }
fetch(url, { headers })
    .then(res => {
        return res.json()
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => console.error('Error:', err))
```
En el primer `then` se puede ver que estamos pasando a formato `json` los datos devueltos de la peticion `XMLHttpRequest`
y en el segundo `then` mostramos esos datos ya convertidos en `json` por consola.

es **Importante** remarcar que para seguir concatenado `then`s, en el anterior `then` has de retornar una **Promise**

para poder añadirle **timeout** mirar este [link](https://davidwalsh.name/fetch-timeout)


### Promise

![Image](https://github.com/VGamezz19/skylab-boot-notes/blob/master/semana03/public/promise.png)

Ejemplos:

```javascript 
const concat = new Promise((resolve, reject) => {
        console.log("init-loader") 
        resolve("a")
    })
    .then(res => res + 'b') //ab
    .then(res => res + 'c') //abc
    .then(res => res + 'd') //abcd
    .then(res => console.log(res)) // return --> abcd
    .finally(res => console.log("finish-loader")) 
    .catch(err => console.error(err))
```

`.finally()` Ejecutara  el código indicado cuando el estadado de la `promise` sea “reolved”.
