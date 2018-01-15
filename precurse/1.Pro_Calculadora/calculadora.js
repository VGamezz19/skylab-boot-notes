function startCalculator() {
    //take Values from DOM
    var num1 = Number(document.getElementById("num1").value)
    var num2 = Number(document.getElementById("num2").value)

    //array resultados
    var resultados = []
 
    if(isNaN(num1) || isNaN(num2)) {
        console.log("Introduce un NUMERO!")
    } else if (!num2 && num1){

        resultados.push(" Raiz Cuadrada de " + num1.toString() + " = " + Math.sqrt(num1).toFixed(3))
        console.log(resultados.toString())

        confirmation()

    } else if (!num1 && num2) {

        resultados.push(" Raiz Cuadrada de " + num2.toString() + " = " + Math.sqrt(num2).toFixed(3))
        console.log(resultados.toString())

        confirmation()

    } else if (!num1 && !num2) {
        console.log("Nada que calcular")
    } else {
        //Add Operations
        resultados.push(" " + num1 + " + " + num2 + " = " + (num1 + num2).toFixed(3))
        resultados.push(" " + num1 + " - " + num2 + " = " + (num1 - num2).toFixed(3))
        resultados.push(" " + num1 + " * " + num2 + " = " + (num1 * num2).toFixed(3))
        resultados.push(" " + num1 + " / " + num2 + " = " + (num1 / num2).toFixed(3))   
        
        //resultado toString
        console.log(resultados.toString().replace(/,/g, "|"))

        confirmation()
    }

}

//==================================== PRO ===============================//

function sum(){
    var suma = 0;
    var text

    for (num in arguments){
        suma += arguments[num]   
    }

    console.log(suma.toFixed(3))

    confirmation()
}

function resta(){
    var resta = 0;
    var sumArgu = 0

    for (var i = 0; i<arguments.length; i++ ){  
        sumArgu += arguments[i];        //25 + 3 + 7 + 5
    }

    sumArgu = sumArgu - arguments[0]    // 25 - 25 + 3 + 7 + 5
    
    console.log((arguments[0] - sumArgu ).toFixed(3))      // 25 - 15

    confirmation()
}

function multi(){
    var multi = arguments[0];

    for (var i = 1; i<arguments.length; i++ ){  
        multi *= arguments[i];     
    }

    console.log(multi.toFixed(3))

    confirmation()
}

function div(){
    var div = arguments[0];
    
        for (var i = 1; i<arguments.length; i++ ){  
            div /= arguments[i];     
        }
    
        console.log(div.toFixed(3))
    
        confirmation()
}


//Pregunta Usuario

function confirmation(){
    if(!confirm("¿Desea Realizar Otra Operacion?")) {
        window.location = 'http://www.skylabcoders.com/es'
    } else {
        alert("Okey ^^")
    }
}
