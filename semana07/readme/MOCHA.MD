# [← |](https://github.com/VGamezz19/skylab-boot-notes/blob/master/semana07/)   Mocha

Mocha is a feature-rich JavaScript test framework running on Node.js

`npm i -g mocha`

-- mirar [documentacion](https://mochajs.org/) completa

Por convenio, mocha trabaja en la carpeta `./test` a nivel de `./src` y dentro definimos nuestros test.

Test de ejemplo:

```js
var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});
```

## HOOKS

`Mocha` nos proporcionan `Hooks` que se han de especificar antes de ejecutar nuestros test:

```js
describe('hooks', function() {

    before(function() {
        // runs before all tests in this block
    });

    after(function() {
        // runs after all tests in this block
    });

    beforeEach(function namedFun() {
    // beforeEach:namedFun
    });

    afterEach(function() {
        // runs after each test in this block
    });

    // test cases
});
```

Podemos añadirle una descripcion de esta forma:

```js
    beforeEach('some description', function() {
    // beforeEach:some description
    });
```