# [← |](https://github.com/VGamezz19/skylab-curso/blob/dev/course/semana01/)  JavaScriptECMAS5

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

## Condicionales

`Switch` se usa cuando tenemos muchos elseIF en un condicional.

````javascript
function testDefault (a) {
	switch(a){
        case 1 :
			console.log("hola")
			break
        default: 
			console.log("nada")
	}
}
````

`If` El tipico `If, else if, else` pero alfinal el `else` es una redundancia de codigo ya que:
`````javascript
if(a==1){
    return //hola
}else{
    return //adios
}

//========The-Same===========

if (a==1) return //hola

return //adios
`````

Si el `if, else if, else` solo tienen un **statement** no hace falta poner ` if (a){ //code with more statements }`
pasa lo mismo con `Event loop For()`


`Ternario` la forma corta de hacer un `if else``

````javascript
(a == b) ? "hola" : "adios"

a == b 

````

