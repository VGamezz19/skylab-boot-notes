"use strict";

//Mi forma.
var index = 0;
var arrayTest = [1, 2, 3, 4, 5, 6, 7];


function callbackConsoleLog(el) {
    index++;
    return console.log(el)
}

function recursiveLoop(inputArr, callback) {
    if (index === inputArr.length) return true;

    callback(inputArr[index]);
    
    return recursiveLoop(inputArr, callback)
}

recursiveLoop(arrayTest, callbackConsoleLog)

//Forma Correcta...

function loop(arr, callback, i) {
    i = i || 0;

    if (i < arr.length) {
        callback(arr[i]);

        loop(arr, callback, ++i);
    }
}

function addSymbol(el) {
    console.log(el + '$');
}

console.log(loop([1, 2, 3], addSymbol));
console.log(loop([1, 2, 3], addSymbol));
