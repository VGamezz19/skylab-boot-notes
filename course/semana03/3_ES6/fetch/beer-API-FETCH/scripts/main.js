// Main and Jquery
var $progressDad = $('.sectionProgress');
var $progress = $(".progress-bar");
var $boxCard = $("#box");
var $inputSaercher = $('input')

// ================ ACTION PAGES =============
//Acctions Pages jQuery

$('form').submit(function (e) {
    e.preventDefault();
    var query = $inputSaercher.val();
    //put Loader progress in defauld style
    $progress.css({"width": "0"});

    getApiBeer.getSearch(errorRequest, query, initLoader)
    .then(res => endLoader(res))
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
    $boxCard.html("");
    $boxCard.html('<section><img src="img/error.gif" alt=""> <h1><b>404</b> Not Found</h1></section>');
    throw new Error("The searcher didn't found nothing")
}

