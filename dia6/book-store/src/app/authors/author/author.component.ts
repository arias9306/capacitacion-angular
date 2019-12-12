import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Author } from "src/app/model/author.model";
import { BookService } from "src/app/services/book.service";

@Component({
  selector: "bs-author",
  templateUrl: "./author.component.html",
  styleUrls: ["./author.component.css"]
})
export class AuthorComponent implements OnInit {
  author: Author;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.author = this.bookService.getAuthorById(+params.get("id"));
    });
  }
}
