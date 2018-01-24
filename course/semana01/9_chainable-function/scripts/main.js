function test(_word) {
    var word = _word;

    function oneSymbol(el) {
        return word = el + word;
    }

    function thowSymbol(el1, el2) {
        return word = el1 + word + el2;
    }

    return {
        wrap(_firstSymbol, _secondSymbol) {
            var firstSymbol = _firstSymbol || false;
            var secondSymbol = _secondSymbol || false;
            try {
                if (firstSymbol && !secondSymbol) {
                    oneSymbol(firstSymbol);
                    return this;
                } else if (firstSymbol && secondSymbol) {
                    thowSymbol(firstSymbol, secondSymbol);
                    return this;
                }
                throw new Error("No spected case");
            } catch (err) {
                console.error("Error!", err);
                return false;
            }
        },
        toString(){
            return word;
        }
    }
}