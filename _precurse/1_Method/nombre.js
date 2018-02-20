//======================================================================================//
//NOMBRES
//======================================================================================//

console.log("//================== NOMBRES ==================//")

//======================================================================================//
//Exercies A)
//======================================================================================//

console.log("//================== Exercices A) ==================//")

var date = new Date()

console.log( "It's ", date.getHours() ," of Morning")

//======================================================================================//
//Exercies C)
//======================================================================================//

console.log("//================== Exercices C) ==================//")
var dateRound = date.getHours() + "." + date.getMinutes()

console.log(dateRound)
console.log( "It's ", Math.round(dateRound) ," of Morning")

//======================================================================================//
//Exercies D)
//======================================================================================//

console.log("//================== Exercices d) ==================//")
num1 = 7
num2 = 5

console.log("The sum of ", num1, " + ", num2, " is ", (num1+num2) );

console.log("The sum of ", num1, " + ", num2, " is = ", (num1+num2), " And de rest is = ", (num1 - num2) );

console.log("The sum of ", num1, " + ", num2, " is = ", (num1+num2), " And de rest is = ", (num1 - num2), " And multi = ", (num1 * num2) );

console.log( "Multiplicar un numero por una String --> ", (num1*"hola") )

//======================================================================================//
//Exercies E)
//======================================================================================//

console.log("//================== Exercices E) ==================//")

var num3 = 3
var string = "hola"
var multipli = 13

//Se puede hacer como !multipli (false, vacio, etc)
// o usando el isNaN
if (isNaN(multipli)){
    console.log("You can't do this")
} else if (multipli){
    console.log("YEEA", multipli)
}

// The "falsey" values are:

// .    false
// .    null
// .    undefined
// .    0
// .    "" ( empty string )
// .    NaN ( Not a Number )
