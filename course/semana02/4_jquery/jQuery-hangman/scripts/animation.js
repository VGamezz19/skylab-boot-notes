
var $alien = $('.alien');
var $predator = $('.predator');
var i = 0;

function failLiterActioningAnimation() {
i ++
   if (i < 10) {
    $alien.animate({right: "+=9.5%"}, "slow" )
   } else {
       $(".predator").attr("src", "./public/muertePredator.gif");
   }

}
