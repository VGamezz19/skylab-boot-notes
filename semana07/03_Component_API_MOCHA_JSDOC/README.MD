# [← |](https://github.com/VGamezz19/skylab-boot-notes/blob/master/semana07/) Componeting App Task

Codigo componetizado Senior, Task + TaskData + TaskLogic + APIServer + --> TascAPIClient

![IMG](https://github.com/VGamezz19/skylab-boot-notes/blob/master/semana07/public/taskDraw.JPG)

## Task

Se ha creado un nuevo tipo de dato llamado `Task` con las `Class` ES6

### Constructor

```js
class Task {
    /**
     *
     * @param {String} id - The task id
     * @param {String} title - The task title
     * @param {String} description - The task description
     * @param {Number} status - The task status
     */
    constructor(id, title, description, status) {
        this.id = id
        this.title = title
        this.description = description
        this.status = status
    }

    //. . .
```

### Metodos y Varaibles Estaticas

Los metodos estaticos son aquellos que seran accesibles para todos los datos creados con ese tipo de dato.

```js
    //. . .

    /**
     * Clones a task
     *
     * @param {Taks} param0 - The task to clone from
     */
    static from({id, title, description, status}) {
        return new Task(id, title, description, status)
    }
}

Task.TODO = 0
Task.DOING = 1
Task.REVIEW = 2
Task.DONE = 3

```

Cualquier dato creado con `new Task(...)` tendra los valores Todo = 0, Doing = 1, etc.

## TaskData

En esta capa definimos los metodos de nuestro nuevo tipo de dato

Tambien especularemos todo tipo de errores, y validaciones.

### Validations

```js
    /**
     * Validates task entity has the correct fields
     *
     * @param {Task} task - The task to validate
     *
     * @throws {Error} - If task fields are not valid
     */
    _validateTask(task) {
        if (typeof task !== 'object' || !task instanceof Task) throw Error(`task cannot be ${task}`)

        const { title, description, status } = task

        if (typeof title !== 'string' || title.trim().length === 0) throw Error(`title cannot be ${title}`)

        if (typeof description !== 'string' || description.trim().length === 0) throw Error(`description cannot be ${description}`)

        if (typeof status !== 'number') throw Error(`status cannot be ${status}`)
    }
```

### Metodos

```js
    /**
     * Inserts a task in storage
     *
     * @param {Task} - The task to insert in store
     *
     * @throws {Error} - If task fields are not valid
     */
    insert(task) {
        this._validateTask(task)

        task.id = uuidv4()

        const _task = Task.from(task)

        this.tasks.push(_task)

        return task.id
    }
```

En todos los metodos, generamos un nuevo `Task` con el **metodo statico** `from()` para que no tratemos con la referencia que nos pasan, sino con un nuevo objecto (y que sea nuestro).

### Filter

```js
    /**
     * Filter tasks by fields matching
     *
     * @param {String} id - A task id to match
     * @param {String} title - A task title to match
     * @param {String} description - A task description to match
     * @param {Number} status - A task status to match
     */
    filter(id, title, description, status) {
        const tasks = this.tasks.filter(task => {
            let matches = true

            if (id) matches = matches && task.id === id

            if (title) matches = matches && task.title.includes(title)

            if (description) matches = matches && task.description.includes(description)

            if (typeof status !== 'undefined') matches = matches && task.status === status

            return matches
        })

        return tasks.map(task => Task.from(task))
    }
```

Interesante Filter, segun los parametros que le entren al metodo, el filtrado sera más extenso o no.
Si no ponemos ningun parametro, simplemente todos los `matches` seran `true` y sacara todos los registros.

## Componetizar

Como componetizar los componentes realizados, para poderse usar en otras capas?
Simplemente tendremos que reservar el fichero `index.js` para escribir la exportacion de los modulos:

```js
const Task = require('./Task')
const TaskData = require('./TaskData')

module.exports = {Task, TaskData}
```

despues, en otra capa distinta o proyecto, realizaremos:

`yarn add direccion-del-modulo-que-queremos-importar`

Despues, veremos que en nuestro `package.json` se ha añadido algo parecido a esto:

```json
  "dependencies": {
    "body-parser": "^1.18.2",
    "dotenv": "^5.0.1",
    "express": "^4.16.2",
    "task-data": "file:../task-data",
    "task-logic": "file:../task-logic"
  }
```

Podremos requerirlo de esta forma:

```js
const {TaskData, Task} = require('task-data')
```