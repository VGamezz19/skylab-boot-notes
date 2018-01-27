## [← |](https://github.com/VGamezz19/skylab-curso/blob/dev/course/semana02/)   jQuery

jQuery es una libreria basada en el `DOM` y la seleccion de elemento de `JS`. 
Usa el caracter `$` para efectuar una serie de concatenaciones.

Cuando escribimos esto: `$(".button").html("nex-stept")`, simplemente lo que esta generando es una `chainable function`, que lo que esta devolviendo es un objeto propio de `jQuery`. Esto es bueno y a la vez muy malo. Si no tenemos en cuenta la definicion de nuevos objetos `jQuery` (ergo, instanciar nuevos `$(...)`). Nuestra aplicacion puede llegar a relentizarse serieamente.

Una `buena praxis` es solo definir una vez el elemento dentro de una `variable` y atacar a esa variable cuando nos querramos referir a ese elemento de nuestro `HTML`.

Ejemplo de buena Praxis:

````js
var $box1 = $('#box-1');

$box1.click(function (e) {
    console.log(this instanceof HTMLElement);
    console.log(this === document.querySelector('#box-1'));
    $box1.toggleClass('highlight');
});
````

Es necesario poner en la nueva variable decinida como el `objeto jQuery` del `DOM` con `$` para poder identificarla más tarde (como un recordatorio).

