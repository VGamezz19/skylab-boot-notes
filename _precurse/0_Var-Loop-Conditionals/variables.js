//En JavaScrip esta reservada la palabra VAR para definir VARIABLES.

// var skylab = 10;    //type number
// var skylabText = 'Skylap'   //type txt
// var skylabArray =['coders', 'academy', 7]   //type array
// var skylapObject = {lenguaje: 'javaScript', stack: 'MEAN', angular: 4}  //typ object

// // 3 tipos de LOOPS básicos
// //For para ejecutar un codigo un numero de vecex
// for (var i = 0; i<10; i ++) {
//     console.log('10 veces este mensaje')
// }

// //Repetira el bucle hasta que la condicion no se cumpla.
// while (skylab) {
//     //Codigo
//     skylab = 0        //Es lo mismo [null,0,'',false ] 
//     console.log("Solo una vez")
// }

// //A diferencia del While, es que el Do While, comprovara la condicion al final
// do{
//     skylab = 1
//     console.log("Do While")
// }while(!skylab)

//======================================================================================//
//Exercies A)
//======================================================================================//

console.log("//================== Exercices A) ==================//")

var name = 'Victor Gamez Royo'
console.log(name)

//======================================================================================//
//Exercies B)
//======================================================================================//

console.log("//================== Exercices B) ==================//")

var age = 21
console.log(age)

//======================================================================================//
//Exercies C)
//======================================================================================//

console.log("//================== Exercices C) ==================//")

var info = ['Victor', 'Gamez', 'Royo', 21]
console.log(info)

//======================================================================================//
//Exercies D)
//======================================================================================//

console.log("//================== Exercices D) ==================//")

var data = {name: 'Victor', age: 21}
console.log(data)

//======================================================================================//
//Exercies E)
//======================================================================================//

console.log("//================== Exercices E) ===================//")

for (var i = 0; i<info.length; i++){
    console.log(info[i]);
}

//======================================================================================//
//Exercies F)
//======================================================================================//

console.log("//================== Exercices F.1) ==================//")

var a = 25
var b = 12
if( a < b) {
    console.log('El numero más grande es --> ', b);
} else if (a > b) {
    console.log('El numero más grande es --> ', a);
}

console.log("//================== Exercices F.2) ==================//")

if( a < b) {
    console.log('El numero más grande es --> ', b);
} else if (a > b) {
    console.log('El numero más grande es --> ', a);
}else if (a == b){
    console.log('The numbers are equal')
} 

//======================================================================================//
//Exercies G)
//======================================================================================//

console.log("//================== Exercices G) ==================//")

var array = [1,2,3,4,5];

for(var x = 0; x<array.length; x++){
    if(x == 2){
        console.log('We are in the middle of loop', x)
    } else {
        console.log(x);
    }
}

console.log("//================== Exercices G.1) ==================//")

var myName = 'Victor'
var myAge = 21

if('Victor' !== myName || 21 !== myAge){
    console.log("this is not you!")
}else{
    console.log("Hi!! Glad to see u again!")
}

console.log("//================== Exercices G.2) ==================//")

var dataArray = []
var random = Math.random() * 10

//Construccion de Array con un RANDOM
for (var y = 0; y < random; y++){
    dataArray.push(Math.round(Math.random()*10))
    
    //En la mitad del Array, introducir mis DATOS
    var laMitad = random / 2
    var laMitad = Math.round(laMitad);
    
    if(y == laMitad){
        dataArray.push(myName)
        dataArray.push(myAge)
    }
}

console.log(dataArray)

for (var z = 0; z < dataArray.length; z ++) {
    if (dataArray[z] === 'Victor' || dataArray[z] === 21) {
        console.log('We find your data!', dataArray[z])
    } else {
        console.log(dataArray[z])
    }
}

