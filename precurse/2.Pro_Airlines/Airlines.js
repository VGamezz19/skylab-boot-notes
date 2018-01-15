var flights = [
    {id: 00, to: "New York", from: "Barcelona", cost: 700,scale: false},
    {id: 01, to: "Los Angeles", from: "Madrid", cost: 1100,scale: true},
    {id: 02, to: "Paris", from: "Barcelona", cost: 210,scale: false},
    {id: 03, to: "Roma", from: "Barcelona", cost: 150,scale: false},
    {id: 04, to: "London", from: "Madrid", cost: 200,scale: false},
    {id: 05, to: "Madrid", from: "Barcelona", cost: 90,scale: false},
    {id: 06, to: "Tokyo", from: "Madrid", cost: 1500,scale: true},
    {id: 07, to: "Shangai", from: "Barcelona", cost: 800,scale: true},
    {id: 08, to: "Sydney", from: "Barcelona", cost: 150,scale: true},
    {id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150,scale: false}
    ]
var user = '';
var role = 'user';

user = prompt("Please enter your name");
role = prompt("Eres User o Admin?");
role = role.toLowerCase();

console.log("Hellow ", user, " Welcome Skylab Airlines! ✈️🛩")
console.log("//================== ", role.toUpperCase()," ==================//")

function stringFlights (flights, trueId) {
    console.log("======================================================================================================")  
    for(var i = 0; i < flights.length; i++) {

            if(role === 'admin' || trueId){
                var show = 'ID --> ' + flights[i].id;
            } else  {
                var show = '';
            }
        
            show += "  El vuelo con origen: " + flights[i].from + ", y destino: " + flights[i].to + " tiene un coste de " + flights[i].cost + "€";
    
            if(flights[i].scale ===true) {
                show += " y realiza escala";
            } else {
                show += " y no realiza ninguna escala";
            }
          
        console.log(show);
    }
    console.log("======================================================================================================")  
}

stringFlights(flights);


if(role === 'admin'){
    console.log("//======================================================//")
    console.log("//========================add()========================//")
    console.log("//======================================================//")
    console.log("//========================del()========================//")
    function add(){
        if(flights.length === 15){
            alert("Tienes que eliminar un vuelo para añadir más. USA --> del('id') para eliminar el que no quieras");
        } else {
            var to, from, cost, scale;
            from = prompt("From?")
            to = prompt("To?")
            cost= prompt("Cost?")
            scale = confirm("With Scale?")
            
            flights.push({
                id: function() {
                    var id = 0;
                    flights.forEach(function(element){
                        if (id < element.id) {
                            id = element.id
                        }
                    })
                    return id + 1;
                }() ,
                to: to,
                from: from,
                cost: cost,
                scale: scale
            });

            //Show all flights
            stringFlights(flights);
        } 

    }

    function del(){
        var id = parseInt(prompt("Introduce ID del vuelo que quieras eliminar"));
        var count
        flights.forEach(function(vuelo){
            if(vuelo.id === id) {

                flights.splice(id,1);
                //Show all flights
                stringFlights(flights);
            }
        })
    }
} else if (role === 'user') {
    console.log("//======================================================//")
    console.log("//========================find()========================//")
    
    function find(){

        var parametro = prompt("Busca por [alto, bajo, o coste exacto]")

        var cost = 0;
        
        if(parametro === "alto"){
            var vueloMasCaro = []
            flights.forEach(function(element){
                if (cost < element.cost) {
                    vueloMasCaro = []
                    cost = element.cost
                    vueloMasCaro.push(element)
                }
                
            })
        stringFlights(vueloMasCaro);

        }else if(parametro === 'bajo'){
            cost = flights[0].cost;
            var vueloMasBarato = []
            flights.forEach(function(element){
                if (cost > element.cost) {
                    vueloMasBarato = []
                    cost = element.cost
                    vueloMasBarato.push(element)
                }
                
            })
            stringFlights(vueloMasBarato);

        }else if (!isNaN(parametro)){

            var vueloExacto = []
            flights.forEach(function(element){
                if (parseInt(parametro) === element.cost) {
                    cost = element.cost
                    vueloExacto.push(element)
                }
                
            })
            if(vueloExacto.length === 0){
                if(confirm("Ningun Vuelo encontrado, ¿Volver a buscar?")){
                    find();
                } else {

                }
            } else {
                stringFlights(vueloExacto, true);

                var comprar = prompt("¿Quieres Comprar Algun Vuelo? En caso Afirmativo, introduce su ID");

                if(isNaN(comprar) || !comprar) {
                    alert ("Adios!")
                } else {
                    var count
                    flights.forEach(function(vuelo){
                        if(vuelo.id === parseInt(comprar)) {
            
                            flights.splice(parseInt(comprar),1);
                            
                            stringFlights(flights);
                        }
                    })
                }
            }
        }
    }
}