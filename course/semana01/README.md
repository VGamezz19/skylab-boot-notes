# Semana01
## Command

- **File**

    - Add file —> `touch nameFile.extension`
    - Add directory —> `mkdir nameDirectory`
    - Add directory -prograsive —> `mkdir -p nameDirectory/nameDirectory2/nameDirectory3`
    - Delete file —> `rm nameFile`
    - Delete directory Empty —> `rm -d delete empty directory`
    - Delete directory Reu —> `rm -r delete full directory`
    - Delete directory Recur. For —> `rm -rf nameDirectory`
    - Rename file —> `mv {old-file} {new-file}`
    - Add ECHO —> `echo “Hola mundo” > test.txt`
    - see content text —> `cat ${nombre de fichero}`
    - Mostrar rama directorios —> `tree  (brew install tree)`
    
- **Open/Code**
	- open in finder the file/directory 	—> `open . | open /${nombre-archivo} `
	- open in VSCode the file/directory	—> `code . | code/${nombre-archivo}`

- **Open/Code**
	- `ga —> git add `
	- `gc —> git commit -m`
	- `gst —> git status`
	- `ll —>  ls -la`
	- `take` —>  `mkdir $1 + cd $1`
	- `rmd` —> `rm -rf $1`
	- `server` —> 
	 
```
 if [ $1 ]
  then
    local port="$1"
  else
    local port="8000"
  fi
  open "http://localhost:$port" && python -m SimpleHTTPServer "$port"
```
	 
	
- **Commands Brew**
	- brew services list
	- brew services restart --all
	- brew services stop --all
	- brew services start --all
	- brew list
	- brew install {name}
	- brew upgrade {name}
	- brew uninstall {name}

`Podemos cambiar —all por el nombre del servicio `
	

- **Commands Git**
	- `git branch -a` —> muestra las ramas del git, y en cual estamos trabajando
	- `git checkout -b ${nombre-rama}` —> crea una nueva rama y te apunta a ella
	- `git diff  ${nombre-de-fichero}` —> Sobre un archivo modificado nos muestra lo que se ha modificado
	- `git merge ${rama-que-queremos-mergear}` —> lo ejecutamos sobre la rama donde queremos obtener los 	datos
	- `git push -u origin ${nombre-de-la-rama}` —> añadimos al remoto la branch creada

## MarkDown 

MarkDown es un lenguaje para escribir e explicar, funciona con unas marcas que finalmente se compilan a etiquetas HTML.
Necesitamos un **Interprete** para poder leer ficheros `.md`
para poder ver más [info.](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). Tambien [aqui veras unos cheatsheet](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf).

En VSCode tiene su propio interprete y podemos ver al momento como se ve nuestro MD mientras lo escribimos.

Tambien existen editores onlyne para poder escribir MD y a la vez te proporcionan codigo MD --> [StackEditor](https://stackedit.io/editor)

![Imagen](https://github.com/VGamezz19/skylab-curso/blob/dev/course/semana01/public/markDown.png)

## GIT

Nunca trabajaremos directamente sobre la rama `Master`, siempre tendremos que trabajar sobre una rama temporal paralela (dev/develop)
```
compi	         __.__.__.__
dev        _._._/_._.__.____\         _.__.__.__
master____/_________\._______\.______/__________  ...

```

Lo que se intenta representar en el dibujo, es que en la rama `master` solo ejecutaremos un `commit` cuando sepamos que la version que tenemos en `dev` es estable, hacemos un `merge`

````
para hacer un merge, apuntamos a la rama (en este caso master)
 y efectuamos el merge del codigo de una rama a otra, en este caso seria --> git merge dev (desde master)
```` 

la tercera "rama" que se ve `compi` representa la linea de tiempo del `local` de cada persona del `team develop`. Cada programador se hace su propia rama de la rama `dev` y cuando terminan su tarea, la `mergean` en dev.
````
Se ha de tener en cuenta, que si en la rama dev hay cambios, tendremos que hacer un request de esos datos con --> git pull origin dev (en este caso), fijar y arreglar si hay algun comflicto, y finalmente, pushear el merge.
````

**Fork** Es la forma de clonarte el repositorio de un `frameWork`, `libreria`, `modulo`, etc. Añadir alguna sugerencia/issue (problemas) y hacer un `pull request`

![Image](https://github.com/VGamezz19/skylab-curso/blob/dev/course/semana01/public/fork.jpg)

Voy a describir los pasos para hacer un `fork` y un `pull request` basandome en la imagen anterior:

-	Hacemos un nuevo Fork sobre el repositorio que queramos añadir cosas nuevas. Esto creara una copia exacta en tu git del servidor (en este caso gitHub)

-	Efectuamos un `git clone` para añadirlo a nuestro local

-	En nuestro local, trabajamos sobre la rama indicada (segun lo hablado con el que ha realizado ese proyecto, nunca en master)

-	Despues realizamos un push a nuestro servidor

-	Generamos un `pull request`, y la comunidad e ingenieros de esa plataforma, veran si la implementazion es valida.

-	Si confirman tu `pull request` lo `mergeeran` a `master`

-	Puede darse la casuística, de que el repositorio que te `"forkeaste"` quede obsoleto, ya que han implementado cosas nuevas en el repositorio de produccion. Entonces simplemente tendremos que hacer un `fetch` a nuestro repositorio `local` y finalmente `pushearlo` a gitHub.
