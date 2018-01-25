function text(_text) {

    function oneSymbol(el) {
        return _text = el + _text ;
    }

    function thowSymbol(el1, el2) {
        return _text = el1 + _text + el2;
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
            return _text;
        }
    }
}

console.log("This text should be *{hola} -->", text("hola").wrap("{", "}").wrap("*").toString());
console.log("This text should be $[*{hola}]$ -->", text("hola").wrap("{", "}").wrap("*").wrap("[", "]").wrap("$", "$").toString());
console.log("This text should be Error Somthing Wrong  ... -->", text("hola").wrap("{", "}").wrap("*").wrap("[", "]").wrap().toString());
console.log("This text should be Error Envalid parameters, functions Wrap only accepts Strings Symbols--> Wrap(element {string}, secondOptionalElement {string}) -->", text("hola").wrap("{", "}").wrap("*").wrap("[", "]").wrap(3).toString());
console.log("This text should be Error Only accepts Symbols. -->", text("hola").wrap("{", "}").wrap("*").wrap("[", "]").wrap("h").toString());
console.log("This text should be Error Only accepts Symbols. -->", text("hola").wrap("{", "}").wrap("*").wrap("[", "]").wrap("[", "a").toString());
console.log("This text should be $[*{HOLA}]$  -->", text("hola").wrap("{", "}").wrap("*").wrap("[", "]").toString().toUpperCase());


/**
 * Text tool
 * 
 * @version 2.0.0
 */

var text;
(function () {
  function wrap(text, before, after) {
    return (before || '') + text + (after || before || '');
  }

  text = function (_text) {
    var __text = new String(_text);

    __text.wrap = function (before, after) {
      return text(wrap(_text, before, after));
    }

    return __text;
  }
})();