var $form = $("form");
var $titleInput = $("input[type=text]");
var $list = $("ul");

//no hace falta encapsular el `form` en una variable, porque solo se llama una vez
// para añadirle el evento submite
$("form").submit(function (e) {
    e.preventDefault();
    var titel = $titleInput.val()
    var confirm = "<a href='#'>✔︎</a>"

    $list.append("<li>" + titel + confirm + "</li>");
    $titleInput.val("")
});

$(document).on('click','a',function (e) {
    //This sera la etiqueta `a` que estemos haciendo el evento `click`
    $(this).parent().remove()
});