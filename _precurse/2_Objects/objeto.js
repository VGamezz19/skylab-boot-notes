//======================================================================================//
//OBJETOS
//======================================================================================//

console.log("//================== OBJETOS ==================//")

//======================================================================================//
//Exercies A)
//======================================================================================//

console.log("//================== Exercices A) ==================//")

var victor = { 
    name : "Victor", 
    apellido : "Gamez", 
    id : 1 
};

for(let key in victor){
    console.log(key)
}

//======================================================================================//
//Exercies B)
//======================================================================================//

console.log("//================== Exercices B) ==================//")

for(let key in victor){
    console.log(victor[key])
}

//======================================================================================//
//Exercies C)
//======================================================================================//

console.log("//================== Exercices C) ==================//")

victor.apellido = 'hola'
for(let key in victor){
   console.log(victor[key])
}

//======================================================================================//
//Exercies D)
//======================================================================================//

console.log("//================== Exercices D) ==================//")

delete victor.id;

for(let key in victor){
   console.log(victor[key])
}

//======================================================================================//
//Exercies E)
//======================================================================================//

console.log("//================== Exercices E) ==================//")

victor.city = 'Barcelona'

for(let key in victor){
   console.log(victor[key])
}

//======================================================================================//
//Exercies F)
//======================================================================================//

console.log("//================== Exercices F) ==================//")

var count = 0;
for(let key in victor){
   count ++;
}

console.log(count)

//======================================================================================//
//Exercies G)
//======================================================================================//

console.log("//================== Exercices G) ==================//")

for(let key in victor){

    if (key === "name") {
        victor.key = "fullName"
        key = "fullName"
    }
    console.log(key)
}

console.log(victor)

//======================================================================================//
//Exercies I)
//======================================================================================//

console.log("//================== Exercices I) ==================//")

function avenger(name, lastName, classRoom, city, job, studies,markAv) {
    this.name = name;
    this.lastName = lastName;
    this.classRoom = classRoom;
    this.city = city;
    this.job= job;
    this.studies= studies;
    this.markAv = markAv;
    this.fullName = function() {console.log(this.name," ", this.lastName)}  //FORMA PARTE DEL K
}
var tonyStark = new avenger ("Tony", "Starck", "XI", "Barcelona", "Ingeneer", "MIT", 10)
console.log(tonyStark)

//======================================================================================//
//Exercies J)
//======================================================================================//

console.log("//================== Exercices J) ==================//")

var victorGam = new avenger ("Victor", "Gamez", "XI", "Barcelona", "IT", "MIT", 100)

for(let key in victorGam){
    console.log(victorGam[key])
 }

//======================================================================================//
//Exercies K)
//======================================================================================//

console.log("//================== Exercices K) ==================//")

console.log("this.fullName = function() {console.log(this.name,' ', this.lastName)}")
victorGam.fullName();


//======================================================================================//
//Exercies M)
//======================================================================================//

console.log("//================== Exercices M) ==================//")

var pol = new avenger ("Pol", "Pol", "XI", "Barcelona", "Ingeneer", "MIT", 10)
var mar = new avenger ("Marc", "Plas", "XI", "Madrid", "Ingeneer", "MIT", 10)
var avenger = []
var count =0;
var avengerRepe =[];

avenger.push(victorGam, tonyStark, pol, mar)
// Aquellos valores del array para los cuales esSuficientementeGrande devuelva verdadero, serán almacenados en una array de salida, sin modificar el array inicial
var filtrado = avenger.filter(

    // La siguiente función realiza una comprobación y devuelve un valor booleano (verdadero/falso)
    function (valor) {
        let count = 0;
    
        for(var i = 0; i<avenger.length; i++){
            if(valor.city === avenger[i].city){
                count++;
                if(count>1){
                    return true;
                }
            }
        }
      }
);
  
console.log(filtrado)

//======================================================================================//
//Exercies N)
//======================================================================================//

console.log("//================== Exercices N) ==================//")

var marAvk = 0;
var countAvangers = 0;
avenger.map( function (value) {

    marAvk += value.markAv;
    countAvangers ++;

})

console.log("la suma total es --> ",marAvk," dividio entre --> ", countAvangers," Es igual a --> ",marAvk/countAvangers);


//======================================================================================//
//Exercies Ñ and Ñ1)
//======================================================================================//

console.log("//================== Exercices Ñ and Ñ1) ==================//")


var idGenerate = 0;
function Fantasticos(name, lastName, classRoom, city, job, studies,markAv) {
    idGenerate ++;

    this.id  = idGenerate;
    this.name = name;
    this.lastName = lastName;
    this.classRoom = classRoom;
    this.city = city;
    this.job= job;
    this.studies= studies;
    this.markAv = markAv;
    this.fullName = function() {return this.name," ", this.lastName}
};

var herous = []

herous.push(    new Fantasticos('Mujer', 'Invisible', 'A2', 'Barcelona', 'tecnical', 'null', Math.round( Math.random() * 1000 ) ),
                new Fantasticos('Antorcha', 'Humana', 'A1', 'Valencia', 'null', 'Primaria', Math.round( Math.random() * 1000 ) ),
                new Fantasticos('Thing', 'Cosa', 'B2', 'Valencia', 'null', 'Batx', Math.round( Math.random() * 1000 ) ),
                new Fantasticos('Doctor', 'Doom', 'C2', 'Paris', 'null', 'ESO4', Math.round( Math.random() * 1000 ) ),
             );

for(var x = 0; x < herous.length; x ++){
    oponent= Math.floor(Math.random() * 3 + 1)

if(oponent + 1 !== herous.length){

    if(herous[oponent].markAv < herous[oponent+1].markAv){
        console.log("El FANTASTICO --> ", herous[oponent].fullName(), "No tiene nada que hacer contra --> ", herous[oponent + 1].fullName())
       
    } else {
        console.log("El FANTASTICO --> ", herous[oponent + 1].fullName(), "No tiene nada que hacer contra --> ", herous[oponent].fullName())
        
    }

} else if (oponent + 1 === herous.length) {

    if(herous[oponent].markAv < herous[oponent - 1].markAv){
        console.log("El FANTASTICO --> ", herous[oponent].fullName(), "No tiene nada que hacer contra --> ", herous[oponent - 1].fullName())
       
    } else {
        console.log("El FANTASTICO --> ", herous[oponent - 1].fullName(), "No tiene nada que hacer contra --> ", herous[oponent].fullName())
        
    }
}
    

}

