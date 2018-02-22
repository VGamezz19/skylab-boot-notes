# [← |](https://github.com/VGamezz19/skylab-boot-notes/blob/master/semana06/)   NodeServer

## net.createServer()

-- [Doc net](https://nodejs.org/api/net.html) --

Ejemplo:

```javascript
    const net = require('net')

function warrant2Digits(number) {
    return number < 10 ? '0' + number : number
}

const server = net.createServer(socket => {
    const date = new Date

    const formattedDate = `${date.getFullYear()}-${warrant2Digits(date.getMonth() + 1)}-${warrant2Digit(date.getDate())} ${warrant2Digits(date.getHours())}:${warrant2Digits(date.getMinutes())}\n`

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

## Ejemplo TCP Socket server

```javascript
//Servidor.js
//...
//Cuando el usuario que se conecte al servidor nos envie "data"...
socket.on('data', data => {
        console.log(`${socket.remoteAddress}:${socket.remotePort} -> ${data.toString().substring(0, 100)}`)

        //El servidor emite informacin cuando ha recivido la peticion del cliente.
        socket.write('ACK')
    })

    socket.on('error', console.error)
//...

//Cliente.js
//...
//Generamos un nuevo cliente Socket
const client = new net.Socket();

//Se conecta al puerto y ubicacion del servidor TCP
client.connect(3000, 'localhost', () => {
    //Envia la "data"
    client.write('Vota Tony Pepperoni!!')
})
//Evento del cliente, que recivira el ACK del servidor
client.on('data', data => console.log(data.toString()))
//...
```

Podemos interpretar que Socket es un enchufe bidireccional, que podemos recivir y enviar datos en un mismo evento.

### http.createServer()

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

#### Headers HTTP

podemos escribir el Header con el que respondera el servidor. el estado con el que respondera y que tipo de dato enviara.

Ejemplo:

```javascript
        //Vamos a responder en formato JSON!
        res.writeHead(200, { 'Content-Type': 'application/json' })

        res.end(JSON.stringify( data))
```

-- [Codigos de Estado HTTP](https://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_de_estado_HTTP)

### Diferencias entre HTTP y NET

`http.createServer()` configura un servidor que maneja el protocolo `HTTP`:

- Get --> get data
- Post --> post data
- Put --> update data
- Delete --> delete data
- Patch --> update data

net.createServer () crea un servidor que simplemente entiende cuándo ha ocurrido una conexión TCP, y se han transmitido datos, etc., pero no sabe nada sobre si se ha recibido una solicitud HTTP válida, etc.
`socker/WebSocket` usan el protocolo `TCP`

 *WebSocket es una tecnología que proporciona un canal de comunicación bidireccional y full-duplex sobre un único socket TCP*



Express nos aporta una facilidad de generar y servir peticiones HTTP. (servidor web)
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