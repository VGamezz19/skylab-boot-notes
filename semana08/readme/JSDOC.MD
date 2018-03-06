# [← |](https://github.com/VGamezz19/skylab-boot-notes/blob/master/semana07/) JSDoc

Es importsante documentar nuestro codigo, para la hora de la interpretacion y la lectura del tal.

Con `JSDoc` podemos commentar classes, funciones, promieses, etc.

## Patron

```js
    /**
     * Validates task id
     *
     * @param {String} id
     *
     * @throws {Error} - If task id is not valid
     */
    _validateId(id) {
        if (typeof id !== 'string' || !id.trim().length) throw Error(`id cannot be ${id}`)
    }

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

🚨 🚨 Es importante remarcar que la documentacion de JSDOC esta muy mal realizada. siempre que queramos documentar nuestro codigo, vuscar por internet.