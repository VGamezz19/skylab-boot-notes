// Main and Jquery
let $progressDad = $('.sectionProgress');
let $progress = $(".progress-bar");
let $boxCard = $("#box");
let $inputSaercher = $('input')

// ================ ACTION PAGES =============
//Acctions Pages jQuery
$('form').submit(e => {
    e.preventDefault();
    var query = $inputSaercher.val();
    animationLoader.clearLoader()

    animationLoader.initLoader()

    getApiBeer.getSearch(query)
        .then(res => {
            animationLoader.endLoader()
                .then(() => {
                    $progressDad.addClass('hidden')
                    return $boxCard.html(addCards(res));
                })
        })
        .catch(err => {
            animationLoader.errorLoader()
            return console.error("some error in search -->", err)
        })


});