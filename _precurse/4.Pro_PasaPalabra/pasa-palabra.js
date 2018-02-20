var questions = [
    { letter: "a", answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") },
    { letter: "b", answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
    { letter: "c", answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé") },
    { letter: "d", answer: "diarrea", status: 0, question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida") },
    { letter: "e", answer: "ectoplasma", status: 0, question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación") },
    { letter: "f", answer: "facil", status: 0, question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad") },
    { letter: "g", answer: "galaxia", status: 0, question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas") },
    { letter: "h", answer: "harakiri", status: 0, question: ("CON LA H. Suicidio ritual japonés por desentrañamiento") },
    { letter: "i", answer: "iglesia", status: 0, question: ("CON LA I. Templo cristiano") },
    { letter: "j", answer: "jabali", status: 0, question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba") },
    { letter: "k", answer: "kamikaze", status: 0, question: ("CON LA K. Persona que se juega la vida realizando una acción temeraria") },
    { letter: "l", answer: "licantropo", status: 0, question: ("CON LA L. Hombre lobo") },
    { letter: "m", answer: "misantropo", status: 0, question: ("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas") },
    { letter: "n", answer: "necedad", status: 0, question: ("CON LA N. Demostración de poca inteligencia") },
    { letter: "ñ", answer: "señal", status: 0, question: ("CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.") },
    { letter: "o", answer: "orco", status: 0, question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien") },
    { letter: "p", answer: "protoss", status: 0, question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft") },
    { letter: "q", answer: "queso", status: 0, question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche") },
    { letter: "r", answer: "raton", status: 0, question: ("CON LA R. Roedor") },
    { letter: "s", answer: "stackoverflow", status: 0, question: ("CON LA S. Comunidad salvadora de todo desarrollador informático") },
    { letter: "t", answer: "terminator", status: 0, question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984") },
    { letter: "u", answer: "unamuno", status: 0, question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914") },
    { letter: "v", answer: "vikingos", status: 0, question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa") },
    { letter: "w", answer: "sandwich", status: 0, question: ("CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso") },
    { letter: "x", answer: "botox", status: 0, question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética") },
    { letter: "y", answer: "peyote", status: 0, question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos") },
    { letter: "z", answer: "zen", status: 0, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional") },
]

var BreakException = {};
var ranking = [] 
var time = true


function pasaPalabra(){
    ranking.push(new User("Mario",19,8))
    ranking.push(new User("Pedro",25,2))
    var user = new User(prompt("Introduce el del usuario"),0,0)
    alert("Tienes 2 minutos para completar el juego");

    setTimeout(function(){
        console.log("Entro")
        time = false
    }, 120000)

    hacerRoscon()

    //Ejecutar el Roscon Pasa Palabra
    function hacerRoscon () {
        try {
            questions.forEach(element => {
        
                if(element.status === 0){ //si la pregunta no ha sido repondida ... 
                    var pregunta = ''

    
                    if(time){//si te queda tiempo ..
                        toStringGame(element.letter)
                        alert("Con la letra 🧐 " + element.letter.toUpperCase())
                        pregunta = prompt(element.question).toLowerCase()
    
                        if (pregunta === element.answer){ //correcta
                            alert("Correcto! 🤩")
                            user.aciertos += 1;
                            user.teFaltan = user.teFaltan - 1;
                            element.status = 1; // status 1 Correcto
        
                        }else if (pregunta !== element.answer && pregunta !== 'end' && pregunta !== 'pasapalabra' && pregunta !== "") { //incorrecta
                            alert("Incorrecto! 🤯")
                            user.erroneas += 1;
                            user.teFaltan = user.teFaltan - 1;
                            element.status = 2; // status 2 Erroneo
        
                        }else if(pregunta === 'pasapalabra' || pregunta === "") {
                            
                            alert("Pasamos Palabra ... ")// Nothing to do ... 

                        }else if(pregunta === 'end'){ //end
                            throw BreakException;
                        } 
    
                    } else { //fin del tiempo ...
                        alert("Fin del tiempo ... 😅")
                    } 
                }  
            });
            
            console.log("cuantas te faltan?", user.teFaltan);

            if (user.teFaltan > 0) {
                alert("Seguimos el roscon 🔄")
                hacerRoscon() //Aun le faltan preguntas
            } else {
                ranking.push(user) //push en Ranking
                alert("Has completado el juego, mira la consola ⬇️ ")
                user.toString()
                toStringRanking()
            }
    
        } catch (e) {
            alert("No has terminado el juego, por lo tanto, no entraras en el Ranking ... 🤦🏻‍♂ ")
            user.toString();
            if (e !== BreakException) throw e;
        }
    }

    //new User
    function User (name, aciertos, erroneas) {
        this.name = name;
        this.aciertos = aciertos;
        this.erroneas = erroneas;
        this.teFaltan = 27;
        this.toString = function(){console.log(this.name, "Has acertado", this.aciertos, "Te has equivocado ", this.erroneas, "Y te han faltado", this.teFaltan, "letras")}
    }
    //toStringPasapalabra
    function toStringGame(letra) {
        var count = 0;
        var mostrar = '';
        questions.forEach(element => {
            count ++

            if(element.letter === letra) {
                mostrar += "["+ element.letter +"]"
            } else if (element.status === 1) {
                mostrar += " ✔ ︎"
            } else if (element.status === 2){
                mostrar += " ✘ "
            } else if (element.status === 0){
                mostrar += "(" +element.letter + ")"
            }

            if (count % 3 === 0){
                mostrar += "\n";
            }
        });

        console.log(mostrar)
    }

    //toStringRanking
    function toStringRanking () {
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
    
        sortArrOfObjectsByParam(ranking, "aciertos", true)
        var count = 0
        ranking.forEach(element => {
            count ++;
            console.log(count.toString(), ' --> ', element.name, ' Con ', element.aciertos.toString(), ' ACIERTOS!')
        });
    }
}

pasaPalabra()