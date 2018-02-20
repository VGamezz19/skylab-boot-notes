# [← |](https://github.com/VGamezz19/skylab-boot-notes/tree/master/semana01/)  JavaScriptECMAS5

## Formatos

JavaScript es un lenguaje no tipcado, (no tienes restrucciones en el tipo de dato)
Exiten dos tipos de datos:
-   Primitivos:
    - Boolean 
    - Null 
    - Undefined
    - Number
    - String 
    - Symbol (ECMA6)
-   NoPrimitivos:
    - Object
    - function

Uno de los hints que se usan más en JavaScript es el `!!varieblae`

ejemplo: 

````javascript
var a = "Hola"
var isFull = !!a
````

Para saber si una variable es `true` o `false` (si esta llena o no) en el ejemplo especificado seria --> falte * false * true = true

````
Como dato: **statements** son las lineas que se van a ejecutar. 
como por ejemplo: var a = "hola"; <-- statemen que declara una variable
````

## Hoisting

JavaScript siempre pondrá arriba las definiciones de las variables. Por Ejemplo:

```javascript
function () {
 a = “hola”
 console.log(a)
 var a
}

//================= Igual que ...

function () {
 var a
 a = “hola”
 console.log(a)
}
```

Digamos que JavaScript chuta hacia arriba las definiciones de varibales `var`
ortro ejemplo:

```javascript
function () {
    console.log(y) //undefined
    var y = 0
}

//================= Igual que ...

function () {
    var y
    console.log(y) //undefined
    y = 0
}
```


## Condicionales

- `Switch` se usa cuando tenemos muchos elseIF en un condicional.

````javascript
function testDefault (a) {
    switch(a){
        case 1 : console.log("hola")
                 break
        default: console.log("nada")
    }
}
````

- `If` El tipico `If, else if, else` pero alfinal el `else` es una redundancia de codigo ya que:
`````javascript
if(a==1){
    return //hola
}else{
    return //adios
}

//================= Igual que ...

if (a==1) return //hola

return //adios
`````

Si el `if, else if, else` solo tienen un **statement** no hace falta poner ` if (a){ //code with more statements }`
pasa lo mismo con `Event loop For()`


- `Ternario` la forma corta de hacer un `if else``

````javascript
(a == b) ? "hola" : "adios"

a == b 

````


## Objects

Dentro de JavaScript, todos los tipos de datos que no son  primitivos son `Objetos`. 
Y todos tendran el `__proto__` de Objeto, aparte de su `__proto__`.
Mirando la proxima Imagen, Interpretando que `Car` es **Object** y que `FF (ferrari)` es **Array**

![Imagen](https://github.com/VGamezz19/skylab-boot-notes/blob/master/semana01/public/herencias.jpg)


- Heredar los metodos del padre. Ejemplo Person > Student

```javascript
//Person
function Person (firstName, lastName, age, gender, interests){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.gender = gender
    this.interests = interests
}
Person.prototype.greeting = function () {
    return `Hi i'm ${this.firstName}`
}
Person.prototype.farewell = function () {
    return `${this.firstName} has left the building.
    Bye for now!`
}
Person.prototype.bio = function () {
    return `${this.firstName} ${this.lastName}is ${this.age} years old. ${(this.gender == 'famel') ? "She" : "He"} likes ${this.interests.join(", ")}`;
}
//Student
function Student(firstName, lastName, age, gender, interests) {
    //Estamos utilizando el Constructor de Person, para Student
    Person.call(this,firstName, lastName, age, gender, interests)
}
//Aqui, Studen hereda todos los metodos de Persona.
Student.prototype = new Person()
//Studen tiene su propio greeting y le hacemos overWrite
Student.prototype.greeting = function () {
    return `Yo i'm ${this.firstName}`
}
```

## Polyfille

El termino Polifield es cuando modificamos el `__proto__` del core de JavaScript, porque en segun que navegadores (antiguos) estan objsoletos y no soportan segun que metodos de JavaScript.
`Array.prototype.forEach = function () { ... }`

Para saber si un navegador necesita nuestro Polifield, al principio de nuestro codigo preguntaremos si ese navegador lo necesita.
```javascript
if(typeof Array.prototype.forEach === ‘undefine’) {
    Array.prototype.forEach = function () { ... }
}
```

Para poder testear nuestro nuevo Polifield en un navegador nuevo, tendremo que eliminar de Windoes, el metodo que queremos testear
``` javascript
delete Array.prototype.forEach
```

## This, Self, Call, Bind, Apply

## Self-Executing Anonymous Functions

para ver [informacion detallada](http://markdalgleish.com/2011/03/self-executing-anonymous-functions/)

Ejemplo:

````javascript
(function(){
  var foo = 'Hello';
  var bar = 'World!'
  
  function baz(){
      return foo + ' ' + bar;
  }
})();
````

