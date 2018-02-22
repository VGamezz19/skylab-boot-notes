## [← |](https://github.com/VGamezz19/skylab-boot-notes/blob/master/semana06/)   Node-Express

Express nos aporta una facilidad de generar y servir peticiones HTTP. (servidor web)

Ejemplo:

```javascript
const express = require('express')
const app = express()

app.listen(8000, () => console.log('server listen on $port --> 8000'))
//node .
```

Moment --> fetchas

BodyPArser expres --> Modelware ('/',midelhare,CallBack(){
    //code you know
})

-----
podemos crear un fichero `.env` para especificar el enviroment de el servidor especifico.
por ejemplo, con esto podemos definir las varibles de entorno de cada servidor que vayamos a levantar.
y luego acceder a ellas con

process.evn.${nombre-variables}

con el paquete dotenv