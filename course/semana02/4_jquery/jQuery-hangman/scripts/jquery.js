

start();

function start() {
  $(".noAnimation").children().hide()
//   $("#mainAnimation").show();
//   $("#start").show();
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


