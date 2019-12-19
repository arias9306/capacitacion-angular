import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Subscription } from "rxjs";
import { Author } from "src/app/model/author.model";
import { BookService } from "src/app/services/book.service";

@Component({
  selector: "bs-author",
  templateUrl: "./author.component.html",
  styleUrls: ["./author.component.css"]
})
export class AuthorComponent implements OnInit, OnDestroy {
  author: Author;
  paramSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.paramSubscription = this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.author = this.bookService.getAuthorById(+params.get("id"));
      }
    );
  }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }
}
