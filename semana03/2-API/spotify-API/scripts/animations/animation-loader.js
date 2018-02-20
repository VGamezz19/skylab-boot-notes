var animationLoader;

(function () {
    var $progressDad = $('.sectionProgress');
    var $progress = $(".progress-bar");
    var $box = $("#box");

    animationLoader = {
        initLoader: function () {
            $progress.animate({
                width: '50%'
            }, "slow");
        },
        endLoader: function () {
            $progress.animate({
                width: '100%'
            }, "fast", function () {
                return true
            });
        },
        clearLoader: function () {
            $progressDad.removeClass('hidden');
            $progress.removeClass('bg-danger');
        },
        errorLoader: function () {
            $progress.addClass("bg-danger");
            $box.html("");
            $box.html('<section><img src="img/error.gif" alt=""> <h1><b>404</b> Not Found</h1></section>');
        }
    }
})()