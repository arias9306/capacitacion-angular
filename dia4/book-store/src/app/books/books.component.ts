import { Component, OnInit } from '@angular/core';
import { Author } from '../model/author.model';
import { Book } from '../model/book.model';

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
            sinopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in bibendum neque, consequat condimentum elit. Donec vel faucibus urna, ut sollicitudin est. Quisque suscipit tortor a aliquam sodales. Proin quam augue, accumsan id ligula quis, elementum commodo dui. Sed tempus lacinia mi, sit amet convallis elit egestas at. Mauris vel diam venenatis, luctus odio et, mattis tellus. In scelerisque finibus enim, in vestibulum neque congue vel. Aenean sit amet luctus justo, tempus semper arcu.',
            quantity: 2,
            img: 'https://cdn.freebiesupply.com/logos/large/2x/angular-icon-logo-png-transparent.png'
          },
          {
            name: 'Capacitación Angular Vol.2',
            date: new Date(),
            sinopsis: 'In hac habitasse platea dictumst. Nulla ac interdum tortor, sit amet luctus nisl. Fusce semper convallis est scelerisque ultricies. Aenean id lectus ut urna scelerisque venenatis. Suspendisse volutpat varius feugiat. Aenean sollicitudin dapibus felis nec pretium. Mauris ut lorem eros. Sed posuere, quam non porta laoreet, quam ligula porta tortor, eu scelerisque urna augue sed ipsum. Suspendisse imperdiet arcu ac consectetur interdum. Integer lobortis bibendum tellus elementum varius.',
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
            sinopsis: 'Vivamus sit amet tellus eu nisl lacinia scelerisque at ut ipsum. Etiam arcu urna, lacinia at risus varius, ultricies iaculis mauris. Quisque elit ex, scelerisque at fermentum et, facilisis eu enim. Duis vitae dui mauris. Donec sit amet metus nec metus ullamcorper interdum eget id leo. Sed auctor arcu metus. Quisque ut lobortis ipsum. Duis ut sapien placerat magna maximus faucibus eu quis ex. Sed cursus suscipit ante, at commodo leo ullamcorper non. Fusce vitae magna justo. Morbi ullamcorper ligula vitae placerat venenatis. Nullam vehicula purus a erat egestas, sit amet interdum massa efficitur. Proin pellentesque libero a feugiat elementum.',
            quantity: 5,
            img: 'https://www.stickpng.com/assets/images/58482acecef1014c0b5e4a1e.png'
          },
            {
            name: 'Capacitación Vue Vol.2',
            date: new Date(),
            sinopsis: 'Phasellus tincidunt ante blandit sapien placerat ultricies. In vehicula in ex id eleifend. Suspendisse auctor non urna sit amet porta. Donec at rutrum nibh. Nam viverra commodo libero, id suscipit lorem efficitur pharetra. Fusce egestas consequat justo non vehicula. Aenean laoreet gravida mauris, luctus pulvinar nisi varius quis. Cras mi augue, posuere vitae finibus quis, pellentesque ac diam. Donec sed arcu nisl.',
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
