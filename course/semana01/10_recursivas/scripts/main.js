'use strict';

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