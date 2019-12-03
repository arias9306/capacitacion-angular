# Angular Material

[Angular Material](https://material.angular.io/)   es una librería de componentes web con un diseño Material Design, una guía de estilos creada por Google.

Para agregar Angular Material ejecutamos el siguiente comando
```
ng add @angular/material
```
Una vez ejecutamos ese comando en la consola, el CLI nos va a preguntar cosas como:

- Seleccionar el tema que queremos usar
  - **Indigo/Pink** ✅
  - Deep Purple/Amber
  - Pink/Blue Gray
  - Purple/Green
  - Custom
- Configurar HammerJS para reconocimiento de gestos, seleccionamos (**Yes**)
- Configurar animaciones, seleccionamos (**Yes**)

Más Información [aquí](https://material.angular.io/guide/getting-started)

# Angular Flex Layout

Angular Flex Layout proporciona una API de diseño que utiliza Flexbox CSS + mediaQuery.

Para agregar Angular Flex Layout al proyecto ejecutamos el siguiente comando.

```
npm install @angular/flex-layout --save
```
Una vez finalice la instalación debemos agregar el `FlexLayoutModule` a nuestro `app.module.ts` como se muestra a continuación.

``` typescript
import { FlexLayoutModule } from '@angular/flex-layout';
...

@NgModule({
    ...
    imports: [ FlexLayoutModule ],
    ...
});
```

# Código guía

  El código completo del proyecto vamos a crear a continuación se encuentra [aquí](https://github.com/arias9306/capacitacion-angular/tree/master/dia4/book-store)


# Paso a Paso
  ## Crear el proyecto

  Para crear el proyecto ejectuamos el comando `ng new book-store --prefix=bs`,  a las preguntas que nos hace el `angular-cli` de agregar el routing le decimos que `NO` y para los estilos usamos `CSS`.

  El argumento de `prefix` es para asignar el prefijo para todos los componentes de nuestro proyecto.

  ## Agregar Angular Material

  Para agregar angular material a nuestro proyecto ejectamos el comando `ng add @angular/material`

  ```
  D:\development\book-store>ng add @angular/material
  Installing packages for tooling via npm.
  Installed packages for tooling via npm.
  ? Choose a prebuilt theme name, or "custom" for a custom theme: Indigo/Pink        [ Preview: https://material.angular.i
  o?theme=indigo-pink ]
  ? Set up HammerJS for gesture recognition? Yes
  ? Set up browser animations for Angular Material? Yes

  ```
  ## Agregar Flex Layout

  Para agregar angular flex layout a nuestro proyecto ejecutamos el siguiente comando `npm install @angular/flex-layout --save` y agregamos el `FlexLayoutModule` al array de imports en el `app.module.ts`.

  ## Crear los componentes
  ## Importar los módulos de Angular Material
  ## Crear los modelos
  ## NavbarComponent
  ## AppComponent
  ## BooksComponent
  ## BookListComponent
  ## BookDetailComponent

________
## Continua Día 5
________