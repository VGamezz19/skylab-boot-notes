function isArray(a) {
    return a.constructor == Array
}

function isArray(element){
	if(element === null || element === undefined){
		return false;
	}
	var result = Object.prototype.toString.call(element).slice(8,-1);
	return (result == "Array")? true : false;
}

console.log("input isArray('Skylab') this should returns false -->", isArray('Skylab')); // this should returns false
console.log("input isArray([3, 5]) this should returns true -->", isArray([3, 5])); // this should returns true
console.log("input isArray({}) this should returns false -->", isArray({})); // this should returns false

function joinElement() {
    return ['John', 'George', 'Ringo', 'Paul'].join(", ");
}
console.log("input joinElement('Skylab') this should returns 'John,George,Ringo,Paul' -->", joinElement());

function arrayClone(a) {
    return new Array(a)
}
var a = [1, 2, [4, 0]]
var b = arrayClone(a)
var boo = false
var element


function findDifferences(a, b) {
    var aDiff = a.filter(function (el) {
        return !b.includes(el)
    })
    var bDiff = b.filter(function (el) {
        return !a.includes(el)
    })
    console.log(bDiff, aDiff)
    return aDiff.concat(bDiff)
}
console.log(findDifferences([1, 2, 3], [100, 2, 1, 10]));
console.log(findDifferences([1, 2, 3, 4, 5], [1, [2],
    [3, [
        [4]
    ]],
    [5, 6]
]));
console.log(findDifferences([1, 2, 3], [100, 2, 1, 10]));

function sumAndProduct(a) {
    var sum = a.map(function (el) {
        return el + 2
    })
    var multi = a.map(function (el) {
        return el * 2
    })
    return `array summ --> ${sum}, array product ${multi}`
}
console.log(sumAndProduct([1, 2, 3, 4, 5, 6, 7, 8, 9]))

var array = []
array.__proto__.addItems = function addItems(el) {
    this.push(el)
    return this
}
console.log(array.addItems("newItem"))

function generateArrayLength(ini, len) {
    return
}