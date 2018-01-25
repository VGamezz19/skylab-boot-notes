function test(_word) {
    var word = _word;

    function oneSymbol(el) {
        return word = el + word;
    }

    function thowSymbol(el1, el2) {
        return word = el1 + word + el2;
    }

    return {
        wrap: function wrap(inputFirstSymbol, inputSecondSymbol) {
            var firstSymbol = inputFirstSymbol || "";
            var secondSymbol = inputSecondSymbol || "";
            var regExp = /[^\d\w\sñç]/g;

            try {
                //ThrowError if...
                if (typeof (firstSymbol) !== "string" || typeof (secondSymbol) !== "string") throw new Error("Envalid parameters, functions Wrap only accepts Strings Symbols--> Wrap(element {string}, secondOptionalElement {string})")

                if (firstSymbol && !secondSymbol) {
                    //ThrowError if is not a Symbol...
                    if (!firstSymbol.match(regExp)) throw new Error("Only accepts Symbols.")

                    oneSymbol(firstSymbol);
                    return this;
                } else if (firstSymbol && secondSymbol) {
                    //ThrowError if is not a Symbol...
                    if (!firstSymbol.match(regExp) || !secondSymbol.match(regExp)) throw new Error("Only accepts Symbols.")

                    thowSymbol(firstSymbol, secondSymbol);
                    return this;
                }

                throw new Error("Somthing wrong ...");
            } catch (err) {
                console.error(err);
                return false;
            }
        },
        toString: function toString() {
            return word;
        }
    }
}

console.log("This test should be *{hola} -->", test("hola").wrap("{", "}").wrap("*").toString());
console.log("This test should be $[*{hola}]$ -->", test("hola").wrap("{", "}").wrap("*").wrap("[", "]").wrap("$", "$").toString());
console.log("This test should be Error Somthing Wrong  ... -->", test("hola").wrap("{", "}").wrap("*").wrap("[", "]").wrap().toString());
console.log("This test should be Error Envalid parameters, functions Wrap only accepts Strings Symbols--> Wrap(element {string}, secondOptionalElement {string}) -->", test("hola").wrap("{", "}").wrap("*").wrap("[", "]").wrap(3).toString());
console.log("This test should be Error Only accepts Symbols. -->", test("hola").wrap("{", "}").wrap("*").wrap("[", "]").wrap("h").toString());
console.log("This test should be Error Only accepts Symbols. -->", test("hola").wrap("{", "}").wrap("*").wrap("[", "]").wrap("[", "a").toString());