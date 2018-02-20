
var $alien = $('.alien');
var $predator = $('.predator');
var i = 0;

function failLiterActioningAnimation() {
    i ++
    if (i < 10) {
        $alien.animate({right: "+=9.5%"}, "slow" )
    } else {
        $predator.attr("src", "./public/muertePredator.gif");
        endGameLost() 
    }

}

function instaKillPredator (){
    $alien.animate({right: "90%"}, "fast" )
    $predator.attr("src", "./public/muertePredator.gif");
    $("#headerPredator").attr("src", "./public/alienDance.gif");
}


$alien.on("click", function(){
    endGameLost()
})
