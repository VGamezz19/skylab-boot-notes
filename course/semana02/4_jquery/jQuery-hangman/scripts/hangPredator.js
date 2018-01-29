function gamePredator(word, attemps) {
    var word = word.toLocaleLowerCase()
    if (word && attemps) {
        var correctLetters = []
        this.try = function (string) {
            var self = this
            if (string && isNaN(string)) {

                if (attemps >= 0) return (string.length > 1) ? allWord(string) : letter(string)

                return console.error("NO MORE ATTEMPS, GAME OVER")
            }

            return console.error("no letter inputed")
            //Clousure
            function letter(string) {
                var string = string.toLocaleLowerCase()

                if (word.includes(string)) {

                    var currentWordUser = word.split("").map(function (el) {
                        return (correctLetters.includes(el)) ? el : "_"
                    }).join(" ")
                    correctLetters.push(string)
                    if (currentWordUser == word) {
                        attemps = 0
                        return "You WIN! the Word is " + word
                    }
                    console.log("Nice! " + string + " is correct letter! ")
                    return attemps + ") " + self.print()
                }

                attemps--
                failLiterActioningAnimation()
                if (attemps < 1) {
                    return "Alien ate you... holy s***"
                }
                return attemps + ") " + self.print()

            }

            function allWord(string) {
                var string = string.toLocaleLowerCase()

                if (string === word) {
                    attemps = 0
                    return "You WIN! the Word is " + word
                }    
                return "Too bad... you Alien fuuck you"
            }
        }
        this.print = function () {
            var arrWor = word.split("")

            return arrWor.map(function (el) {
                return (correctLetters.includes(el)) ? el : "_"
            }).join(" ")
        }
    } else {
        return "No word or attemps inputed"
    }
}