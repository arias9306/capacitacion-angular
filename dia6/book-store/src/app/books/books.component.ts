import { Component, OnInit } from '@angular/core';
import { Author } from '../model/author.model';
import { Book } from '../model/book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'bs-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  authors: Author[];
  selectedBook: Book;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.authors = this.bookService.getAuthors();
    this.bookService.getSelectedBook().subscribe(
      (book: Book) => this.selectedBook = book
    );
  }
}
