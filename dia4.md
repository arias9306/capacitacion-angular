# Angular Material

[Angular Material](https://material.angular.io/)   es una librería de componentes web con un diseño Material Design, una guía de estilos creada por Google.

Para agregar Angular Material ejecutamos el siguiente comando
```
ng add @angular/material
```
Una vez ejecutamos ese comando en la consola, el CLI nos va a preguntar cosas como:

- Seleccionar el tema que queremos usar
  - Indigo/Pink
  - **Deep Purple/Amber** ✅
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
  ? Choose a prebuilt theme name, or "custom" for a custom theme: Deep Purple/Amber
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
  La clase `Author` contiene las siguiente propiedades.

  ``` typescript
  import { Book } from './book.model';

  export class Author {
    name: string;
    books: Book[];
  }
  ```
  ## NavbarComponent

  En el HTML de nuestro `NavbarComponent` agregamos un `mat-toolbar` de la siguiente manera.

  ``` html
  <mat-toolbar color="primary">
    <mat-icon>book</mat-icon> My Book Store
  </mat-toolbar>
  ```

  usando la directiva `color` le asignamos el color principal del tema selccionado, en este caso morado.

  Dentro de nuestro `mat-toolbar` agregamos un `mat-icon` para mostrar un icono antes del texto *My Book Store*

  El listado completo de iconos lo podemos encontrar [aquí](https://material.io/resources/icons/)

  ## BookListComponent

  En este componente vamos a usar el `mat-nav-list` para mostar el listado de autores y sus respectivos libros.

  Entonces en el `book-list.component.html` vamos a agregar el siguiente código.

  ``` html
  <mat-nav-list>
    <h3 mat-subheader>{{author.name}}</h3>
    <mat-list-item
      *ngFor="let book of author.books"
      (click)="onBookSelected(book)"
      [title]="book.sinopsis.substring(0, 50) + '...'">
      <mat-icon mat-list-icon>library_books</mat-icon>
      <h4 mat-line>{{book.name}}</h4>
      <p mat-line> {{book.date | date}} </p>
    </mat-list-item>
    <mat-divider></mat-divider>
  </mat-nav-list>
  ```

  Lo que hacemos acá es que con la directiva `*ngFor` vamos a iterar el listado de libros de cada autor.

  Tambien agregamos un evento `click` para que cuando seleccionemos un libro podemos mostrar la infomación del libro en el componente de detalles (`BookDetailComponent`).

  Ahora en el `book-list.component.ts` vamos a agregar el siguiente codigo.

  ``` typescript
  imports ...

  @Component({
    selector: 'bs-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
  })
  export class BookListComponent implements OnInit {

    @Output() bookSelected = new EventEmitter<Book>();
    @Input() author: Author;

    selectedBook:Book;

    constructor() { }

    ngOnInit() {
    }

    onBookSelected(book: Book) {
      /* console.log(book); */
      this.selectedBook = book;
      this.bookSelected.emit(book);
    }

  }
  ```

  Los Decoradores ``@Input()`` y ``@Output()`` permiten a Angular compartir datos entre componentes.

  El decorador ``@Input()`` es para el componente reciba información desde un componente padre, en este caso el componente `BookListComponent` recibe un objeto `Autor`.

  El decorador `@Output()` es para que el componente hijo le envié información a un componente padre, en el caso del componente `BookListComponent` se usa para notificarle al compoente padre cual fue el libro seleccionado para eso se el `EventEmitter`, el cual es ejecutado por evento click en el HTML y luego enviado al componente con la siguiente sentencia `this.bookSelected.emit(book)`.

  ## BookDetailComponent

  En el HTML de `BookDetailCompontent` vamos a agregar una `mat-card` en la cual vamos a mostrar los detalles del libro seleccionado en el componente de `BookListComponent`.

 ``` html
  <mat-card-header>
    <img mat-card-avatar [src]="book.img">
    <mat-card-title>
      <span [matBadge]="book.quantity"
      matBadgeOverlap="false"
      [matBadgeColor]="book.quantity < 3 ? 'warn' : 'primary' " >{{book.name}}</span>
    </mat-card-title>
    <mat-card-subtitle>{{book.date | date}}</mat-card-subtitle>
  </mat-card-header>
  <mat-card-content>
    <p><b>Sinopsis</b>: {{book.sinopsis}}</p>
  </mat-card-content>
  <mat-card-actions align="end">
    <button mat-raised-button color="accent">Comprar</button>
  </mat-card-actions>
 ```

 Y en el `book-detail.component.ts` agregamos el siguiente código.

 ``` typescript
@Component({
  selector: 'bs-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  @Input() book: Book;
  constructor() { }

  ngOnInit() {
  }
}
 ```
  Acá simplemente definimos que nuestro componente `BookDetailComponent` va a recibir un `Book`.

  ## BooksComponent

  En el componente `BooksComponent` es el encargado de contener los otros componentes `BookListComponent` y `BookDetailComponent`, entonces en nuestro HTML vamos a agregar el siguiente código.

  ``` html
  <div fxLayout="row" fxLayoutAlign="space-between" fxLayout.xs="column">
  <mat-card fxFlex="30">
    <mat-card-title>Books</mat-card-title>
    <mat-card-content>
      <bs-book-list *ngFor="let author of authors"
      [author]="author"
      (bookSelected)="onSelectBook($event)"></bs-book-list>
    </mat-card-content>
  </mat-card>
  <mat-card fxFlex *ngIf="selectedBook">
    <mat-card-title>Detalis</mat-card-title>
    <bs-book-detail [book]="selectedBook"></bs-book-detail>
  </mat-card>
</div>

  ```
y en el typescript agregamos los siguiente.

```` typescript
@Component({
  selector: 'bs-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  authors: Author[];
  selectedBook: Book;

  constructor() {
    this.authors = [
      {
        name: 'Andrés Arias',
        books: [
          {
            name: 'Capacitación Angular Vol.1',
            date: new Date(),
            sinopsis: 'Lorem ipsum ...',
            quantity: 2,
            img: 'https://cdn.freebiesupply.com/logos/large/2x/angular-icon-logo-png-transparent.png'
          },
          {
            name: 'Capacitación Angular Vol.2',
            date: new Date(),
            sinopsis: 'In hac habitasse platea.....',
            quantity: 6,
            img: 'https://cdn.freebiesupply.com/logos/large/2x/angular-icon-logo-png-transparent.png'
          }
        ]
      },
      {
        name: 'Evan Y.',
        books: [
          {
            name: 'Capacitación Vue Vol.1',
            date: new Date(),
            sinopsis: 'Vivamus sit amet tellus...',
            quantity: 5,
            img: 'https://www.stickpng.com/assets/images/58482acecef1014c0b5e4a1e.png'
          },
            {
            name: 'Capacitación Vue Vol.2',
            date: new Date(),
            sinopsis: 'Phasellus tincidunt ante....',
            quantity: 0,
            img: 'https://www.stickpng.com/assets/images/58482acecef1014c0b5e4a1e.png'
          }
        ]
      }
    ];
  }

  ngOnInit() {}

  onSelectBook(book: Book) {
    this.selectedBook = book;
  }
}

````

  ## AppComponent

  En nuestro `app.component.html` lo unico que hacemos es agregar nuestro `bs-navbar` y `bs-books`

  ``` html
  <bs-navbar></bs-navbar>
  <bs-books></bs-books>
  ```

  ## Ejecutar

  Para ejecutar la aplicación ejecutamos el siguiente comando en la consola.

  ```
  ng serve -o
  ```

  y nos deberia de mostrar algo como.

<p align="center">
    <img src="https://raw.githubusercontent.com/arias9306/capacitacion-angular/master/img/book_store.jpg" alt="book store" />
</p>

________
## Continua [Día 5: Reto](https://github.com/arias9306/capacitacion-angular/blob/master/dia5.md)
________