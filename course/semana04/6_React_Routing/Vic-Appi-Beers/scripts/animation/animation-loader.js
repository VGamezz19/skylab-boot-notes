var animationLoader;

(function () {
    var $progressDad = $('.sectionProgress');
    var $progress = $(".progress-bar");
    var $box = $("#box");

    animationLoader = {
        initLoader: function () {
            $progress.removeClass('bg-danger');
            $progressDad.removeClass('hidden');

            $progress.animate({
                width: '50%'
            }, "slow");
        },
        endLoader: function () {
            return new Promise((resolve, reject) => {
                $progress.animate({
                    width: '100%'
                }, {
                    duration: "fast",
                    complete: function () {
                        //Bug detected...
                        //I need to put a timeout...
                        setTimeout(()=>resolve(true), 1000)        
                    }
                })
            })
        },
        clearLoader: function () {
            $progress.css({
                "width": "0"
            });
        },
        errorLoader: function () {
            $progress.addClass("bg-danger");
            $box.html("");
            $box.html('<section><img src="img/error.gif" alt=""> <h1><b>404</b> Not Found</h1></section>');
        }
    }
})()