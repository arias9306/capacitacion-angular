import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Author } from "../model/author.model";
import { Book } from "../model/book.model";
import { BookService } from "../services/book.service";

@Component({
  selector: "bs-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  authors: Author[];
  books: Book[];
  constructor(private router: Router, private bookService: BookService) {}

  ngOnInit() {
    this.authors = this.bookService.getAuthors();
    this.books = this.bookService.getBooks();
  }

  goTo(path: string) {
    this.router.navigate([path]);
  }
}
