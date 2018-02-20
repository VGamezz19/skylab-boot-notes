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

Para realizar una peticion `Fetch` con React, se realiza de esta forma:

````javascript
fetch('http://taller-angular.carlosazaustre.es/empleados')
      .then((response) => {
        return response.json()
      })
      .then((empleados) => {
        this.setState({ empleados: empleados })
      })
````

El final de la respuesta ha de setear el `state` para que efectue el `live circle` de React.

Existen unos metodos que nos proporciona React muy importantes para gestionar cuando se monta el componente, se desmonta, ect.

- **componentWillMount()** Se lanza antes de que se renderice el componente
- **componentDidMount()** Se lanza despues del renderizado del componente
- **shouldComponentUpdate()** Devuelve con un valor si el componente debería actualizarse
- **componentWillUnMount()** Se lanza antes de que el componente se elimine.

Por ejemplo, podriamos usar el metodo `componentWillMount` para realizar una peticion importante del componente.

Como seguramente esta peticion tardara mucho, tendremos que poner un pequeño mensage dicendo que estan cargando datos.
Simplemente poniendo un condicional dentro del `Render()`

```javascript 
render() {
    if (this.state.empleados.length > 0) {
      return (
        <div className="container-fluid">
          <EmpleadoList listado={this.state.empleados} />
        </div>
      )
    } else {
      return <p className="text-center">Cargando empleados...</p>
    }
  }

```

### React-Routing

En react se podria hacer un enrutado con un par de condicionales y una logica de compoenentes que fueran alternandose segun donde haces click.
Pero tambien existe un paquete que nos facilita a la hora de hacer un `enrutado` de nuestro componentes.

para usarlo primeramente, si estamos en `react-create-app` usar `npm i --save react-router-dom`. Si estamos trabajando sin ninguna herramienta CLI, simplemente descargarse el codigo de `router-dom` y enlazarlo en el HTML como una libreria.

Ejemplo:

```javascript
        return <BrowserRouter>
            <div className="container">
                <NavBar />
                <Route exact path="/" component={Jumbotron} />
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage} />
            </div>
        </BrowserRouter>
        //ooo...
        return <HashRouter>
            <div className="container">
                <NavBar />
                <Route exact path="/" component={Jumbotron} />
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage} />
            </div>
        </HashRouter>
```

En el path `/` se ha de poner la propiedad `exact` para que sea exactamente `/` (y no `/about` ya que empieza por `/`)

`BrowserRouter` el navegador y el servidor navegan.

`HashRouting` Añade un #, y ancla la pagina. Puedes navegar pero la navegacion la realiza El cliente.

Para poder navegar por las rutas creadas, tendremos que crear elementos `cliqueables` con estas propiedad.
NavLink ?  Cambio de rutas simulado. para que no detecte el navegador que no es una ruta de servidor

```javascript
<li>
    <NavLink to="/" activeClassName="active">Home</NavLink>
</li>
```

la propiedad `activeClassName`($laClase que añadira solo cuando activemos ese "NavLink").

#### Pasar informacion por la URL

Si queremos transferir informacion por la `URL`, lo tendremos que hacer de esta forma:

```javascript
<Route path="/search/:query" component={Results} />
```

Dentro del componente `Results` recivira la ruta de esta forma 

```javascript
    loadBeers(query) {
        beersApi.search(query) //Api-Client realizada...
            .then(beers => this.setState({ beers }))
            .catch(console.error)
    }

    componentDidMount() {
        
        this.loadBeers(this.props.match.params.query)
    }

    componentWillReceiveProps(props) {
        this.loadBeers(props.match.params.query)
    }
```

En este caso he utilizado los dos `metodos` de react para recoger la `query`.

**¿Porque?**

La primera busqueda que hagamos, mostrara el componente por primera vez y recogera la `this.props.match.params.query` del metodo `componentDidMount`. Pero si volvemos a realizar otra busqueda. El componente **YA SE HA MONTADO PREVIAMENTE** y no volvera a ejecutar el metodo `componentDidMount`. sino el `componentWillReceiveProps(props)`

#### Modificar la URL desde un componente.

Si queremos modificar la URL de forma que la libreria `react-routing` lo detecte. tendremos que seguir dos pasos.
Primeramente, en el componente padre, tendremos que definir que el componente que va a efectuar esa modificacion de la URL contiene --> `withRouter()`

```javascript
const { HashRouter, Route, NavLink, withRouter } = ReactRouterDOM
const SearchWithRouter = withRouter(Search)
```

En este caso el componente hijo `Search` iba a realizar esa "busqueda".  Apartir de este momento, para referirnos al componente `Search`, tendra que ser `SearchWithRouter`, para poder heredar las caracteristicas de un componente `withRouter`

Finalmente, en el componente hijo `Search`, al accionar, simplemente poniendo
```javascript
this.props.history.push(`/search/${this.state.query}`)
```
estaremos `pusheando` a nuestro `path actual` la string especificada anteriormente.

### ReactCLI

Una base para trabajar con ReactJSX + Node.

para crear una aplicacion efectuaremos el comando --> `npx create-react-app my-app`


 - ⚠️ Para añadir nuestro componenetes, creamos en nuestro **/src** una carpeta `components`

Para añadir Bootstrap, librerias, estilos genericos, etc, se ha de añadir todo dentro de la carpeta `Public`. 
y despues abrimos el  `index.html` de la misma carpeta, y **añadimos el link** de las dependencias.