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

⚠️ Tambien es importante remarcar, que necesitamos levantarlo desde un "mini" servidor web


### Caracteristicas de React

Siempre Hemos de crear un componenete con dotacion UpperCammelCase.

- ¿Que tipos de Componentes existen?

Existen dos tipos de componenetes. el `instanciado` y el `functional` (smart o dump).

````javaScript
//Dump
function ExampleFunctionalComponent() {return()}

//Smart
class ExampleInstansComponent extends React.Component {
    constructor() {
        super()
        this.state = { 
            //Any State
        }
    }
    render () {
        //Recicle JSX template.
    }
}
````

Las diferencias más claras es que el componenete `funcional` se define como `funcion` y solo **Printara**. No ha de tener ninguna logica.
Contrareamente, el Componente `Smart` tiene metodos propios, estados, ect.

⚠️ Un Componente `Smart` heredara todos los metodos `live recicle` de React, contendra logica (`metodos`) y tendra la posibilidad de contener `state`.

Para que un componente `Smart` herede los metodos de React, necesita :
- 1 - `extends React.Componente`
- 2 - En el constructor de la class, añadir `super()`

Es importante remarcar, que siempre que el `this.state` de un componente se modifique, se ejecutara el `Render()`, volviendo a ejecutar la "**rueda**"

### this.setState

this.setState es un metodo que heredamos de `React.Component`. Hemos de tener en cuenta que la actualizacion del `state` la hace `asyncronamente` y no podremos utilizar los datos de forma `syncrona` (en el mismo accionador donde hemos cambiado ese estado).

 - Formas de cambiar el **`state`**

Simplemente pasandole un Objeto.

 ```javascript
 class TaskInput extends React.Component {
    constructor() {
        super()
        this.state = {
            input: ''
        }
    }

    keepInput = e => this.setState({ input: e.target.value })
 } 
 ```

 Efectuando un calculo con el Estado anterior, con lo que quieres añadir...
 Siempre que usemos el `prevState`, **NUNCA** hemos de devolver el mismo `prevState` modificado, sino un nuevo valor.

 ```javascript
class TaskApp extends React.Component {
    constructor() {
        super()
        this.state = {
            tasks: []
        }
    }

    addTask = (task) => {
        this.setState(prevState => ({ tasks: [...prevState.tasks, task] }))
    }

    doneTask = (idTask) => {
        this.setState(prevState => ({
            tasks: prevState.tasks.map((task, _id) => {
                if (idTask === _id) {
                    task.done = true
                    return task
                }
                return task
            })
        }))
    }
}
 ```

**ATENTO** Dentro del Handdler del metodo `setState` estoy cogiendo el estado sin modificar `prevState` y lo "mapeo" con la informacion actual. Si nos fijamos, despues de `=>` tenemos unos `(`, esto se hace para decirle a la `arrow function` que los proximos `{ }` no son de su cuerpo, sino el inicio de un `Objeto`. Mucho cuidado con esto! puede causar mucha confusion.

```javascript
addTask = (task) => {
        this.setState(prevStates => ({ tasks: [...prevStates.tasks, task] }))
    }
```

ES IGUAL

```javascript
addTask = (task) => {
        this.setState(prevStates => { 
            return {
                tasks: [...prevStates.tasks, task] 
            }
        })
    }
```


### Fetch & ComponentDid/Will...Mount/Unmount, etc...

Para más informacion mirar post de [CarlosAzaustre](carlosazaustre.es/consumiendo-un-api-rest-desde-react-js-con-ecmascript6/)


ComponentDidMount -->

React-Routing -->

NavLink ?  Cambio de rutas simulado. para que no detecte el navegador que no es una ruta de servidor

<NavLink to='{la ruta}'> Home </NavLink>    Y trae una propiedad  ques es --> activeClassName($laClase que añadira solo cuando activemos ese "NavLink").

HashRouting --> Añade un #, y ancla la pagina. Puedes navegar pero la navegacion la realiza El cliente.

ReactCLI -->npx create-react-app my-app

Una base para trabajar con React + Node

--> Para añadir nuestro componenetes, creamos en nuestro /SRC una carpeta "components"

Para añadir Bootstrap, hemos de añadir el framework dentro de la carpeta Public, añadimos el Vendor
y despues abrimos el  index.HTML de la misma carpeta, y añadimos el link de las dependencias.






