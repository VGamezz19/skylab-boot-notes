## [← |](https://github.com/VGamezz19/skylab-curso/blob/dev/course/semana02/)   CSS

CSS (`Cascade Style Sheet`) Como bien indica su nombre, la definicion de los estilos se hace en cascada. dependiendo del orden, altera el producto, y depende de lo tipada que este la busqueda, tambien. por ejemplo:

```css
ul>li .firstElement{
    background-color: blue;
}
ul>{
    background-color:red;
}
```
Todos los elemento del `ul` se veran de colo red, ya que lo hemos definido incorrectamente dentro de la "cascada" de CSS
la forma correcta seria:
```css
ul>{
    background-color:red;
}
ul>li .firstElement{
    background-color: blue;
}
```

Una pagina muy importante para aprender como acceder correctamente a segun que elementos de nuestro esqueleto `HTML`, es la pagina [CSS Diner](http://flukeout.github.io/), muy buena para practicar!

Tambien existen otras paginas para ptracticar tu [GridWeb](http://cssgridgarden.com/#es), [FlexBox](http://flexboxfroggy.com/#es) . Para ver más sobre el mundo de [FlexBox](https://flexbox.io/)

