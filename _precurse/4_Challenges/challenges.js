//======================================================================================//
//CHALLENGES
//======================================================================================//

console.log("//================== CHALLENGES ====================//")

//======================================================================================//
//Exercies A)
//======================================================================================//

console.log("//================== Exercices A0) ==================//")
console.log("//================== Exercices A1) ==================//")
console.log("//================== Exercices A2) ==================//")
console.log("//================== Exercices A3) ==================//")

function showNums(){
    var nums = [1,2,3,4,5,6,7,8,9,6,4] // arguments

    console.log(nums)
    var lastNum = nums[nums.length -2]
    var cuantasParejas = nums[nums.length -1]
    nums.splice(lastNum,2)

    console.log("El numero escogido es: ", lastNum)
    console.log("Se quieren mostrar las", cuantasParejas ,"primeras parejas")
    // 
// Se quieren mostrar las 3 primeras parejas
    for(var i = 0; i < cuantasParejas; i++){
        console.log(i +1, "ª pareja ",(nums[i]* nums[lastNum]) ," - ", (nums[i + 1]*nums[lastNum]));
    }
}
showNums()


console.log("//================== Exercices B1) ==================//")
console.log("//================== Exercices B2) ==================//")
console.log("//================== Exercices B3) ==================//")
console.log("//================== Exercices B4) ==================//")
console.log("//================== Exercices B5) ==================//")
function fibonacci(num){
    var a = 1, b = 0, temp;
    var array = []
  
    for ( var i = 0; i< num; i++){
        array.push(b)
        //UP Piramide
        console.log(array.join(" "))
        temp = a;
        a = a + b;
        b = temp;
    }

    var pop = array;
    for(var i = 0; i< num; i++) {
        pop.pop()
        console.log(pop.join(" "))
    }
}

fibonacci(10)

console.log("//================== Exercices C1) ==================//")

// var code = 1256
// function coding (){

//     console.log("Codigo -->", code)
//     var stringNumber = '';
//     var newCode = ''
//     stringNumber = code.toString();

//     newCode = stringNumber.substr(1) + stringNumber.substr(0,1)
//     code = parseInt(newCode) 

//     console.log(code)
// }
// coding()

console.log("//================== Exercices C2) ==================//")

// function coding (){
//     console.log(arguments)
//     for(var i = 0; i< arguments.length; i++){
//         console.log("Codigo -->", arguments[i])
//         var stringNumber = '';
//         var newCode = ''
//         stringNumber = arguments[i].toString();
    
//         newCode = stringNumber.substr(1) + stringNumber.substr(0,1)
//         arguments[i] = parseInt(newCode) 
//         console.log(arguments[i])
//     }
//     console.log(arguments)
// }
// coding(1342,1343)

console.log("//================== Exercices C3) ==================//")
var crypter = []
function encrypt (){
    for(var i = 0; i< arguments.length; i++){
        console.log("//====================================//")
        console.log("Codigo -->", arguments[i])
        var stringNumber = '';
        var newCode = ''
        var array = []
        var arrayMultiplica = []
        stringNumber = arguments[i].toString();
    
        newCode = stringNumber.substr(1) + stringNumber.substr(0,1)
        arguments[i] = parseInt(newCode) 

        for(var j = 0; j < newCode.length; j++){
            array.push(parseInt(newCode[j]))
        }
       
        arrayMultiplica = array.map(function(element){

            if((element*2).toString().length > 1){
                return element
            } else if ((element * 2).toString().length < 2) {
                return element * 2;
            }
        })
        console.log("formato array --> ",array, "Multiplicado * 2 si puede ", arrayMultiplica)
        console.log("Sin multiplicar --> ",arguments[i])
        console.log("Multiplicado --> ", parseInt( arrayMultiplica.join("")))

        crypter.push( parseInt( arrayMultiplica.join("")) )
    }
}
encrypt(1322,1343)

console.log("//================== Expresi Regu) ==================//")

var name = "Victor Gamez".replace(/ /g, ''); //expresion regular
console.log(name);

console.log("//================== Exercices C4) ==================//")


function desencrypt() {
    //console.log(arguments)
    var numbers = arguments[0];
    for (var i = 0; i < numbers.length; i++){
        var stringNumber = ''
        var array = []
        var newCode = ''
        var arrayDividida = []

        stringNumber = numbers[i].toString();
        newCode = stringNumber.substr(-1) + stringNumber.substr(0,3) 
    
        for(var j = 0; j < newCode.length; j++){
            array.push(parseInt(newCode[j]))
        }

        arrayDividida = array.map(function(element){
            num = parseInt(element)
            return num / 2
        })

        console.log("Desencriptado --> ", arrayDividida.join(""))
    }
}

desencrypt(crypter)

console.log("//================== Exercices C6) =================//")

var crypter = []
function takeCode (letras){
    var dictionary = {
        0: ['A', 'K', 'T', 'F', 'O', 'Y'],
        1: ['B', 'L', 'U', 'G', 'P', 'Z'],
        2: ['C', 'M', 'V', 'H', 'Q', '.'],
        3: ['D', 'N', 'W', 'I', 'R', ','],
        4: ['E', 'Ñ', 'X', 'J', 'S', ' ']
    }
    var stringNumber = ''
    var newCode = ''
    var array = []
    var arrayMultiplica = []

    for(var i = 0; i<letras.length; i++){
        for (var propiedad in dictionary){
            dictionary[propiedad].forEach(function(element){
               // console.log("IF", letras[i], "===", element)
                if(letras[i] === element){
                    stringNumber += propiedad.toString();
                    return propiedad
                }
            })
        } 
    }
    for (var propiedad in dictionary){
        console.log(propiedad , " : ", dictionary[propiedad].join(""))
    }
    //console.log(dictionary)
    console.log("Letras introducidas --> ", letras)
    console.log("Codigo ha encriptar --> ", stringNumber)
    return stringNumber
    

}
//takeCode("WE NEED HEELP") // 3443443424411

console.log("//================= llamamos Ej C3  ================//")

encrypt(takeCode("WE NEED HELP"))

console.log("//================== Exercices D1) =================//")
var romanicoEncryp = ''
function romanico (palabra) {
    console.log("Palabra ",palabra)
    var mitadPalabra = Math.trunc( (palabra.length) / 2)
    var primeraMitad = ''
    var segundaMitad = ''
    var encrypted = ''
    
    for ( var i = 0; i< mitadPalabra; i++){
        primeraMitad += palabra[i];
    }
    for(var i = mitadPalabra; i< palabra.length; i++){
        segundaMitad += palabra[i]; 
    }
    
    console.log("Primera Mitad ", primeraMitad)
    console.log("Segunda Mitad ", segundaMitad)

    for(var i = 0; i < mitadPalabra; i++){
        encrypted += primeraMitad[i] + segundaMitad[i]
    }
    romanicoEncryp = encrypted
    console.log("Encrypted ", encrypted)  

}

romanico("SKYLABCODERS")

console.log("//================== Exercices D2, D3, D4) =================//")

function desRomanico (palabra) {
    console.log(palabra)

    var primeraMitad = '';
    var segundaMitad = '';
    var desencrypted = '';

    for(var i = 0; i< palabra.length; i++){
        (i % 2) === 0 ? primeraMitad += palabra[i] : segundaMitad += palabra[i]
    }

    console.log(primeraMitad)
    console.log(segundaMitad)

    console.log(desencrypted = primeraMitad + segundaMitad)
}

desRomanico(romanicoEncryp)

console.log("//================== Exercices E1) =================//")
console.log("//================== Exercices E2, E3) =================//")

function transformNumbers (number){
    var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var tens = [' ', ' ', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var firstNumber = ''
    var secondNumber = ''
    var thirdNumber = ''
    var numeroEntero = ''

    //0 -  9
    if(number.toString().length < 2){
        for(var i = 0; i < units.length; i++){
            i === number ? console.log(number.toString(), ' --> ', units[i], ", ", units[i]," / ", number.toString()) : console.log()
        }
    //10 - 19
    } else if(number.toString().length > 1 && number > 9 && number < 20) { // entre 9 - 20 
        var secondNumber = number.toString().substr(-1)

        for(var i = 0; i < teens.length; i++){
            i === parseInt(secondNumber) ? console.log(number.toString(), ' --> ', teens[i], ", ", teens[i]," / ", number.toString()) : console.log()
        }
    //20 - 100
    } else if (number.toString().length > 1 && number >= 20 && number < 100) {
        firstNumber = number.toString().substr(0, 1)
        secondNumber = number.toString().substr(-1)

        var positionFirst = 0
        for(var i = 0; i < tens.length; i++){
            if(i === parseInt(firstNumber)){
                positionFirst = i
                firstNumber = tens [i]
                numeroEntero = tens[i]
            }
        }

        var positionSecond = 0
        for(var i = 0; i < units.length; i++){
            if(i === parseInt(secondNumber)){
                positionSecond = i
                secondNumber = units[i]
                numeroEntero += " " + units[i]
            }
        }

        console.log(numeroEntero ,", ", firstNumber, " + ", secondNumber, " / ", positionFirst.toString() + "0", " + ", positionSecond.toString() )
                                         //output twenty-three, twenty + three / 20 + 3

    }else if (number.toString().length > 2 && number > 99 && number <= 1000) {
        
        if(number === 1000){
            console.log("One thousand", ", One + thousand", " / 1000")
            //One thousand
        } else {
            firstNumber = number.toString().substr(0,1)
            secondNumber = number.toString().substr(1,1)
            thirdNumber = number.toString().substr(-1)
            //X10 - X19
            if ( parseInt(secondNumber + thirdNumber) > 9 && parseInt(secondNumber + thirdNumber) < 20) {

                var positionFirst = 0;
                var positionSecond = 0;
                for(var i = 0; i < units.length; i++){
                    if (i === parseInt(firstNumber)){
                        positionFirst = i
                        firstNumber = units[i]
                        numeroEntero = units[i] + " hundred"
                    }
                }
                for(var i = 0; i < teens.length; i++){
                    if(i === parseInt(thirdNumber)){
                        positionSecond = i;
                        secondNumber = teens[i]
                        numeroEntero += " " + teens[i]
                    }
                }

                console.log(numeroEntero + ",",firstNumber,"hundred +", secondNumber, "/", positionFirst.toString() + "00 + 1" +positionSecond.toString()  )
      
            //100 - 900
            } else if (secondNumber === '0' && thirdNumber === '0') {
                var positionFirst = 0;
                for(var i = 0; i < units.length; i++){
                    if (i === parseInt(firstNumber)){
                        positionFirst = i
                        firstNumber = units[i]
                        numeroEntero = units[i] + " hundred"
                    }
                }

                console.log(numeroEntero + ",",firstNumber,"+ hundred", "/", positionFirst.toString() + "00")
            
            //X01 - X09
            } else if(secondNumber === '0'){
                var positionFirst = 0;
                var positionSecond = 0;
                for(var i = 0; i < units.length; i++){
                    if (i === parseInt(firstNumber)){
                        positionFirst = i
                        firstNumber = units[i]
                        numeroEntero = units[i] + " hundred"
                    }
                }
                for(var i = 0; i < units.length; i++){
                    if(i === parseInt(thirdNumber)){
                        positionSecond = i;
                        secondNumber = units[i]
                        numeroEntero += " " + units[i]
                    }
                }

                console.log(numeroEntero + ",",firstNumber,"hundred +", secondNumber, "/", positionFirst.toString() + "00 + " +positionSecond.toString()  )
                //One hundred and once
            
                //XXX - XXX
            }else {
                var positionFirst = 0;
                var positionSecond = 0;
                var positionThird = 0;
                for(var i = 0; i < units.length; i++){
                    if (i === parseInt(firstNumber)){
                        positionFirst = i
                        firstNumber = units[i]
                        numeroEntero = units[i] + " hundred "
                    }
                }
                for(var i = 0; i < tens.length; i++){
                    if(i === parseInt(secondNumber)){
                        positionSecond = i
                        secondNumber = tens [i]
                        numeroEntero += tens[i]
                    }
                }
                for(var i = 0; i < units.length; i++){
                    if(i === parseInt(thirdNumber)){
                        positionThird = i
                        thirdNumber = units[i]
                        numeroEntero += " " + units[i]
                    }
                }
                console.log(numeroEntero + ",",firstNumber,"hundred +", secondNumber,"+", thirdNumber, "/", positionFirst.toString() + "00 + " +positionSecond.toString()+"0", "+", positionThird.toString()  )
                console.log("168")
                //One hundred sixty eight
            }
        }  
    } else {
        console.log("Solo numberos del 0 - 1000")
    }
}

transformNumbers(245)

console.log("//================== Exercices F1) =================//")

function textReplace(texto){
    var punto = '.'
    var text = ''
    console.log(texto)
    text = texto.replace(/,/g, ''); //todas las , por ''
    text = text.replace(/\./g, ','); //Todos los . por ,
    text = text.replace(/dolor /g, 'potato ');
    text = text.replace(/lorem /g, 'tomato ');
    text = text.replace(/labor /g, 'cucumber ');
    text = text.replace(/consequatur /g, 'garlic ');
    text = text.replace(/ipsum /g, 'onion '); 

    console.log(text)
}

var text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore '
text += 'magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo '
text +='consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
text += 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
text += 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque'
text += ' ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia '
text += 'voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. '
text += 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi'
text += ' tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem '
text += 'ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea '
text += 'voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.'

textReplace(text)
