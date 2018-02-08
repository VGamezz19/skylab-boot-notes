## [← |](https://github.com/VGamezz19/skylab-boot-notes/blob/dev/course/semana04/)   React - Babel

React trabaja con el concepto VirtualDOM, genera una foto de como esta actualmente el `DOM` y si el estado del componente se modifica, revisa si hace falta "actualizar la foto" (`render()`).
React se encarga de actualizar nuestro DOM a tiempo Real.

![Image](https://github.com/VGamezz19/skylab-boot-notes/blob/dev/course/semana04/public/squeme-virtualDome.png)

Como podemos ver en la foto, nosotros simplemente trabajaremos con el componente y sus estados. Pero react lo convertira en un `DOM Virtual`. La ventaja de esto, como se ve en la foto, es que puede trabajar en cualquier tipo de browser y es facilmente `testeable`.

### One-way data flow

Los componentes de React se estructuran siguiendo una gerarquia de padres ha hijos.

![Image](https://github.com/VGamezz19/skylab-boot-notes/blob/dev/course/semana04/public/one-way-data.png)

Es muy importante entender que los `datos` van de **padre a hijos** y los `eventos` capturados por los hijos, van de **hijos a padre**

Por eso se denomina `One-way data flow`, han de seguir un unico camino recursivo, iterando los datos transmitidos, con los eventos capturados.

![Image](https://github.com/VGamezz19/skylab-boot-notes/blob/dev/course/semana04/public/way-data-flow.png)

## Ejemplo:

![Image](https://github.com/VGamezz19/skylab-boot-notes/blob/dev/course/semana04/public/exampleReact.png)

### JSX
Forma de escribir el `html` dentro de tus fichero `JS`. La **X** viene de `XML`, asique es muy importante cerrar los `tags` (`<tag/>`) o nos tirara un `error`.

### Babel

React trabaja con la libreria `babel`. `babel` es un compilador de codigo que nos permitira **interpretar** los ficheros `JSX` para que el navegador pueda interpretarlo.

- ¿Como se usa?

Sin tener `Back-End`, inportamos la `libreria` a nuestro proyecto, y lo linkamos en nuestro `html`. despues, es necesario especificar a `babel` que archivo va ha tener que interpretar, de esta forma:
```html
    <script src="vendor/babel/6.26.0/babel.min.js"></script>
    <script src="scripts/main.jsx" type="text/babel"></script>
```
x
⚠️ Tambien es importante remarcar, que necesitamos levantarlo desde un "mini" servidor web


### Caracteristicas de React

Class --> ClassNmae (a la hora de añadir una class en el HTML)


al corfear componenetes, se nominan en UpperCammelCase `ExampleComponent(){}`

un componente con Estado, necesita un Render()

Al generar un componente extendido de React, es necesario llamar al metodo `super()` para instanciar todos los metodos de React. 

//This desde el HTML --> Bind o Arrow. poruqe React le añade un "call(undefined)" ya qie sino le pasaria todo el objeto HTML

//Es importante saber que el this.setState lo hace de forma asyncrona. y no es recomendable intentar capturar el evento, o poner alguna callback dentro de esa ejecucion, ya que despues de modificar ese estado, efectuara el renderizado.


Todo conponente que almacena datos, tiene un state, y si tiene statue, estara generada con una Class.


Componente Smart/ Dump --> Inteligentes con responsabilidades, o que solo printan informacion.



REACT ROUTE

Fetch -->
carlosazaustre.es/consumiendo-un-api-rest-desde-react-js-con-ecmascript6/

Solo en los componentes Smaft.

ComponentDidMount -->

React-Routing -->