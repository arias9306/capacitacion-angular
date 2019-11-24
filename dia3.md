# Día 3

- [Databinding](https://github.com/arias9306/capacitacion-angular/blob/master/dia3.md#Databinding)
  - [Interpolación](https://github.com/arias9306/capacitacion-angular/blob/master/dia3.md#Interpolación)
  - [Property Binding](https://github.com/arias9306/capacitacion-angular/blob/master/dia3.md#property-binding)
  - [Event Binding](https://github.com/arias9306/capacitacion-angular/blob/master/dia3.md#event-binding)
  - [Attribute Binding](https://github.com/arias9306/capacitacion-angular/blob/master/dia3.md#attribute-binding)
  - [Class Binding](https://github.com/arias9306/capacitacion-angular/blob/master/dia3.md#class-binding)
  - [Style Binding](https://github.com/arias9306/capacitacion-angular/blob/master/dia3.md#style-binding)
  - [Two-way Data Binding](https://github.com/arias9306/capacitacion-angular/blob/master/dia3.md#two-way-databinding)
- [Directivas](https://github.com/arias9306/capacitacion-angular/blob/master/dia3.md#directivas)
  - [ngIf](https://github.com/arias9306/capacitacion-angular/blob/master/dia3.md#ngif)
  - [ngFor](https://github.com/arias9306/capacitacion-angular/blob/master/dia3.md#ngfor)
  - [ngStyle](https://github.com/arias9306/capacitacion-angular/blob/master/dia3.md#ngstyle)
- [Debugging](https://github.com/arias9306/capacitacion-angular/blob/master/dia3.md#debugging)


## Databinding

Databinding es el proceso que nos permite comunicar muestros templates HTML con el archivo de Typescript para mostrar los valores y respoder a acciones del usuario como por ejemplo clicks.

<p align="center">
    <img src="https://raw.githubusercontent.com/arias9306/capacitacion-angular/master/img/databinding.jpg" alt="Databinding" />
</p>

### Interpolación

La interpolación se refiere a incrustar expresiones en texto. Por defecto, la interpolación utiliza como delimitador las llaves dobles, `{{expresión}}`.

Por ejemplo

```html
<h3>Autor: {{ authorName }}</h3>
```

El texto que se encuetra entre las llaves `{{...}}` corresponde a una variable en archivo `.ts`, pero no en todos los casos tienen que ser variables como ya lo mensioné antes lo que se encuentra dentro de las llaves corresponde a un expresión como por ejemplo.

```html
<h3>El resultado de la suma de 1 + 1 es : {{ 1 + 1 }}</h3>
```

```html
<h3>Autor : {{ 'Dante Alighieri' }}</h3>
```

También podemos invocar metodos que se encuentren en el archivo `.ts` como se ve en el siguiente ejemplo.

```html
<h3>El valor del contador es : {{ getCounterValue() }}</h3>
```

Como dato adicional si no nos gustan las llaves `{{...}}` se pueden cambiar en la configuración de los metadatos del compontente usando la propiedad `interpolation`

### Property Binding

El Property binding solo se comunica en una sola dirección, desde el componente al template HTML y se usa agregando corchetes cuadrados `[propiedad]` a la propiedad que queremos relacionar.

```html
<button [disabled]="isDisabled">Disabled Button</button>
```

en el caso de las propiedades HTML también podemos usar el prefijo `bind`.

```html
<button bind-disabled="isDisabled">Disabled Button</button>
```

### Event Binding

El Event binding nos permite escuchar ciertos eventos generados por el usuario en el template como por ejemplo clicks, movimientos con el mouse, pulsaciones en el teclado.

Para hacer uso del event binding lo que tenemos que hacer es rodear en paréntesis el evento que queremos escuchar seguido de la acción que vamos a realizar cuando ese evento ocurra.

```html
<button (click)="onSave()">Save</button>
```

En el caso del event binding también tenemos una alternativa usando un prefijo `on-event-name`.

```html
<button on-click="onSave()">Save</button>
```

De la siguiente manera podemos capturar la información emitida por evento.

```html
<input (input)="onUpdateName($event)" />
```

```typescript
onUpdateName(event: Event){
  console.log((<HTMLInputElement>event.target).value);
}
```

### Attribute Binding

El Attribute binding es similar al [Property Binding](https://github.com/arias9306/capacitacion-angular/blob/master/dia3.md#property-binding) solo que en este caso se usa para asignar el valor directamente a una atributo del elemento HTML.

```html
<img [attr.title]="title" src="..." />
```

### Class Binding

El Class binding se usa para agregar y eliminar clases CSS de un elemento. La sintaxis del class binding es `[class.nombre-de-la-clase]="exp"`

Ejemplos:

```css
.special {
  background-color: #1976d2;
  color: #ffffff;
}

.item {
  font-weight: bold;
}
.clearance {
  border: 2px solid #d41e2e;
}
.item-clearance {
  font-style: italic;
}

.new-class {
  background-color: #ed1b2f;
  font-style: italic;
  color: #fff;
}
```

Asignar una clase CSS a un elemento HTML.

```html
<div [class.special]="isSpecial">The class binding is special.</div>
```

Agregar o remover una clase de un elemento HTML.

```html
<div class="special" [class.special]="!isSpecial">This one is not so special.</div>
```

También podemos usar el prefijo `bind`

```html
<div bind-class.special="isSpecial">This class binding is special too.</div>
```

Agregar una clase nueva.

```html
<div class="item clearance special" [class.item-clearance]="itemClearance">Add another class</div>
```

Incluso también podemos reemplazar todas las clases que tenga asignado el elemento HTML con una nueva clase.

```html
<div class="item clearance special" [attr.class]="resetClasses">Reset all classes at once</div>
```

### Style Binding

El Style binding se usa para asignar estilos en línea, la sintaxis del style binding es usando el prefijo `style` seguido de un punto (.) y el nombre de la propiedad css `[style.style-property].`

```html
<button [style.color]="isSpecial ? 'red': 'green'">Red</button>
<button [style.background-color]="canSave ? 'cyan': 'grey'">Save</button>
```

Para el caso de algunas propiedades CSS que tiene unidades como `font-size` también podemos definirlas.

```html
<button [style.font-size.em]="isSpecial ? 3 : 1">Big</button>
<button [style.font-size.%]="!isSpecial ? 150 : 50">Small</button>
```

> El Style binding adecuada para configurar un estilo único, ya que para configurar varios estilos es mas recomendable usar la directiva NgStyle.

### Two-way Data Binding

El Two-way data binding lo que nos permite como vieron en la imagen inicial es crear una comunicación entre el template y el componente en typescript.

Entonces básicamente lo que hace el two-way data binding es asignar un valor especifico y escuchar si es modificado.

Su sintaxis es `[()]` mundialmente conocida como la banana en la caja.

> Para usar ngModel tenemos que importar el `FormsModule` en el app.module.ts

```html
<input [(ngModel)]="variable" />

{{variable}}
```

## Directivas

Una directiva es una clase con el decorador `@Directive()` que puede modificar la estructura del DOM o modificar atributos de un elemento.

Hay 3 tipos de directivas:

- **Componentes**: En realidad el decorador `@Component()` es hereda de `@Directive()` que tiene asociado un template HTML.
- **Directivas de Atributo**: Son las que modifican el comportamiento y la apariencia de los elementos.
- **Directivas Estructurales**: Son las que modifican la estructura del DOM.

Angular provee una serie de directivas, pero nosotros también podemos crear nuestras propias directivas.

### ngIf

La directiva `*ngIf` es una directiva del tipo estructural y se usa para agregar o remover elemento del DOM.

> El asterisco (\*) es muy importante para el funcionamiento de la directiva.

```html
<app-item-detail *ngIf="isActive" [item]="item"></app-item-detail>
```

#### ngIf Else

```html
<div *ngIf="condition; else elseBlock">Content to render when condition is true.</div>
<ng-template #elseBlock>Content to render when condition is false.</ng-template>
```

#### ngIf vs hidden

Ocultar un elemento con el atributo hidden es diferente de eliminarlo con NgIf ya que cuando se oculta un elemento, ese elemento permanecen en el DOM y ya que todos esos elementos permanecen en el DOM, Angular sigue pendiente de esos elementos en caso de que cambien y pues eso puede causar problemas de rendimiento.

### ngFor

La directiva `*ngFor` es un repetidor, una forma de presentar una lista de elementos.

Es una directiva de tipo estructural.

```html
<div *ngFor="let item of items">{{item.name}}</div>
```

### ngStyle

La directiva `ngStyle` es una directiva de tipo atributo y es usada para asignar estilos a los elementos HTML.

```html
<some-element [ngStyle]="{'font-style': styleExp}">...</some-element>
```

### ngClass

La directiva `ngClass` agrega o remueve clases a los elementos HTML.

Las clases CSS se actualizan de la siguiente manera, según el tipo de evaluación de expresión:

- **String**: se añaden las clases CSS enumeradas en el string.
- **Matriz**: se añaden las clases CSS declaradas como elementos de matriz.
- **Object**: un objeto en donde la key del objeto son las clases y la propiedad es un booleano definiendo si debe o no agregar la clase.

```html
<some-element [ngClass]="'first second'">...</some-element>

<some-element [ngClass]="['first', 'second']">...</some-element>

<some-element [ngClass]="{'first': true, 'second': true, 'third': false}">...</some-element>

<some-element [ngClass]="stringExp|arrayExp|objExp">...</some-element>

<some-element [ngClass]="{'class1 class2 class3' : true}">...</some-element>
```

## Debugging

Para hacer debug directamente en el VS Code tenemos que tener instalada la extensión `Debugger for Chrome` y seguir los pasos que se encuentran en las siguientes imagenes.


<p align="center">
    <img src="https://raw.githubusercontent.com/arias9306/capacitacion-angular/master/img/debug_1.jpg" alt="debug 1" />
</p>

<p align="center">
    <img src="https://raw.githubusercontent.com/arias9306/capacitacion-angular/master/img/debug_2.jpg" alt="debug 2" />
</p>

Al final presionar ``F5``
_________________
## Continua [Día 4: Proyecto de Práctica](https://github.com/arias9306/capacitacion-angular/blob/master/dia3.md)
______________