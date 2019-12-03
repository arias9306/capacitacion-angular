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
  ? Choose a prebuilt theme name, or "custom" for a custom theme: Indigo/Pink
  ? Set up HammerJS for gesture recognition? Yes
  ? Set up browser animations for Angular Material? Yes
  ```
  ## Agregar Flex Layout

  Para agregar angular flex layout a nuestro proyecto ejecutamos el siguiente comando `npm install @angular/flex-layout --save` y agregamos el `FlexLayoutModule` al array de imports en el `app.module.ts`.

  ## Crear los componentes

  Creamos los componentes que vamos a usar en el proyecto

  Componente | Comando
  ------------ | -------------
  NavbarComponent | `ng g c navbar`
  BooksComponent | `ng g c books`
  BookListComponent | `ng g c books/book-list`
  BookDetailComponent | `ng g c books/book-detail`

  ## Importar los módulos de Angular Material

  En nuestro `app.module.ts` agregamos los modulos de los componetes de Angular Material que vamos a usar en el proyecto.

  ``` typescript
  ...
  import { MatToolbarModule } from '@angular/material/toolbar';
  import { MatIconModule } from '@angular/material/icon';
  import { MatCardModule } from '@angular/material/card';
  import { MatListModule } from '@angular/material/list';
  import { MatBadgeModule } from '@angular/material/badge';
  import { MatButtonModule } from '@angular/material/button';

  @NgModule({
    declarations: [
      ...
    ],
    imports: [
      ...
      MatToolbarModule,
      MatIconModule,
      MatCardModule,
      MatListModule,
      MatBadgeModule,
      MatButtonModule
    ],
    ...
  })
  export class AppModule {}
  ```
  ## Crear los modelos

  Ahora vamos a agregar los modelos que vamos a usar en nuestro proyecto en este caso son dos, `Book` y `Author`, entonces en la carpeta de ``app`` creamos otra carpeta llamada ``model`` y agregamos dos clases.

  La clase ``Book`` contiene las siguientes propiedades.
  ``` typescript
  export class Book {
    name: string;
    date: Date;
    sinopsis: string;
    quantity: number;
    img: string;
  }
  ```
  La clase `Àuthor` contiene las siguiente propiedades.

  ``` typescript
  import { Book } from './book.model';

  export class Author {
    name: string;
    books: Book[];
  }
  ```
  ## NavbarComponent
  ## AppComponent
  ## BooksComponent
  ## BookListComponent
  ## BookDetailComponent

________
## Continua Día 5
________