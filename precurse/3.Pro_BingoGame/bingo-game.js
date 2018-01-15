var allUsers = [] 

function bingoGame(usuario, caron, turnos) {

    var usuario = new User (prompt ("Welcome to BINGO GAME 🎲🎰, ¿Como es tu nombre?"), 100)
    var carton = constructor();
    var turnos = 0;
    var numeroBingo = 0;
    var numerosTiraosUser = []
    var numerosCarton = []
    var linea1Bolean = false;
    var linea2Bolean = false;
    var linea3Bolean = false;
    var confirmCarton = false;
    var sistemaPuntos = true;
    var bingoExit = false;

    //Añadimos usuario a la lista de users
    allUsers.push(new User("pedro", 68))
    allUsers.push(new User("alejandro", 89))

    confirmPlayer();
    
    //New USER
    function User (usuario, puntos) {
        this.name = usuario
        this.puntuacion = puntos;
        this.getPuntos = function() { return this.puntuacion}
        this.setPuntos = function(value) { this.puntuacion  = this.puntuacion - value} //Por cada turno pasado, le restare 1 punto
        this.toString = function() {console.log("El usuario ", this.name, "tiene un total de -->", this.getPuntos(), " puntos!")}
    }
    
    //Constructor Carton
    function constructor () {
        var arr = []
        while(arr.length < 15){
            var randomnumber = Math.ceil(Math.random()*100)
            if(arr.indexOf(randomnumber) > -1) continue;
            arr[arr.length] = randomnumber;
        }
        return arr;
    }
    //toString Carton
    function stringCarton (carton) {
        var string = '';

        for (var i = 0; i < carton.length; i++){
            if((i + 1) % 5 === 0 && i !== 0){
                string += " | " + carton[i] + " | "+ "\n"
            } else {
                string += " | " + carton[i] + " | "
            }       
        }
        console.log("================================================")
        console.log(string);
    }
    function confirmarCarton(){
        var nuevoCarton = ''
        nuevoCarton = prompt('Si quieres cambiar de CARTON, escribe "yes"')

        if(nuevoCarton =="yes") {
            carton = constructor()
            confirmGame();
        } else {
            confirmCarton = true;
        }
    }
    //Seguir-Empezar a Jugar?
    function confirmPlayer() { 
        if (turnos) {
            if (confirm("¿Quieres seguir Jugando?")) {
                if(confirm ("Para continuarla, pulsa ACEPTAR, para una NUEVA, CANCELAR")){
                    confirmGame();
                } else {
                    alert("nueva partida!");
                    bingoGame()
                }
                
            } else {
                adios(usuario.name)
            }
        } else {
            if (confirm("¿Quieres empezar el Bingo 🎲🎰?")) {
                confirmGame()
            } else {
                adios(usuario.name)
            }
        }
    }
    //Confirm() TURNO
    function confirmGame(){
        if(!bingoExit){
            sistemaDePuntos()

            stringCarton(carton)

            if(!confirmCarton){
                confirmarCarton()
            }

            numeroBingo = 0;
            console.log("================== TURNO ",turnos," ===================")
            console.log("================================================")
            turnos ++;
            usuario.setPuntos(1)
            usuario.toString()
            
            if(!numerosTiraosUser.length && !bingoExit){
                alert("Empezamos con el numero 🎲🎲 ...")
            } else if(!bingoExit) {
                alert("Proximo numero es 🎲🎲 ...");
            }
            if(!bingoExit){
                numeroBingo = tirada(100);
                alert ("!El " + numeroBingo + " !!!");
                for( var i = 0; i<carton.length; i++) {
                    if(numeroBingo == carton[i]) {
                        carton.splice(i, 1 , "X");
                        alert ("Has Eliminado el Numero --> " + numeroBingo);
                        linea()
                    }
                }
            }
            if(!bingoExit){
                if(confirm("Atento que sacan otro Numero 🎰!")){
                    confirmGame();
                } else {
                    alert ("¿te rajas?");
                    confirmPlayer();
                }
            }
        }
       
    }
    //Tirada
    function tirada(rango) {
        var bolean = false
        var randomNumber = Math.floor((Math.random() * rango) + 1)
        if(numerosTiraosUser.length){
            for (var i = 0; i<numerosTiraosUser.length; i++){
                if(randomNumber == numerosTiraosUser[i]){
                    i = 0;
                    var randomNumber = Math.floor((Math.random() * rango) + 1)
                    bolean = false;
                } else {
                    bolean = true
                }
            }
        }else{
            bolean = true;
        }   
        if(bolean) {
            numerosTiraosUser.push(randomNumber);
            return randomNumber
        } else {
            console.log("error with tirada generate")
        }   
    }
    //Tiene linea?
    function linea() {
        var pushLinea = []
        var countLinea = 0;
        var lineaNum  = 0;
        for(var i = 0; i< carton.length; i ++){
            pushLinea.push(carton[i])

            if((i + 1) % 5 === 0 && i !== 0){
                lineaNum ++;
                for (var x = 0; x<pushLinea.length; x++) {
                    if (pushLinea[x] == "X"){        
                        countLinea ++;
                    }
                }
                if(countLinea === 5){
                    if(!linea1Bolean && lineaNum == 1){
                        linea1Bolean = true
                         console.log("================== Linea 1 ! ===================")
                         bingo()
                    }
                    if(!linea2Bolean && lineaNum == 2){
                        linea2Bolean = true
                        console.log("================== Linea 2 ! ===================")
                        bingo()
                   }
                   if(!linea3Bolean && lineaNum == 3){
                        linea3Bolean = true    
                        console.log("================== Linea 3 ! ===================")
                        bingo()
                        
                   }
                    pushLinea = [];
                    countLinea = 0;

                } else {
                    pushLinea = [];
                    countLinea = 0;
                }
            }
        }

        // var nums = new Array(15).fill('x').join('')
        // var line1 = nums.substr(0,5)
        // var line2 = nums.substr(5,10)
        // var line3 = nums.substr(10,15)
        
        // if(line1.match('xxxxx') || line2.match('xxxxx') || line3.match('xxxxx')){
        //     console.log('line!')
        // }
    }
    function bingo(){
        if(linea1Bolean && linea2Bolean && linea3Bolean){
            console.log("=================== BINGO ! ====================")
            alert("BINGO!")
            allUsers.push(usuario);
            stringSistemaDePuntos();


            if(confirm("¿Quieres jugar otra vez?")){
                bingoGame()
            } else {
                bingoExit = true;
                alert("Adios")
            }
        }
    }
    function sistemaDePuntos(){
        if(sistemaPuntos) {
            sistemaPuntos = false;
            console.log("===/INFORMACION/ ", usuario.name, " , Hemos creado un sistema de puntos.===============")
            console.log("=== Contra más tardes en terminar el carton, más puntos te restaremos ========")
            console.log("=== Empiezas con 100, y cada turno te restara 1 punto ========================")
            console.log("=== A continuacion te proporcionamos el ranquin de los demas USUARIOS ========")
            stringSistemaDePuntos();
        }
    }

    function stringSistemaDePuntos() {
        console.log("================================= Ranking ====================================")

        function sortArrOfObjectsByParam(arrToSort, strObjParamToSortBy, sortAscending) {
            if(sortAscending == undefined) sortAscending = true;  // default to true
            if(sortAscending) {
                arrToSort.sort(function (a, b) {
                    return a[strObjParamToSortBy] < b[strObjParamToSortBy];
                });
            }
            else {
                arrToSort.sort(function (a, b) {
                    return a[strObjParamToSortBy] < b[strObjParamToSortBy];
                });
            }
        }

        sortArrOfObjectsByParam(allUsers, "puntuacion", true)
        var count = 0
        allUsers.forEach(element => {
            count ++;
            console.log(count, ' --> ', element.name, ' Con ', element.puntuacion, ' puntos!')
        });
    }

    //Adios usuario
    function adios(user) {
        if(!user){
            bingoExit = true
            return alert ("Adios!!")
        } else {
            bingoExit = true;
            usuario.puntuacion = 0;
            alert('Al abandonar, has PERDIDO todos los puntos');

            allUsers.push(usuario);
            stringSistemaDePuntos();
            return alert("Adios " + user + " ^^");
        }
        
    }
}

bingoGame()

