## [← |](https://github.com/VGamezz19/skylab-boot-notes/blob/dev/course/semana04/)   React - Babel

React trabaja con el concepto VirtualDOM, genera una foto de como esta actualmente el `DOM` y si el estado del componente se modifica, revisa si hace falta "actualizar la foto" (`render()`).
React se encarga de actualizar nuestro DOM a tiempo Real.

![squeme-virtualDome](imgrute)

Como podemos ver en la foto, nosotros simplemente trabajaremos con el componente y sus estados. Pero react lo convertira en un `DOM Virtual`. La ventaja de esto, como se ve en la foto, es que puede trabajar en cualquier tipo de browser y es facilmente `testeable`.



### One-way data flow

Los componentes de React se estructuran siguiendo una gerarquia de padres ha hijos.


[imagen](imagen)

Es muy importante entender que los `datos` van de **padre a hijos** y los `eventos` capturados por los hijos, van de **hijos a padre**

Por eso se denomina `One-way data flow`, han de seguir un unico camino recursivo, iterando los datos transmitidos, con los eventos capturados.

### JSX
Forma de escribir el `html` dentro de tus fichero `JS`. La **X** viene de `XML`, asique es muy importante cerrar los `tags` (`<tag/>`) o nos tirara un `error`.

### Babel

### Caracteristicas de React

Class --> ClassNmae (a la hora de añadir una class en el HTML)