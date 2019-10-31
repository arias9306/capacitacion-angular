# Dia 1
## Typescript
* Lenguaje de programación libre y de código abierto.
* Desarrollado y mantenido por Microsoft.
* Es un superset de Javascript.
* Añade tipos estáticos y objetos basados en clases.
* Este código se transpila a Javascript.

## Tipos de datos
* boolean: true/false

``` typescript
let isAwesome: boolean = true;
```

* string: cadenas de texto, rodeadas por ', " o `

``` typescript
let name: string = 'Doe';
let firstName: string = "Jon";
let id: string = `JDoe`;
```

El usar `` (back ticks) se conoce como template literal y se puede realizar interpolaciones ahí
``` typescript
let age: number = 22;
let information: `Jon Doe, Age: ${age}`
```

* number: permite almacenar enteros o números flotantes, en notación decimal, binaria, ocatl o hexadecimal
``` typescript
let decimalNumber: number = 42;
let binaryNumber: number = 0b101010; // => 42
let octalNumber: number = 0o52; // => 42
let hexadecimalNumber: number = 0x2a; // => 42
```

* array
``` typescript
let heroes: string[] = [ 'Iron Man', 'Captain America', 'Thor', 'Black Widow' ];
let fibonacci: number[] = [ 1, 2, 3, 5, 8 ];
```

* tuple: Arreglo que contiene un número fijo de elementos de un tipo especificado
``` typescript
let myFavoriteTuple: [string, number, boolean];

myFavoriteTuple = ['chair', 20, true]; // ✅
myFavoriteTuple = [5, 20, true]; // ❌ el elemento 0 no es un string!
```

* enum:
Por defecto asocian números (desde el 0 incrementando de 1 en 1) a cada miembro del enum
``` typescript
enum Sizes {
    Small,
    Medium,
    Large,
}
Sizes.Small; // => 0
Sizes.Medium; // => 1
Sizes.Large; // => 2
```
También se pueden asignar otros valores (numericos o strings)
``` typescript
enum ThemeColors {
    Primary = 'primary',
    Secondary = 'secondary',
    Dark = 'dark',
    DarkSecondary = 'darkSecondary',
}
```

* any: Tipo de variable usado cuando no se conoce el tipo especifico
``` typescript
let foo: any = 4;

foo = 'a string';
foo = false;
```
Nota: Es recomendable no utilizar any mucho, pues si el compilador no sabe el tipo de datos se pierde una de las grandes ventajas de TS.

* void:
``` typescript
logger(msg: string): void {
  console.log(msg);
}
```

* null o undefined: son subtipos de los otros tipos, por lo que a los strings se les puede asignar un valor de null o undefined.
``` typescript
let hello: undefined = undefined; // realmente no es muy util usarlo de esta forma
let name: string = undefined;
let firstName: string = null;
```
