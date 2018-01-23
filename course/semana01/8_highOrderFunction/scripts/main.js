// ## map

// Write a high order function that take the array of months and create a
// new array that contains the same months but with the first letter in upper case.

// ```
// var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december']
// ```

function mapFunc() {
    var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']

    return months.map(function (el) {
        return el.charAt(0).toUpperCase() + el.slice(1);
    })
}


// ## filter

// Write a high order function that take the array of months and create a new array 
//that contains only the months that begin with j.

// ```
// var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december']
// ```

function filterFun() {
    var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']

    return months.filter(function (el) {
        return el.charAt(0) === "j"
    })
}

// ## reduce
//Example Reduce
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) {
    if (name in allNames) {
        allNames[name]++;
    } else {
        allNames[name] = 1;
    }
    return allNames;
}, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

// Write a high order function that counts all the vowels of the following text.

// // ```
// // var loremIpsum = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
//  euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
//   quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
//   Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
//    vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
//  blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'
// // ```

var loremIpsum = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'

var countVowels;
(function () {
    var regex = /[aáàäèéëeìíïiòóoöúùüu]/ig;
    //i -> ignore case (upper, lower)

    countVowels = function (text) {
        return text.split("").reduce(function (vowelsCount, letter) {

            if (letter.toLowerCase().match(regex)) {
                return vowelsCount += 1
            }
            return vowelsCount
        }, 0)
    }
})()
//## every & some

//Write a high order function that returns true if all months 
// have five letters or more, and if some month has five letters or more.
//---------------------
//como bien dice las palabras de every y some, every, buscara en todos los elementos, si cumple la condicion
//para todos los elementos, devolvera TRUE, si no coincide con algun caso, romperar el recorrido y devolvera False
//el Some, solo si encuentra UNO que compla la condicion, devolvera TRUE.
var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']

console.log(months.every(function (el) {
    return el.length >= 5;
})) //return False 

console.log(months.some(function (el) {
    return el.length >= 5;
})) //return True

//-------------------
//CallBack ASYNC

function call(callback) {
    console.log("Pidiendo datos al servidor...")
    setTimeout(function () {
        callback()
    }, 2000)
}

function serverRequest() {
    console.log("Done! request succes!")
}

call(serverRequest)