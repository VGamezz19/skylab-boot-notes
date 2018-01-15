var num1 = 0;
var num2 = 0;
var operador = ''
var result = 0;
var operacion = ''
var operadorSeleccionado = false;
function clickCalcu(event){
    if(event.path[0].value !== "AC"){
        document.getElementById("num1").value += event.path[0].value
    } else {
        document.getElementById("num1").value = ""
        document.getElementById("header").innerHTML = ''
        setTimeout(function(){document.getElementById("num1").focus();},300)
    }
}

function cliclFunction(event){
    
    if(event.path[0].value !== "=" && event.path[0].value !== "raiz") {
        operador = event.path[0].value
        num1 =  parseInt(document.getElementById("num1").value)
        document.getElementById("num1").value = ""
        operadorSeleccionado = true;
    } else {
        if(event.path[0].value === "raiz"){
            num1 =  parseInt(document.getElementById("num1").value)
            result = Math.sqrt(num1).toFixed(3)
            operacion = 'Raiz cuadrada de ' + num1+ " es --> " + result.toString()

            document.getElementById("num1").value = result
            document.getElementById("header").innerHTML = operacion
            setTimeout(function(){document.getElementById("num1").focus();},300)
            console.log(operacion)
        } else {
            console.log("Hola", operadorSeleccionado)
            if(operadorSeleccionado){
                num2 = parseInt (document.getElementById("num1").value)
                console.log(num1,num2,operador)

                if(operador === "+"){
                    sum(num1,num2);
                    console.log(operacion)
                }
                else if(operador === "-"){
                    resta(num1,num2)
                    console.log(operacion)
                }
                else if(operador === "*"){
                    multi(num1,num2)
                    console.log(operacion)
                }
                if(operador === "/"){
                    div(num1,num2)
                    console.log(operacion)
                }
            }else {

            }
            operadorSeleccionado = false;
        }
    }
}
//==================================== OPERACIONES ===============================//
function sum(){
    var suma = 0;
    var text
    for (num in arguments){
        suma += arguments[num]   
    }
    result = suma
    operacion = num1.toString() +" + "+ num2.toString() +" = " + result 
    document.getElementById("num1").value = result
    document.getElementById("header").innerHTML = operacion

    return(suma)
}
function resta(){
    result = arguments[0] - arguments [1]
    operacion = num1.toString() +" - "+ num2.toString() +" = " + result 
    document.getElementById("num1").value = result
    document.getElementById("header").innerHTML = operacion

    return arguments[0] - arguments [1]
}
function multi(){
    var multi = arguments[0];
    for (var i = 1; i<arguments.length; i++ ){  
        multi *= arguments[i];     
    }
    result = multi
    operacion = num1.toString() +" * "+ num2.toString() +" = " + result 
    document.getElementById("num1").value = result
    document.getElementById("header").innerHTML = operacion

    return multi
}
function div(){
    var div = arguments[0];
        for (var i = 1; i<arguments.length; i++ ){  
            div /= arguments[i];     
        }  
        result = div.toFixed(3)
        operacion = num1.toString() +" / "+ num2.toString() +" = " + result 
        document.getElementById("num1").value = result
        document.getElementById("header").innerHTML = operacion

        return div
}

window.onload = function() { 
    document.getElementById("num1").focus();
    document.onkeypress = mostrarInformacionCaracter;
}


function mostrarInformacionCaracter(evObject) {
    if(!document.getElementById("num1").value && !operadorSeleccionado){
        document.getElementById("header").innerHTML = ''
    }
    document.getElementById("header").innerHTML += evObject.key
    document.getElementById("num1").focus();
    if(evObject.key === '+' || evObject.key === '-' || evObject.key === '/' || evObject.key === '*') {
        if(evObject.key === '+' ){
            document.getElementById("suma").focus();
        }else if (evObject.key === '-' ){
            document.getElementById("resta").focus();
        }else if (evObject.key === '*' ){
            document.getElementById("multiplicacion").focus();
        }else if (evObject.key === '/' ){
            document.getElementById("division").focus();
        }    
        operador = evObject.key;
        num1 =  parseInt(document.getElementById("num1").value)
        document.getElementById("num1").value = ""
        operadorSeleccionado = true;
    } else if (evObject.key === '=' || evObject.key === 'Enter') {
        if(operadorSeleccionado){
            num2 = parseInt (document.getElementById("num1").value)
            console.log(num1,num2,operador)
            document.getElementById("igual").focus();
            setTimeout(function(){document.getElementById("num1").focus();},300)
            if(operador === "+"){
                sum(num1,num2);
                console.log(operacion)
            }
            else if(operador === "-"){
                resta(num1,num2)
                console.log(operacion)
            }
            else if(operador === "*"){
                multi(num1,num2)
                console.log(operacion)
            }
            if(operador === "/"){
                div(num1,num2)
                console.log(operacion)
            }
        }else {

        }
        operadorSeleccionado = false;
    }
}