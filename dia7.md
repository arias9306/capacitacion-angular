# Día 7

## Template Driven Forms

Template Driven Forms son formulario basados en enteramente en el HTML esto quiere decir que todas las validaciones e interacciones del formulario se deben de configurar en el HTML del componente, ese tipo de formulario se usa típicamente para formularios pequeños.

### Configuración

Para poder usar Template Driven Forms debemos agregar el modulo de `FormsModule` en nuestro `app.module.ts` como se muestra en el siguiente código:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations: [AppComponent],
	bootstrap: [AppComponent]
})
export class AppModule {}
```

### Formulario básico

Para poder usar Template Driven Forms todos los inputs que tengamos deben de estar dentro de una etiqueta `form` de HTML como se ve en el siguiente código:

```html
<h1>Author Form</h1>
<form>
	<div class="form-group">
		<label for="name">Name</label>
		<input type="text" class="form-control" id="name" required />
	</div>

	<div class="form-group">
		<label for="alterEgo">Last Name</label>
		<input type="text" class="form-control" id="alterEgo" />
	</div>

	<button type="submit" class="btn btn-success">Submit</button>
</form>
```

Angular usa las mismas validaciones que HTML5 así que si marcamos un input como `required`, Angular va marcar se input como requerido y podemos informarle al usuario que se input es un campo obligatorio.

> Nota: para usar Templete Driven Forms es importante agregar el name del input.

Ahora vamos a agregar el atributo name a nuestros inputs y la directiva `ngModel`, La directiva `ngModel` es la que le dice a Angular que debe crear un `FormControl` basado en los atributos definidos en es input.

También vamos a crear una variable en nuestro HTML llamda `authorForm` como podemos ver en tag `form` y le vamos a asignar el valor de `ngForm` que es una variable creada por Angular en la cual vamos a poder ver si el form es valido, estados del formulario, valores en el formulario y demás información relacionada con el formulario que estamos creando.

```html
<h1>Author Form</h1>
<form #authorForm="ngForm">
	<div class="form-group">
		<label for="name">Name</label>
		<input type="text" class="form-control" id="name" name="name" ngModel required />
	</div>

	<div class="form-group">
		<label for="lastName">Last Name</label>
		<input type="text" class="form-control" id="lastName" name="lastName" ngModel />
	</div>

	<button type="submit" class="btn btn-success" (click)="onSubmit(authorForm)">Submit</button>
</form>
```

Usando el método `onSubmit` le voy a pasar la variable de `authorForm` para que vean la estructura que crea Angular basado en los inputs que acabamos de agregar.

```typescript
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	submit(form) {
		console.log(form);
	}
}
```

Si ejecutamos nuestro código y revisamos la consola esta es la salida.

<p align="center">
    <img src="https://raw.githubusercontent.com/arias9306/capacitacion-angular/master/img/driven-forms.jpg" alt="Driven Forms" />
</p>

Como podemos ver en la imagen en el objeto de `authorForm` tenemos toda la información del formulario, con eso podemos por ejemplo validar que solo se le pueda hacer submit al fomulario si todos los campos son validos para eso agregamos el atributo `disabled` usando property binding y verificando si el formulario es valido

```html
<h1>Author Form</h1>
<form #authorForm="ngForm">
	<div class="form-group">
		<label for="name">Name</label>
		<input type="text" class="form-control" id="name" name="name" ngModel required />
	</div>

	<div class="form-group">
		<label for="lastName">Last Name</label>
		<input type="text" class="form-control" id="lastName" name="lastName" ngModel />
	</div>

	<button type="submit" class="btn btn-success" (click)="onSubmit(authorForm)" [disabled]="!authorForm.form.valid">Submit</button>
</form>
```

### Mensaje de Error / Validaciones

Como vimos anteriormente usando la variable de `authorForm` podemos acceder a información del formulario, esto también lo podemos hacer con los input para hacer eso lo que tenemos que hacer es crear la variable y asignarle el valor de `ngModel` como se ve en el siguiente código.

```html
<input type="text" class="form-control" id="name" name="name" ngModel required #name="ngModel" />
```

Ya con esa variable podemos agregar al HTML los mensajes de error, para este caso que el input es requerido, podemos agregar el siguiente codigo

```html
<label for="name">Name</label>
<input type="text" class="form-control" id="name" name="name" ngModel required #name="ngModel" />
<div *ngIf="name.valid || name.pristine" class="alert alert-danger">
	Name is required
</div>
```

### Estilos

Al agregar la directiva `ngModel` al input Angular agrega varias clases CSS al input dependiendo del estado y de las validaciones del mismo.

| Estado                      | True          | False           |
| --------------------------- | ------------- | --------------- |
| El control fue visitado     | `.ng-touched` | `.ng-untouched` |
| El valor del control cambió | `.ng-dirty`   | `.ng-pristine`  |
| El control es valido        | `.ng-valid`   | `.ng-invalid`   |

Un ejemplo del usó de estas clases es colocar un borde rojo a los inputs que son invalidos y que el usuario ya ha ingresado un valor.

```css
input .ng-touched .ng-invalid {
	border: 1px solid red;
}
```

## Reactive Forms

---

## Continua [Día 8: Peticiones Http y Deploy)](https://github.com/arias9306/capacitacion-angular/blob/master/dia8.md)

---
