//======================================================================================//
//ARRAY
//======================================================================================//

console.log("//================== ARRAY ==================//")

//======================================================================================//
//Exercies A)
//======================================================================================//

console.log("//================== Exercices A) ==================//")

var nombre = ['V','I','C','T','O','R','G','A','M','E','Z']

function nameExA (nombre){
var cadena = '';

    for (var i = 0; i<nombre.length; i++){

        if ( i < nombre.length && i !== nombre.length - 1) {
            cadena += nombre[i] + '/'
        } else {
            cadena += nombre[i];
        }

     }
     console.log(cadena);
}

nameExA(nombre);


//======================================================================================//
//Exercies B)
//======================================================================================//

console.log("//================== Exercices B) ==================//")

function nameExB (nombre){
var cadena = '';
var apellido= '';

    for (var i = 0; i<nombre.length; i++){

        if ( nombre.length === 'G') {
            count = i
        } 
    }
    for (var i = count; i<nombre.length; i++){
        if ( i < nombre.length && i !== nombre.length - 1) {
            apellido += nombre[i] + '|'
        } else {
            apellido += nombre[i];
        }
    }
     console.log(apellido);
}

nameExB(nombre);

//======================================================================================//
//Exercies C)
//======================================================================================//

console.log("//================== Exercices C) ==================//")

function nameExC (nombre){
var cadena = '';

    for (var i = 0; i<nombre.length; i++){
    
        if ( i < nombre.length && i !== nombre.length - 1) {
            cadena += i+ 1 + 'º ' + nombre[i] + ', '
        } else {
            cadena += i+ 1 + 'º ' + nombre[i];
        }
    }
     console.log(cadena);
}

nameExC(nombre);

//======================================================================================//
//Exercies E)
//======================================================================================//

console.log("//================== Exercices E) ==================//")

function nameExE (nombre){
var cadena = '';

    for (var i = 0; i<nombre.length; i++){
    
        if ( nombre[i] === 'V' || nombre [i] === 'G') {
            cadena += nombre[i]
        } 
    }
     console.log(cadena);
}

nameExE(nombre);

//======================================================================================//
//Exercies F)
//======================================================================================//

console.log("//================== Exercices F) ==================//")
var array = ['Victor', 'Gamez', 21]
function nameExF (array){
    console.log('My name is ' + array[0] + " and i'm " + array [2] + " years old")
}

nameExF(array);

//======================================================================================//
//Exercies G)
//======================================================================================//

console.log("//================== Exercices G) ==================//")
var vicInfo = array;

function nameExG (city){
    
    vicInfo.push(city)
    console.log("City added ==> " + vicInfo)
}

nameExG('El Prat del Llobregat');

//======================================================================================//
//Exercies H)
//======================================================================================//

console.log("//================== Exercices H) ==================//")

function nameExH (){
    vicInfo.splice(vicInfo.length - 1);
    console.log("City Delete ==> " + vicInfo)
}

nameExH();

//======================================================================================//
//Exercies J)
//======================================================================================//

console.log("//================== Exercices J) ==================//")

var vicInfo = ['Victor', 'Gamez', 21]
//--!!-- EL shift elimina el primer elemento de la array.!!
function nameExJ (info){
    let gamInfo = info
    gamInfo.shift()
    console.log(gamInfo)
}

nameExJ(vicInfo);

//======================================================================================//
//Exercies K)
//======================================================================================//

console.log("//================== Exercices K) ==================//")

// splice (posicion, cuantos elementos quiero eliminar, si quiero añadir (opcional))
function nameExK (info){
    let infoVic = info
    infoVic.splice(0,0, 'Victor')
    console.log(infoVic)
}

nameExK(vicInfo);

//======================================================================================//
//Exercies L)
//======================================================================================//

console.log("//================== Exercices L) ==================//")

// array.map (funcion())
var numberArray = [0,1,2,3,4,5,6,7,8,9,10]
var numberMultiplicados;
function nameExL (number){
    let num = number
    console.log(numberArray.map(function(x){return x * num}))
}

nameExL(5);

//======================================================================================//
//Exercies M)
//======================================================================================//

console.log("//================== Exercices M) ==================//")

function nameExM (number){
    let num = number
    let multi = numberArray.map(function(x){return x * num})

    console.log("SORT --> ASC  " + multi.sort(function(a, b) {
        return a - b;
      }))

    console.log("SORT --> DESC " + multi.sort(function(a, b) {
        return b - a;
      }))
}

nameExM(5);

//======================================================================================//
//Exercies N)
//======================================================================================//

console.log("//================== Exercices N) ==================//")

function nameExN (info){
    let vic = info
    let repite = []
    let count = 0
    var countRepe
    var position
    var boolean
    for(var i = 0; i < vic.length; i++){
        countRepe = 0;
        for(var x = 0; x < vic.length; x++){
            if(vic[i] === vic[x]){
                countRepe ++;
            }
            if(countRepe > 1) {
                pisition = i;
            }
			
        }
		repite.push(vic[i] + ' - ' + countRepe)
    }
	console.log( repite.join('\n'))
}

nameExN(['V','I','C','T','O','T','R','G','T','A','M','E','Z']);
//======================================================================================//
//Exercies N)
//======================================================================================//

console.log("//================== Exercices N.1) ==================//")

