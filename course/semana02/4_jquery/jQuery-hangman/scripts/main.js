var secretWord;
var attempsGlobal;

function Game(word, attemps) {
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
                console.log("Too bad... you " + ((attemps >= 0) ? ("only have " + attemps) : "lost noob"))
                return attemps + ") " + self.print()
            }
        }
        this.print = function () {
            var arrWor = word.split("")

            return arrWor.map(function (el) {
                return (correctLetters.includes(el)) ? el : "_"
            }).join(" ")
        }
    } else {
        return console.error("no word or attemps inputed")
    }
}


start();

function start() {
  $(".noAnimation").children().hide()
  $("#mainAnimation").show();
  $("#start").show();
}

function defineWord() {
  $("#start").hide();
  $("#defineWord").show();

}


function playingGame(secretWord) {
  this.secretWord = secretWord;
  $("#defineWord").hide();
  $("#playingGame").show();
  newGame = new Game(secretWord, 10);
}


function resultLose(state) {
  $("#playingGame").hide();
  $("#resultLose").show();
  if (state === 1) $("#resultLose").show('No more attemps');
  if (state === 2) $("#resultLose").show('You are wrong with the word');
}

function resultWin(attempsVal) {
  $("#playingGame").hide();
  $("#resultWin").show();
  $("#attemps").show(attempsVal);
  $("#secretWord").show(secretWord);
}


$("#formTry").submit(function (e) {
    e.preventDefault();
    var value = $("#inputHang").val()
    $("#resultTextH1").html(newGame.try(value))

})


