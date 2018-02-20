//======================================================================================//
//STRINGS
//======================================================================================//

console.log("//================== STRINGS ==================//")

//======================================================================================//
//Exercies A)
//======================================================================================//

console.log("//================== Exercices A) ==================//")
var name = 'Victor'

function countName(name){
    console.log("My Name has ",name.length," letters")
}

countName(name);
//======================================================================================//
//Exercies B)
//======================================================================================//

console.log("//================== Exercices B) ==================//")
var nameApellido = 'Victor Gamez Royo'

function countPosition(name){
    for(var i = 0; i < name.length; i++){
        if(name[i] == ' ' && name[i + 1] == 'G') {
            console.log('Your first last name starts on position ', i + 1)
        }
    }
    
}

countPosition(nameApellido);
//======================================================================================//
//Exercies C)
//======================================================================================//

console.log("//================== Exercices C) ==================//")
var count = 0
var firstName = ''

function sarcheFirstName(name){
    for(var i = 0; i < name.length; i++){
        if(name[i] == ' ' && name[i + 1] == 'G') {
            count = i;
        }
    }

    for(var i = 0; i <= count; i++){
        firstName = firstName + nameApellido[i]
    }
    
    console.log(firstName)
}

sarcheFirstName(nameApellido);
//======================================================================================//
//Exercies D)
//======================================================================================//

console.log("//================== Exercices D) ==================//")
var countLast = 0
var countFirst = 0
var lastName = ''

function sarcheLastName(name){
    for(var i = 0; i < name.length; i++){
        if(name[i] == ' ' && name[i + 1] == 'G') {
            countFirst = i + 1;
        }
    }

    for(var z = countFirst; z < name.length; z++){
        if(name[z] == ' ' && name[z + 1] == 'R') {
            countLast = z;
        }
    }

    for(var x = countFirst; x <= countLast; x++){
        lastName = lastName + name[x]

        console.log(lastName)
    }
    
    console.log(lastName)
}

sarcheLastName(nameApellido);
//======================================================================================//
//Exercies E)
//======================================================================================//

console.log("//================== Exercices E) ==================//")
var countMsr
var msrName = 'Hello Mr.'

function msterName(name){
    for(var i = 0; i < name.length; i++){
        if(name[i] == ' ' && name[i + 1] == 'G') {
            countMsr = i;
        }
    }

    for(var x = countMsr; x < name.length; x++){
        msrName = msrName + name[x]
    }
    
    console.log(msrName)
}

msterName(nameApellido);


//======================================================================================//
//Exercies F)
//======================================================================================//

console.log("//================== Exercices F) ==================//")

var countLast = 0
var countFirst = 0
var lastName = ''

function sarcheLastName(name){
    for(var i = 0; i < name.length; i++){
        if(name[i] == ' ' && name[i + 1] == 'G') {
            countFirst = i + 1;
        }
    }

    for(var i = countFirst; i < name.length; i++){
        if(name[i] == ' ' && name[i + 1] == 'R') {
            countLast = i;
        }
    }

    for(var i = countFirst; i <= countLast; i++){
        lastName = lastName + nameApellido[i].toUpperCase()
    }
    
    console.log(lastName)
}

sarcheLastName(nameApellido);
//======================================================================================//
//Exercies G)
//======================================================================================//

console.log("//================== Exercices G) ==================//")

var something = name + " is awesome"
console.log(something)

//======================================================================================//
//Exercies H)
//======================================================================================//

console.log("//================== Exercices H) ==================//")

var apellido = 'Gamez'

console.log(name.substr(0,1) + '.'+ apellido.substr(0,1))