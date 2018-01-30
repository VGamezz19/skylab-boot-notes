var newGame
var $noAnimation = $(".noAnimation");
var $endGame = $(".endGame");
var $endGameTitle = $("#endGameTitle");
var $inGame = $(".inGame");
var $inputInGame = $("#inputInGame")
var $myStatusTitleWord = $("#myStatusTitleWord")

// tipos de acciones
function endGameLost() {
    $noAnimation.children().addClass("hidden")
    $endGame.removeClass("hidden")
    $endGameTitle.text("Alien ate predator... He die... but Alien is so happy! 😁")
    instaKillPredator()
}

function endGameWin() {
    $noAnimation.children().addClass("hidden")
    $endGame.removeClass("hidden")
    $endGameTitle.text("You Win!!! Alien never will kill us.")
}

function startGame(word) {
    newGame = new gamePredator(word, 10);
    $noAnimation.children().addClass("hidden")
    $inGame.removeClass("hidden")

    $myStatusTitleWord.text(newGame.print())
}

// Forms actions in Game
$(".initGame").submit(function (e) {
    e.preventDefault();
    var wordGame = $("#initWorldGame").val()
    startGame(wordGame)
})

$inGame.submit(function (e) {
    e.preventDefault();
    var tryIt = $inputInGame.val()
    $myStatusTitleWord.text(newGame.try(tryIt))
    $inputInGame.val("")
})

$("#replayButton").on("click", function(){
    location.reload(true);
})