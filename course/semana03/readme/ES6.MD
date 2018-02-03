## [← |](https://github.com/VGamezz19/skylab-curso/blob/dev/course/semana02/)   API

-  ## [Enjanced Object Literals](http://www.benmvp.com/learning-es6-enhanced-object-literals/)

- ### Property Value Shorthand
**ES6**
```javascript
function getCar(make, model, value) {
	return {
		make,
		model,
		value
	};
}
```

**ES3/ES5**
```javascript
function getCar(make, model, value) {
	return {
		make: make,
		model: model,
		value: value
	};
}

```

- ### Method definition shorthand

**ES6**
```javascript
function getCar(make, model, value) {
	return {
		// Method definition shorthand syntax
		// omits `function` keyword & colon
		depreciate() {
			this.value -= 2500;
		}
	};
}
```
**ES3/ES5**
```javascript
function getCar(make, model, value) {
	return {
		depreciate: function() {
			this.value -= 2500;
		}
	};
}
```

## [Destructuring Assignment](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment)

- ### Destructuracion de un Array

```javascript
var foo = ["uno", "dos", "tres"];

// sin destructuración
var uno  = foo[0];
var dos  = foo[1];
var tres = foo[2]; // asignación en tres lineas

// con destructuración
var [uno, dos, tres] = foo; // asignación en una sola linea
```

```javascript
var a = 1;
var b = 3;

[a, b] // [a = 1, b = 3]
[a, b] = [b, a]
[a, b]  // [a = 3, b = 1]

```

- ### Destructuracion de Objetos

```javascript
var o = {p: 42, q: true};
var {p, q} = o;

console.log(p); // 42
console.log(q); // true 

// Asigna nuevos nombres de variable
var {p: foo, q: bar} = o;

console.log(foo); // 42
console.log(bar); // true  
```

Este caso se puede usar como un buscador dentro de un Objeto. Si el atrivuto `z` no se encuentra en el objeto. `foo` estara definida como `undefined`
```javascript
let key = "z";
let { [key]: foo } = { z: "bar" };

console.log(foo); // "bar"
```

```javascript
    var o = {a : {b : 1}, c : {d:3}}

        o.a.b //1

    var {a : {b : value }} = o

        value // 1
```

## [Spread Operator](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Spread_operator)

![Image](https://github.com/VGamezz19/skylab-curso/blob/dev/course/semana03/public/spread.png)


Ejemplos:
```javascript
    var arr = [1,2,3]   //1,2,3
    var arr2 = [4,5, ...arr]    //4,5,1,2,3

    function fun(a,b, ...c){
        console.log(a,b,c)//1 2 [3, 4, 5, 6]

    }
    fun(1,2,3,4,5,6)
```

## [Spread Operator](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Classes)

```javascript
class Animal {
    constructor(name){
        this.name = name;
    }
    eat() {
        return 'ñam ñam'
    }
}

class Cat extends Animals {
    constructor(name){
        super(name)
    }
    mew() {
        return "mew"
    }
}

var cat1 = new Cat("minino");

cat1.eat() //"ñam ñam"
cat1.mew() //"mew"
cat1.name //"minino"
```


