# [← |](https://github.com/VGamezz19/skylab-boot-notes/blob/master/semana07/)   Mocha

Mocha is a feature-rich JavaScript test framework running on Node.js

`npm i -g mocha`

-- mirar [documentacion](https://mochajs.org/) completa

Por convenio, mocha trabaja en la carpeta `./test` a nivel de `./src` y dentro definimos nuestros test.
Si queremos efectuar los tests en otra carpeta, tendremos que ejecutar --> `mocha nombre-de-la-carpeta`

Test de ejemplo:

```js
var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});
```

## HOOKS

`Mocha` nos proporcionan `Hooks` que se han de especificar antes de ejecutar nuestros test:

```js
describe('hooks', function() {

    before(function() {
        // runs before all tests in this block
    });

    after(function() {
        // runs after all tests in this block
    });

    beforeEach(function namedFun() {
    // beforeEach:namedFun
    });

    afterEach(function() {
        // runs after each test in this block
    });

    // test cases
});
```

Podemos añadirle una descripcion de esta forma:

```js
    beforeEach('some description', function() {
    // beforeEach:some description
    });
```

## Assert

Assert es un [modulo](https://nodejs.org/api/assert.html) de node que nos permite hacer afirmaciones. Como por ejemplo:

- Existe el contenido de la variable?

```js
 let _tasks = true
 assert(_tasks, 'tasks should be created')
```

Y muchos más que estan incluidos en la documentacion de Node.

## Example

```js
describe('Task Logic', () => {
    let tasks
    let taskData
    let taskLogic

    beforeEach(() => {
        taskData = new TaskData(tasks = [])
        taskLogic = new TaskLogic(taskData)
    })

    it('should create a task', () => {
        const title = 'title', description = 'description'

        const id = taskLogic.create(title, description)

        assert(tasks.length > 0, 'task should be created')

        const task = tasks[0]

        assert(task instanceof Task, 'task should be instance of Task')
        assert.equal(task.id, id, 'task id should match')
        assert.equal(task.title, title, 'task title should match')
        assert.equal(task.description, description, 'task description should match')
        assert.equal(task.status, Task.TODO, 'task status should match')
    })
```

## CodeCoverage - Nyc

El termino de `codeCoverage` es muy importante a la hora de lanzar codigo a Prdoccion. Refleja la cantidad de codigo que se ha testeado. Y en una empresa se tendra muy en cuenta a la hora de lanzar una aplicacion, que como minimo este testeado más del 80% de nestro codigo.
Para poder implementar `codeCoverage` en `Mocha`, existe una herramienta llamada [nyc](https://istanbul.js.org/docs/tutorials/mocha/)

`npm i --save-dev nyc`

y despues especificamos en nuestro `package.json`

```json
  "scripts": {
    "demo": "devtool demos --watch",
    "test": "mocha tests",
    "coverage": "nyc mocha tests"
  },
```

El ejecutar el comando `yarnd coverage`

```sh
$ nyc mocha tests

  Task Data
    ✓ should create a task
    ✓ should list tasks
    ✓ should retrieve task
    ✓ should update task
    ✓ should delete a task
    ✓ should filter tasks


  6 passing (9ms)

-------------|----------|----------|----------|----------|----------------|
File         |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
-------------|----------|----------|----------|----------|----------------|
All files    |    89.55 |     82.5 |      100 |      100 |                |
 Task.js     |      100 |      100 |      100 |      100 |                |
 TaskData.js |    87.72 |     82.5 |      100 |      100 |... ,46,108,130 |
-------------|----------|----------|----------|----------|----------------|
```

Primero efectuara el test, y despues nos mostrara un esquema del `codeCoverage`

🚨

Para poder mostrar el `codeCoverage` en HTML, tendremos que efectuar el commando:

`nyc --reporter=html --reporter=text mocha tests`

![IMG](https://github.com/VGamezz19/skylab-boot-notes/blob/master/semana07/public/coverage.png)