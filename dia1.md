# Día 1

## Introducción

* Javascript Moderno

  * [Funciones Flecha](https://github.com/arias9306/capacitacion-angular/blob/master/dia1.md#funciones-flecha)
  * [Let & Const](https://github.com/arias9306/capacitacion-angular/blob/master/dia1.md#let--const)
  * [Destructuración](https://github.com/arias9306/capacitacion-angular/blob/master/dia1.md#destructuraci%C3%B3n)
  * [Parametro con valor por defecto](https://github.com/arias9306/capacitacion-angular/blob/master/dia1.md#parametro-con-valor-por-defecto)
  * [Parametros Rest](https://github.com/arias9306/capacitacion-angular/blob/master/dia1.md#parametros-rest)
  * [Operador de propagación (Spread)](https://github.com/arias9306/capacitacion-angular/blob/master/dia1.md#operador-de-propagaci%C3%B3n-spread)
  * [For..of](https://github.com/arias9306/capacitacion-angular/blob/master/dia1.md#for-of)
  * Más información [aquí](https://github.com/lukehoban/es6features#readme)

* [Typescript](https://github.com/arias9306/capacitacion-angular/blob/master/dia1.md#typescript)

  * [Tipos de Datos](https://github.com/arias9306/capacitacion-angular/blob/master/dia1.md#tipos-de-datos)
    * [Boolean](https://github.com/arias9306/capacitacion-angular/blob/master/dia1.md#boolean)
    * [String](https://github.com/arias9306/capacitacion-angular/blob/master/dia1.md#string)
    * [Number](https://github.com/arias9306/capacitacion-angular/blob/master/dia1.md#number)
    * [Array](https://github.com/arias9306/capacitacion-angular/blob/master/dia1.md#array)
    * [Tuple](https://github.com/arias9306/capacitacion-angular/blob/master/dia1.md#tuple)
    * [Enum](https://github.com/arias9306/capacitacion-angular/blob/master/dia1.md#enum)
    * [Any](https://github.com/arias9306/capacitacion-angular/blob/master/dia1.md#any)
    * [Void](https://github.com/arias9306/capacitacion-angular/blob/master/dia1.md#void)
    * [Null o Undefined](https://github.com/arias9306/capacitacion-angular/blob/master/dia1.md#null-o-undefined)
    * Mas información [aquí](https://www.typescriptlang.org/docs/handbook/basic-types.html)
  * [Clases](https://github.com/arias9306/capacitacion-angular/blob/master/dia1.md#clases)
  * [Interfaces](https://github.com/arias9306/capacitacion-angular/blob/master/dia1.md#interfaces)
  * [Union Type](https://github.com/arias9306/capacitacion-angular/blob/master/dia1.md#union-type)
  * [Intersection Type](https://github.com/arias9306/capacitacion-angular/blob/master/dia1.md#intersection-type)
  * [Optional](https://github.com/arias9306/capacitacion-angular/blob/master/dia1.md#optional)


## Javascript Moderno

Ya que Angular es un framework javascript es importante conocer las nuevas funcionalidades y sintaxis del mismo.

Entre las nuevas características están:

### Funciones flecha
Permite declarar funciones de forma corta y resolver el problema de scoping del this que se presentaba previamente en Javascript.

Antes:
``` javascript
function Persona() {
  var self = this;
  self.edad = 0;

  setInterval(function growUp() {
    self.edad++;
  }, 1000);
}
```

Ahora:
``` javascript
class Persona {
  edad = 0;
  
  constructor() {
    setInterval(() => {
      this.edad++;
    }, 1000);
  }
}
```

### Let & Const
Anteriormente en Javascript se declaraban las variables usando la keyword `var`.
`let` es el nuevo `var` mejorando problemas de scoping mientras `const` permite solamente asignar la "constante" una vez.
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
fight(hero: string, villian: string, location = 'Earth') {
    console.log(`Fighting: ${hero} vs ${villian} on ${location}`);
}

fight('Iron Man', 'Thanos', 'Titan');
// Output: Fighting: Iron Man vs Thanos on Titan
fight('Captain America', 'Thanos');
// Output: Fighting: Captain America vs Thanos on Earth
```

### Parametros Rest
Permite representar un número indefinido de elementos
``` typescript
eat(protein: string, fruit: string, ...sweets: string[]) {
    console.log(`Eating: ${protein} with ${fruit} and ${sweets}`);
}

eat('chicken', 'mango');
// Output: Eating: chicken with mango and 
eat('meat', 'lemonade', 'chocolate', 'm&m');
// Output: Eating: meat with lemonade and chocolate,m&m
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
//food: ["apple", "pear", "peach", "eggs", "milk"]
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

// obj2: {foo: "bar", x: 42, y: 35, z: 10}
```

### For of
``` typescript
const heroes = [ 'Iron Man', 'Captain America', 'Thor', 'Black Widow' ];
for (let hero of heroes) {
    console.log(hero);
}
// Output:  Iron Man
//          Captain America
//          Thor
//          Black Widow
```


# Typescript

* Lenguaje de programación libre y de código abierto.
* Desarrollado y mantenido por Microsoft.
* Es un superset de Javascript.
* Añade tipos estáticos y objetos basados en clases.
* Este código se transpila a Javascript.


## Tipos de datos

### Boolean:

``` typescript
let isAwesome: boolean = true;
```

### String:
Cadenas de texto, rodeadas por (`'`), (`"`) o (`)

``` typescript
let name: string = 'Doe';
let firstName: string = "Jon";
let id: string = `JDoe`;
```

El usar `` (back ticks) se conoce como template literal y se puede realizar interpolaciones ahí
``` typescript
let age: number = 22;
let information: `Jon Doe, Age: ${age}`
// information: Jon Doe, Age: 22
```

### Number:
Permite almacenar enteros o números flotantes, en notación decimal, binaria, ocatl o hexadecimal
``` typescript
let decimalNumber: number = 42;
let binaryNumber: number = 0b101010; // => 42
let octalNumber: number = 0o52; // => 42
let hexadecimalNumber: number = 0x2a; // => 42
```

### Array
``` typescript
let heroes: string[] = [ 'Iron Man', 'Captain America', 'Thor', 'Black Widow' ];
let fibonacci: number[] = [ 1, 2, 3, 5, 8 ];
```

### Tuple:
Arreglo que contiene un número fijo de elementos de un tipo especificado
``` typescript
let myFavoriteTuple: [string, number, boolean];

myFavoriteTuple = ['chair', 20, true]; // ✅
myFavoriteTuple = [5, 20, true]; // ❌ el elemento de la posición 0 no es un string!
```

### Enum:
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

### Any:
Tipo de variable usado cuando no se conoce el tipo especifico
``` typescript
let foo: any = 4;

foo = 'a string';
foo = false;
```
Nota: Es recomendable no utilizar any mucho, pues si el compilador no sabe el tipo de datos se pierde una de las grandes ventajas de TS.

### Void:
`void` es un poco como lo opuesto a `any`. Por lo general, puede ver esto como el tipo de retorno de funciones que no devuelven un valor
``` typescript
logger(msg: string): void {
  console.log(msg);
}
```

### Null o Undefined:
Son subtipos de los otros tipos, por lo que a las variables de tipo `string`, `number` o `boolean` se les puede asignar un valor de `null` o `undefined`.
``` typescript
let hello: undefined = undefined; // realmente no es muy util usarlo de esta forma
let name: string = undefined;
let firstName: string = null;
```

### Clases
Las clases soportan herencia, super calls, instanciar objetos, métodos estáticos y constructores
``` typescript
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

### Interfaces
``` typescript
interface Animal {
    kind: string;
    weight: number;
}

let dog: Animal;

dog = {
    kind: 'mammal',
    weight: 10,
}; // ✅

dog = {
    kind: true,
    weight: 10,
}; // ❌ - kind should be a string
```

### Union Type
Hay ocasiones en las que una variable puede tener multiplos tipos, para esto se usa el union type.

``` typescript
log(message: string | number): void {
 console.log(msg);
}
```

### Intersection Type
Combina multiples tipos juntos.

``` typescript
type Student = {
    id: string;
    age: number;
};

type Employee = {
    companyId: string;
};

let person: Student & Employee;

person.age = 21; // ✅
person.companyId = 'SP302334'; // ✅
person.id = '10033402'; // ✅
person.name = 'Henry'; // ❌
```

### Optional
``` typescript
class Hero = {
    id: string;
    name: string;
    team?: string;
    powers: string[];
    
    constructor(name: string, team?: string,  powers?: string[]) {
      this.id = name + team;
      this.name = name;
      this.team = team;
      this.powers = powers;
   }
};

const spiderMan = new Hero('Spider Man', 'Avengers', [ 'spider sense', 'super strenght' ]);
const ironMan = new Hero('Iron Man', 'Avengers');
const scarletWitch = new Hero('Scarlet Witch');
```
