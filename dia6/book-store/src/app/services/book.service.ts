import { EventEmitter, Injectable } from "@angular/core";
import { Author } from "../model/author.model";
import { Book } from "../model/book.model";

@Injectable({
  providedIn: "root"
})
export class BookService {
  private authors: Author[];
  private books: Book[] = [];
  private selectedBook = new EventEmitter<Book>();

  constructor() {
    this.authors = [
      {
        id: 1,
        name: "Gabriel García Márquez",
        books: [
          {
            id: 1,
            name: "Cien años de soledad",
            date: new Date(),
            img:
              "https://camo.githubusercontent.com/74fab5cadb847de9f1dd064a27dffc8838cceef4/68747470733a2f2f616e67756c61722d61636164656d792e73332e616d617a6f6e6177732e636f6d2f636f757273652d6c6f676f732f616e67756c61722d33642d636f7665722d76322d736d616c6c2e706e67",
            quantity: 10,
            sinopsis:
              "Concebida por Gabo en uno de sus peores momentos económicos, poco podía prever el autor que su obra, tras ser enviada a la editorial argentina Sudamericana en 1967, se convertiría en un éxito indiscutible. La historia de la familia Buendía, habitante del perdido pueblo de Macondo, no solo sirvió para narrar la historia de Latinoamérica a lo largo de varias generaciones, sino para acuñar el boom de un realismo mágico que imperó durante las décadas de las 60 y 70 para convertirse en una marca insignia de las letras iberoamericanas. De los 10 mejores libros de Gabriel García Márquez esta es su obra magna, sin duda. Cien anos de soledad...."
          },
          {
            id: 2,
            name: "El amor en los tiempos del cólera",
            date: new Date(),
            img:
              "https://camo.githubusercontent.com/74fab5cadb847de9f1dd064a27dffc8838cceef4/68747470733a2f2f616e67756c61722d61636164656d792e73332e616d617a6f6e6177732e636f6d2f636f757273652d6c6f676f732f616e67756c61722d33642d636f7665722d76322d736d616c6c2e706e67",
            quantity: 1,
            sinopsis:
              "En más de una ocasión, Gabo reconoció que El amor en los tiempos del cólera era su novela favorita. Uno de los motivos reside en la historia de los propios padres del autor como fuente de inspiración para el romance de Fermina Daza, casada con el médico Juvenal Urbino, y el solitario Florentino Ariza en un pueblo portuario del Caribe colombiano. Desarrollada a lo largo de la vida de los tres protagonistas, El amor en los tiempos del cólero es como un bolero lento, uno que te sumerge en los pensamientos de unos personajes para los que el tiempo es la única esperanza. Publicada en 1985, la novela fue todo un éxito y (des)mereció una adaptación cinematográfica llevada a cabo en 2007. EL AMOR EN LOS TIEMPOS..."
          },
          {
            id: 3,
            name: "Crónica de una muerte anunciada",
            date: new Date(),
            img:
              "https://camo.githubusercontent.com/74fab5cadb847de9f1dd064a27dffc8838cceef4/68747470733a2f2f616e67756c61722d61636164656d792e73332e616d617a6f6e6177732e636f6d2f636f757273652d6c6f676f732f616e67756c61722d33642d636f7665722d76322d736d616c6c2e706e67",
            quantity: 2,
            sinopsis:
              "Desde la primera página ya conoces el final, pero el gancho consiste en saber cómo encajan las piezas del puzzle que llevó a la muerte de Santiago Nasar, acusado por Ángela Vicario, recién casada con el médico Bayardo San Román, de ser el causante de la pérdida de su virginidad. La historia del crimen que todo el mundo conocía pero nadie se atrevió a detener está más cerca de novela policíaca y recibe varias influencias del Gabo más periodístico. Publicada en 1981, Crónica de una muerte anunciada está inspirada en el caso real de un hombre asesinado en un pueblo colombiano en 1951. Crónica de una muerte..."
          },
          {
            id: 4,
            name: "El coronel no tiene quien le escriba",
            date: new Date(),
            img:
              "https://camo.githubusercontent.com/74fab5cadb847de9f1dd064a27dffc8838cceef4/68747470733a2f2f616e67756c61722d61636164656d792e73332e616d617a6f6e6177732e636f6d2f636f757273652d6c6f676f732f616e67756c61722d33642d636f7665722d76322d736d616c6c2e706e67",
            quantity: 4,
            sinopsis:
              "La segunda obra publicada de García Márquez fue esta novela corta que a pesar de su extensión, encerraba una historia tan intensa como sutil. El protagonista, un coronel que cada mañana acude al puerto esperando la pensión por sus servicios en la Guerra de los Mil Días, se pasea por las calles de un pueblo colombiano, lidia con su esposa y trata de alimentar al gallo de pelea de su fallecido hijo en mitad de una pobreza creciente. La novela fue publicada en  1961 y Gabo lo consideraba “su mejor libro”. El coronel no tiene quien..."
          }
        ]
      },
      {
        id: 2,
        name: "William Shakespeare",
        books: [
          {
            id: 5,
            name: "Hamlet",
            date: new Date(),
            img:
              "https://camo.githubusercontent.com/74fab5cadb847de9f1dd064a27dffc8838cceef4/68747470733a2f2f616e67756c61722d61636164656d792e73332e616d617a6f6e6177732e636f6d2f636f757273652d6c6f676f732f616e67756c61722d33642d636f7665722d76322d736d616c6c2e706e67",
            quantity: 7,
            sinopsis:
              "Cuando Goethe dijo: Ningún libro, ninguna persona ni ningún hecho de mi vida han producido un efecto tan grande en mí como los dramas de Shakespeare, señaló la magnitud excepcional del escritor inglés, primer poeta dramático del mundo, nacido en Stratford-on-Avon (1564-1616)."
          },
          {
            id: 6,
            name: "El Mercader De Venecia",
            date: new Date(),
            img:
              "https://camo.githubusercontent.com/74fab5cadb847de9f1dd064a27dffc8838cceef4/68747470733a2f2f616e67756c61722d61636164656d792e73332e616d617a6f6e6177732e636f6d2f636f757273652d6c6f676f732f616e67756c61722d33642d636f7665722d76322d736d616c6c2e706e67",
            quantity: 10,
            sinopsis:
              "En la obra de Shakespeare, la inteligencia privilegiada, la inventiva y la genialidad cabalgan a la par, aunadas a un magistral dominio de la técnica teatral, un poder creativo de relevantes caracteres y una dúctil variedad con sentido de adaptación a los gustos del público, circunstancias históricas y corrientes literarias de su época. "
          },
          {
            id: 7,
            name: "Macbeth",
            date: new Date(),
            img:
              "https://camo.githubusercontent.com/74fab5cadb847de9f1dd064a27dffc8838cceef4/68747470733a2f2f616e67756c61722d61636164656d792e73332e616d617a6f6e6177732e636f6d2f636f757273652d6c6f676f732f616e67756c61722d33642d636f7665722d76322d736d616c6c2e706e67",
            quantity: 0,
            sinopsis:
              "Macbeth es junto con Hamlet, la tragedia más profunda que se haya escrito jamás. Es la realidad del hombre codicioso y su destino. Según cuentan los biógrafos, fue estrenada ante la corte de Jaime I en 1606, con motivo de la visita del Rey de Dinamarca Cristian IV. La obra dividida en cinco actos comienza con el presagio de las brujas que nombran a Macbeth señor de Glamis, de Caudor y futuro rey."
          },
          {
            id: 8,
            name: "Romeo y Julieta",
            date: new Date(),
            img:
              "https://camo.githubusercontent.com/74fab5cadb847de9f1dd064a27dffc8838cceef4/68747470733a2f2f616e67756c61722d61636164656d792e73332e616d617a6f6e6177732e636f6d2f636f757273652d6c6f676f732f616e67756c61722d33642d636f7665722d76322d736d616c6c2e706e67",
            quantity: 1,
            sinopsis:
              "Eterno símbolo del amor que brota incontenible contra toda fuerza opuesta, Romeo y Julieta dramatiza una leyenda popularizada en el Renacimiento por incontables relatos italianos, franceses e ingleses, en prosa y verso, pero que apenas sería hoy recordada si no hubiera inspirado esta primera gran pieza teatral de Shakespeare, donde resabios de la lucha feudal y destellos cómicos de sirvientes y camaradas se entremezclan magistralmente con el más bello canto al amor."
          }
        ]
      }
    ];

    this.authors.forEach(element => {
      this.books.push(...element.books);
    });
  }

  getAuthors(): Author[] {
    return this.authors;
  }

  setSelectedBook(book: Book) {
    this.selectedBook.emit(book);
  }

  getSelectedBook(): EventEmitter<Book> {
    return this.selectedBook;
  }

  getAuthorById(id: number): Author {
    return this.authors.find(x => x.id === id);
  }

  getBooks() {
    return this.books;
  }

  getBookById(id: number): Book {
    return this.books.find(x => x.id === id);
  }
}
