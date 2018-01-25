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

## FlexBox

Es muy importante saber que Flex trabaja con padres e hijos. Necesitamos un contenedor para posicionar el contenido.

Siempre, para trabajar con `Flex`, tendremos que definir al padre el contenedor con `display:flex`;


## Etiquetas para el Padre

`display:flex` Definir el contenedor que va a contener contenido `flex`

`flex-direction` La direccion que va a tomar el padre `flex`

![Image](https://github.com/VGamezz19/skylab-curso/blob/dev/course/semana02/public/flex-direction.png)


## `flex-wrap`

Le añadimos el trivuto `wrap` al contenedor padre, haciendo que si un contenido no cabe, lo podra directamente abajo.
    ![Image](https://github.com/VGamezz19/skylab-curso/blob/dev/course/semana02/public/flex-wrap.png)

## `flex-flow`
Podemos definir `flex-direction` y `flex-wrap` en la misma etiqueta
![Image](https://github.com/VGamezz19/skylab-curso/blob/dev/course/semana02/public/flex-flow.png)


## `justify-content`
Servir de forma general el contenido.
![Image](https://github.com/VGamezz19/skylab-curso/blob/dev/course/semana02/public/justify-content.png)
    

## `align-items`
![Image](https://github.com/VGamezz19/skylab-curso/blob/dev/course/semana02/public/align-items.png)
    

## `align-content`
![Image](https://github.com/VGamezz19/skylab-curso/blob/dev/course/semana02/public/align-content.png)

    
## Grid Css

