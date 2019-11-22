import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Author } from 'src/app/model/author.model';
import { Book } from 'src/app/model/book.model';

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
    console.log(book);
    this.selectedBook = book;
    this.bookSelected.emit(book);
  }

}
