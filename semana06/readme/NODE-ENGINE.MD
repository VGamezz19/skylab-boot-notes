## [← |](https://github.com/VGamezz19/skylab-boot-notes/blob/master/semana06/)   Node-Engine


Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

Lo que viene siendo un servidor que puede correr en diferentes `threads` asyncronamente.
trabaja con eventos que non-blocking. La posibilidad de trabajar asyncronamente en disco.

### Threads (hilos)
Los otros servidores más antiguos, se limitan ha ejecutar peticiones `syncronamente`, haciendo que las peticiones se bloqueen y que el tiempo de ejecucion (la respuesta del servidor) tarde más.


![Image](https://github.com/VGamezz19/skylab-boot-notes/blob/master/semana06/public/threads.png)

Esto es gracias a (aparte del motor `V8`) a [libuv](http://libuv.org/) una libreria que permite a Node ejecutar los eventos Asyncronamente y hacer funcionar el `event loop`


### Engine Node
![Image](https://github.com/VGamezz19/skylab-boot-notes/blob/master/semana06/public/engine.png)

Como podemos ver en la anterior imagen, node esta compuesto por 3 capas.
- 1. La primera y más exterior es donde nosotros trabajaremos, donde efectuaremos nuestro codigo JS.

- 2. La segunda capa es donde se hacen los `Bindings` entre la primera capa JS y la 3era e ultima capa Engine/Core de Node.

- 3. La ultima capa de Engine se encuentra el motor de **Crhome V8** y la libreria **libuv**.

Se esta trabajando para que el motor `V8` compile ficheros `Asyncronamente`, para que séa más rapido y más potente.


### Event Loop
![Image](https://github.com/VGamezz19/skylab-boot-notes/blob/master/semana06/public/evenLoop.png)
