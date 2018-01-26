var doc = document;
var qs = doc.querySelector.bind(document);

var $form = $("form");
var $titleInput = $("input[type=text]");
var $list = $("ul");

$form.submit(function (e) {  e.preventDefault();
    var titel = $titleInput.val()
    var confirm = "<a href='#'>✔︎</a>"

    $list.append("<li>" + titel + confirm + "</li>");
    $titleInput.val("")  
});

$(window).click(function (e) {
    if (e.target.tagName === 'A') {
        e.target.parentNode.remove();
    }
});