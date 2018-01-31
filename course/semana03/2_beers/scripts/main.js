// Main and Jquery
var $progressDad = $('.sectionProgress');
var $progress = $(".progress-bar");
var $boxCard = $("#box");

// ================ ACTION PAGES =============
//Acctions Pages jQuery
var URLQ = 'http://quiet-inlet-67115.herokuapp.com/api/search/all?q=';
var URLID = 'https://quiet-inlet-67115.herokuapp.com/api/beer/';

$('form').submit(function (e) {
    e.preventDefault();
    var query = $('input').val();
    console.log(query)
    $progress.css({"width": "0"});
    initLoader();

    getApiBeer(URLQ + query, function (err, res) {
        if (err) return errorRequest(err)
        //When CallBack succes then execute ...
        endLoader(res)
    });
});

//StartLoadAnimation
function initLoader() {
    $progressDad.removeClass('hidden');
    $progress.removeClass('bg-danger');
    $progress.animate({
        width: '50%'
    }, "slow");
}

function endLoader(res) {
    $progress.animate({
        width: '100%'
    }, "fast", function () {
        //when animation end, then ...
        setTimeout(function () {
            $progressDad.addClass('hidden');
            // and print all cards.
            $boxCard.html(addCards(res));
        }, 1000)


    });
}

function errorRequest() {
    $progress.addClass("bg-danger");
    throw new Error("The searcher didn't found nothing")
}