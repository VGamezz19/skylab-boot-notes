//======================================================================================//
//FUNCTIONS
//======================================================================================//

console.log("//================== FUNCTIONS ==================//")

//======================================================================================//
//Exercies A)
//======================================================================================//

console.log("//================== Exercices E/F) ==================//")

function name (name) {
    return name
}

function lastName(lastName) {
    return lastName
}

function poder() {
    return Math.round(Math.random()*100)
}

console.log(name("Victor"),"", lastName("Gamez"), " With Power --> ", poder().toString())

//======================================================================================//
//Exercies G)
//======================================================================================//

console.log("//================== Exercices G) ==================//")

function root(name, lastName) {

    var firstName = ()=>(name) =  name;
    var secondName = ()=>(lastName) = lastName;

    return firstName() + secondName() + poder()

    // var firstName = name(name)
    // var secondName = lastName(lastName)

    // return firstName() + secondName() + poder()
}

console.log(root("Victor", "Gamez"))

//======================================================================================//
//Exercies H)
//======================================================================================//

console.log("//================== Exercices H) ==================//")

function age() {
    
    var random = function () {
         return Math.round(Math.random() * 100)}
    return random();
}

console.log("Random AGE() con funcion hija --> ", age())

//======================================================================================//
//Exercies I)
//======================================================================================//

console.log("//================== Exercices I) ==================//")

//Padre
function age50() {
    //Hijo
    var random = function () {
         return Math.floor((Math.random() * 50) + 1)
    }
    //hijo
    var comprobar = function (number) {
        if ( number < 20) {
            return "Que joven ";
        } else if ( number >= 21){
            return "Que viejo!"
        }
    }
    //Return Padre
    return comprobar( random() );
}

console.log("Edad Random doble Hijo -->  ", age50())