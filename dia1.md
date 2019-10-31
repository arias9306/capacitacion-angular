# Dia 1
## Typescript
* Lenguaje de programación libre y de código abierto.
* Desarrollado y mantenido por Microsoft.
* Es un superset de Javascript.
* Añade tipos estáticos y objetos basados en clases.
* Este código se transpila a Javascript.

## Javascript Moderno
Como Typescript es un super set de Javascript es importante conocer las nuevas funcionalidades y sintaxis del mismo.

### Funciones flecha
Permite declarar funciones de forma corta y resolver el problema de scoping del this que se presentaba previamente en Javascript.
Antes:
``` javascript
function Persona() {
  var self = this;
  self.edad = 0;

  setInterval(function crecer() {
    self.edad++;
  }, 1000);
}
```

Ahora:
``` javascript
function Persona(){
  this.edad = 0;

  setInterval(() => {
    this.edad++;
  }, 1000);
}
```

### Clases
Soportan herencia, super calls, instanciar objetos, métodos estáticos y constructores
``` javascript
class Apple extends Fruit {

    isBitten: boolean;
    
    constructor(color) {
        super(color);
        this.taste = 'sweet';
        this.hasSeeds = true;
        this.isBitten = false;
    }
    
    eat() {
        this.isBitten = true;
        super.eat();
    }
    
    
}
```

### Let & Const
Anteriormente en Javascript se declaraban las variables usando la keyword var.
Let es el nuevo var mejorando problemas de scoping mientras const permite solamente asignar la "constante" una vez.
``` typescript
let name = 'Jon';
name = 'Jon Doe'; // ✅

const age = 10;
age = 11; // ❌ age es una constante y ya fue declarada
```

### Destructuración
Hace posible la extracción de datos de arreglos u objetos a variables de forma sencilla
``` typescript
var foo = ["one", "two", "three"];

// sin destructuración
let one  = foo[0];
let two  = foo[1];
let three = foo[2]; // asignación en tres lineas

// con destructuración
let [one, two, three] = foo; // asignación en una sola linea
```

### Parametro con valor por defecto
Permite definir funciones con un(os) parametro(s) con valores por defecto
``` typescript
fight(hero, villian, location = 'Earth') {
    console.log(`Fighting: ${hero} vs ${villian} on ${location}`);
}

fight('Iron Man', 'Thanos', 'Titan'); 
fight('Captain America', 'Thanos');
```

### Parametros Rest
Permite representar un número indefinido de elementos
``` typescript
eat(protein, juice, ...sweets) {
    console.log(`Eating: ${protein} with ${fruit} and ${sweets});
}

eat('chicken', 'mango);
eat('meat', 'lemonade', 'chocolate', 'm&m');
```

### Operador de propagación (spread)
Permite a un elemento iterable o un objeto ser expandido donde cero o mas argumentos o elementos son esperados
``` typescript
sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers)); // 6
```

Tiene muchos usos, por ejemplo para copiar un arreglo:
``` typescript
const fruits = ['apple', 'pear', 'peach'];
const food = [...fruits, 'eggs', 'milk' ];
```

O incluso objetos:
``` typescript
const obj1 = {
    foo: 'bar',
    x: 42
};

const obj2 = {
    ...obj1,
    y: 35,
    z: 10
};
```

### For of
``` typescript
const heroes = [ 'Iron Man', 'Captain America', 'Thor', 'Black Widow' ];
for (let hero of heroes) {
    console.log(hero);
}
```

## Tipos de datos
### boolean: true/false

``` typescript
let isAwesome: boolean = true;
```

### string: cadenas de texto, rodeadas por ', " o `

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

### number: permite almacenar enteros o números flotantes, en notación decimal, binaria, ocatl o hexadecimal
``` typescript
let decimalNumber: number = 42;
let binaryNumber: number = 0b101010; // => 42
let octalNumber: number = 0o52; // => 42
let hexadecimalNumber: number = 0x2a; // => 42
```

### array
``` typescript
let heroes: string[] = [ 'Iron Man', 'Captain America', 'Thor', 'Black Widow' ];
let fibonacci: number[] = [ 1, 2, 3, 5, 8 ];
```

### tuple: Arreglo que contiene un número fijo de elementos de un tipo especificado
``` typescript
let myFavoriteTuple: [string, number, boolean];

myFavoriteTuple = ['chair', 20, true]; // ✅
myFavoriteTuple = [5, 20, true]; // ❌ el elemento de la posición 0 no es un string!
```

### enum:
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

### any: Tipo de variable usado cuando no se conoce el tipo especifico
``` typescript
let foo: any = 4;

foo = 'a string';
foo = false;
```
Nota: Es recomendable no utilizar any mucho, pues si el compilador no sabe el tipo de datos se pierde una de las grandes ventajas de TS.

### void:
``` typescript
logger(msg: string): void {
  console.log(msg);
}
```

### null o undefined: son subtipos de los otros tipos, por lo que a los strings se les puede asignar un valor de null o undefined.
``` typescript
let hello: undefined = undefined; // realmente no es muy util usarlo de esta forma
let name: string = undefined;
let firstName: string = null;
```
