# Día 3

- [Databinding](https://github.com/arias9306/capacitacion-angular/blob/master/dia3.md#Databinding)
  - [Interpolación](https://github.com/arias9306/capacitacion-angular/blob/master/dia3.md#Interpolación)
  - [Property Binding](https://github.com/arias9306/capacitacion-angular/blob/master/dia3.md#property-binding)
  - [Event Binding](https://github.com/arias9306/capacitacion-angular/blob/master/dia3.md#event-binding)
  - [Attribute Binding](https://github.com/arias9306/capacitacion-angular/blob/master/dia3.md#attribute-binding)
  - [Class Binding](https://github.com/arias9306/capacitacion-angular/blob/master/dia3.md#class-binding)
  - [Style Binding](https://github.com/arias9306/capacitacion-angular/blob/master/dia3.md#style-binding)
  - [Two-way Data Binding](https://github.com/arias9306/capacitacion-angular/blob/master/dia3.md#two-way-databinding)
- [Debugging](https://github.com/arias9306/capacitacion-angular/blob/master/dia3.md#debugging)
- [Componentes & Databinding](https://github.com/arias9306/capacitacion-angular/blob/master/dia3.md#componentes-&-databinding)
- [Directivas](https://github.com/arias9306/capacitacion-angular/blob/master/dia3.md#directivas)
  - [ngIf](https://github.com/arias9306/capacitacion-angular/blob/master/dia3.md#ngif)
  - [ngFor](https://github.com/arias9306/capacitacion-angular/blob/master/dia3.md#ngfor)
  - [ngStyle](https://github.com/arias9306/capacitacion-angular/blob/master/dia3.md#ngstyle)
- [Crear Directivas](https://github.com/arias9306/capacitacion-angular/blob/master/dia3.md#crear-directivas)

## Databinding

Databinding es el proceso que nos permite comunicar muestros templates HTML con el archivo de Typescript para mostrar los valores y respoder a acciones del usuario como por ejemplo clicks.

<p align="center">
    <img src="https://raw.githubusercontent.com/arias9306/capacitacion-angular/master/img/databinding.jpg" alt="Databinding" />
</p>

### Interpolación

La interpolación se refiere a incrustar expresiones en texto. Por defecto, la interpolación utiliza como delimitador las llaves dobles, `{{expresión}}`.

Por ejemplo

``` html
<h3> Autor: {{ authorName }} </h3>
```
El texto que se encuetra entre las llaves `{{...}}` corresponde a una variable en archivo `.ts`, pero no en todos los casos tienen que ser variables como ya lo mensioné antes lo que se encuentra dentro de las llaves corresponde a un expresión como por ejemplo.

``` html
<h3> El resultado de la suma de 1 + 1 es : {{ 1 + 1 }} </h3>
```

``` html
<h3> Autor : {{ 'Dante Alighieri' }} </h3>
```
También podemos invocar metodos que se encuentren en el archivo `.ts` como se ve en el siguiente ejemplo.

``` html
<h3> El valor del contador es : {{ getCounterValue() }} </h3>
```
Como dato adicional si nos gustan las llaves `{{...}}` se pueden cambiar en la configuración de los metadatos del compontente usando la propiedad `interpolation`

### Property Binding

### Event Binding

### Attribute Binding

### Class Binding

### Style Binding

### Two-way Data Binding

## Debugging

## Componentes & Databinding

## Directivas

### ngIf

### ngFor

### ngStyle

## Crear Directivas
