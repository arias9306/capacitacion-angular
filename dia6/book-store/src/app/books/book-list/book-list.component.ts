import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Author } from 'src/app/model/author.model';
import { Book } from 'src/app/model/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'bs-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  // @Output() bookSelected = new EventEmitter<Book>();
  @Input() author: Author;
  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  onBookSelected(book: Book) {
    // this.bookSelected.emit(book);
    this.bookService.setSelectedBook(book);
  }

}
