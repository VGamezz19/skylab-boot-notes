## [← |](https://github.com/VGamezz19/skylab-boot-notes/maser/semana01/)  TDD

Actualmente, es una de las cosas más importante de la programacion, definir test antes de programar.

Existen diversas herramientas que facilitan el test de las funcionalidades: Vanilla, Jasmine, Mocha ...
Pero todos siguen el mismo patron. 

Suscribire a un **escenario** donde definiremos **expectativas** de la funcionalidad.

podemos definir mas de una **expectativa** dentro de un `spect (escenario)`, dependiendo  del transcurso del codigo que se esta probando (los casos posibles de la funcionalidad)

- Jasmine

```javascript
describe("A suite is just a function", function() {
  var a;

  it("and so is a spec", function() {
    a = true;

    expect(a).toBe(true);
  });
});
```
En el caso de `Jasmine`, para definir un **escenario** se una la funcion global `it`, le añadimos una pequeña describcionm, y seguidamente un `midelWare` donde ejecutaremos **expectativas**.

- **toBe(`lo esperado`)** 

Lo que tendria que ser el valor testeado

- **not.toBe(`lo no esperado`)**

Lo que no tendria que ser el valor

- **toEqual(`igual`)**

tendria que ser igual

```javascript
it("should work for objects", function() {
      var foo = {
        a: 12,
        b: 34
      };
      var bar = {
        a: 12,
        b: 34
      };
      expect(foo).toEqual(bar);
    });
```

- **toBeDefine()**

Tendria que estar definido

- **not.toBeDefine()**

No ha de estar definido

- **not.toBeUndefined()**

No ha de estar Undefine

- **toBeDefine()**

Ha de estar Undefined

```javascript
it("The 'toBeDefined' matcher compares against `undefined`", function() {
    var a = {
      foo: "foo"
    };

    expect(a.foo).toBeDefined();
    expect(a.bar).not.toBeDefined();
    expect(a.foo).not.toBeUndefined();
    expect(a.bar).toBeUndefined();
  });
```

- **toBeNull()**

Tendria que ser null 

- **not.toBeDefine()**

No tendria que ser null 

- **toBeTruthy()** 

Tendria que ser `True`

- **toBeFalsy()**

Tendria que ser `False`

- **toContain(`lo que ha de contener`)**

- **not.toContain(`lo que no tendria que contener`)**

```javascript

it("works for finding an item in an Array", function() {
      var a = ["foo", "bar", "baz"];

      expect(a).toContain("bar");
      expect(a).not.toContain("quux");

      var a = "foo bar baz";

      expect(a).toContain("bar");
      expect(a).not.toContain("quux");
    });
```