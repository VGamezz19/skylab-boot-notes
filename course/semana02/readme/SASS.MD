## [← |](https://github.com/VGamezz19/skylab-curso/blob/dev/course/semana02/)   SASS

Extension CSS para poder generar tus estilos pero a la vez aplicarle logica de programador.

## Instalacion MAC

`sudo gem install sass`

Esto instalara `sass` en nuestro ordenador de form global.

Para poder usar el formato sass, simplemente creamos un fichero con la extension `scss`, y le hacemos un `watch` con el comando `sass --watch $nameInputFileSass.scss:nameOutFileCSS.css`

nos creara un `listener` y siempre que guardemos el fichero `sass`, lo compilara al fichero Out.css que se ha especificado en el comando.

Sass genera una carmeta `.sass-cache` donde almacenara los diferentes cambios que ha obtenido nuestro fichero sass.
Tambien genera un `css.map` donde amlacena la informacion de los `sass` que se estan compilando.

### Ejemplo:
Tenemos dos ficheros scss `import.scss` y `main.scss`. Indicamos en la compilacion de `sass` que el fichero que queremos pasar de scss a css es el `main.scss`. Dentro del codigo del `main.scss` encontramos la importacion del `import.scss`. Le especificamos que el FileOut sera `main.css`.
Se generara un `main.css.map` con esta informacion:
````json
{
"version": 3,
"mappings": "AAIA,IAAK;EACD,gBAAgB,EAAE,OAAO;EACzB,KAAK,EALK,KAAK;;AAQnB,IAAK;EACD,KAAK,EAAE,KAAK;;AAKR,SAAG;EACC,KAAK,EAAE,IAAI;AAQC,sCAAM;EACF,gBAAgB,EAAE,GAAG;;ACxB7C,mBAAe;EAEX,KAAK,EAAE,KAAK;;ADuCpB,GAAG;EAHC,aAAa,EAIU,IAAI;;AAK/B,sBAAO;EACH,SAAS,EAAE,GAAG;EACd,YAAY,EAAE,IAAI;EAClB,gBAAgB,EAAE,SAAS;;AAG/B,KAAM;EAEF,KAAK,EAAE,IAAI;;AAEf,MAAO;EAEH,KAAK,EAAE,KAAK;;AAEhB,OAAQ;EAEJ,KAAK,EAAE,MAAM;;AAKjB,QAAS;EACL,KAAK,EAAE,cAAe",

"sources": ["main.scss","import.scss"],
"names": [],
"file": "main.css"
}
````

Como podemos ver, en el fichero de configuracion, aparecen los dos archivos de `scss` y esto permitira que en el navegador tambien se muestren los ficheros de `sass` aunque no los estemos enlazando de ninguna manera, gracias al comentario final del fichero `Out`:

`/*# sourceMappingURL=main.css.map */`


## Conceptos basicos

### Variables

````scss
// variables
$defauls-size:100px;
body {
    background-color: skyblue;
    width: $defauls-size;
}

````

### Estructura

````scss
nav {
    ul {
        li {
            color: blue;
        }
    }
    b {
        section {
            article {
                .class {
                    div {
                        #elId {
                            background-color: red;
                        }
                    }
                }
            }
        }
    }
}
````

and compile this in css 

````css

nav b section article .class div #elId {
  background-color: red; }

````

### @import

importar estilos de un ficheros `.scss`. Permitira usar los estilos, variables, mixings, etc del ficheros importado.

````scss
@import 'import';
````

### Mixin

La forma de escribir `funciones` en `sass`.

```` scss
@mixin border-radius($radius, $color) {
    border-radius: $radius;
    border-color: $color;
}

div {
    @include border-radius(10px, black)
}

````

### Share

Puedes compartir el mismo cache de codigo para diferentes atributos. usando `%`

```` scss
%share {
    font-size: 3em;
    font-kerning: auto;
    background-color: aliceblue;
}

.blue {
    @extend %share;
    color: blue;
}

.green {
    @extend %share;
    color: green;
}

.yellow {
    @extend %share;
    color: yellow;
}

````

### Operations

````scss
div {
    width: 500 /600 * 100%; //return 83.3333333333%
}
````

