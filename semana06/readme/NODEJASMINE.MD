# [← |](https://github.com/VGamezz19/skylab-boot-notes/blob/master/semana06/)   Node-Jasmine

Para ver informacion detallada de como implementar TDD a node con [Jasmin](https://jasmine.github.io/setup/nodejs.html)

Primero, nos instalamos globalmente `jasmine` con el comando:

- `npm jasmin i -g`

Una vez instalado glovalmente, podemos ir a nuestro proyecto y efectuar el commando:

- `jasmine examples`

Esto generara un ejemplo a seguir (una estructura de carpetas, con un mini ejemplo)

a continuacion, en la carpeta `spec/config o support` añadimos el fichero de configuracion de Jasmine --> `jasmine.json`

```json
{
  // Spec directory path. Your spec_files must be relative to this path
  "spec_dir": "spec",
  // Array of filepaths (and globs) relative to spec_dir to include
  "spec_files": [
    "**/*.[sS]pec.js"
  ],
  // Array of filepaths (and globs) relative spec_dir to include before jasmine specs
  "helpers": [
    "helpers/**/*.js"
  ],
  // Stop execution of a spec after the first expectation failure in it
  "stopSpecOnExpectationFailure": false,
  // Run specs in semi-random order
  "random": false
}
```

En este archivo de configuracion, especificamos la ubicacion de nuestro test, y que es lo que vamos a ejecutar.

Para ejecutarlo añadimos en nuestros `scripts` del package.json `"test": "jasmine --config=./spec/config/jasmine.json"` especificando al commando `jasmine` la configuracion añadida

⚠️ Para efectuar `specs` en Jasmine-Node, se realiza de la misma forma que en Jasmin Web.