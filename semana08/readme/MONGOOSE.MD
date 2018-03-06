# [← |](https://github.com/VGamezz19/skylab-boot-notes/blob/master/semana08/) Mongoose

Ver más informacion en [Mongoose](http://mongoosejs.com/)

Mongoose es un ODM, nos permite gestionar y crear modelos especificos para (en este caso) MongoDB, existen otros ODM segun la base de dato que utilices. Tambien estan los ORM que se utilizan para las BBDD realcionales o SQL.

Mongoose nos proporcionara una forma sencilla de generar `Modelos` de datos que tendran sus metodos para ser insertados, updateados, etc ...

Baby Ejamplo Mongoose:

```js
const mongoose = require ('mongoose')

mongoose.connect('mongodb://localhost/cats')

const Cat = mongoose.model('Cat', {name: String})


const kiti = new Cat({name: "cicuta"})

kiti.save().then(console.log)

Cat.find({ }, { "name": 1,"_id": 0 } , (err,data) => {
    console.log(data)
})
```