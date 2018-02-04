let contadorRect = 1
function fibonacci(num) {
    contadorRect++
    if (num === 0) return 0
    if (num === 1) return 1
    return fibonacci(num - 1) + fibonacci(num - 2)
}

let contadorMemo = 1
function fibonacciMemo(num, memoria = {}) {
    contadorMemo++
    if (memoria[num]) return memoria[num]
    if (num === 0) return 0
    if (num === 1) return 1
    return memoria[num] = fibonacciMemo(num - 1, memoria) + fibonacciMemo(num - 2, memoria)
}

console.log(fibonacci(20))
console.log(fibonacciMemo(20))
console.log("Count from countRect", contadorRect)
console.log("Count from countMemo", contadorMemo)