## [← |](https://github.com/VGamezz19/skylab-curso/blob/dev/course/semana01/)   Command

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