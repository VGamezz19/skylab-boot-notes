function _reverseString(input, i) {
    var i = i ||  0;
    if (i < input.length) {
        var letter
        i++;
        letter = i === 1 ? input.slice(i * -1) : input.slice(i * -1, (i - 1) * -1);
        return letter + reverseString(input, i)
    }
    return ""
}
console.log(`"hello" Should return ---> olleh `, reverseString('hello'));


//La mejor forma es ... 

function reverseString(str) {
    if (str === '') {
        return ''
    } else {
       return reverseString(str.slice(1)) + str.charAt(0)
    } 
}

console.log(`"hello" Should return ---> olleh `, reverseString('hello'));