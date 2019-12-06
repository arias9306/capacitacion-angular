import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AuthorComponent } from "./authors/author/author.component";
import { AuthorsComponent } from "./authors/authors.component";
import { BooksComponent } from "./books/books.component";
import { HomeComponent } from "./home/home.component";

const appRoutes: Route[] = [
  { path: "books", component: BooksComponent },
  { path: "books/:id", component: BooksComponent },
  {
    path: "authors",
    component: AuthorsComponent,
    children: [{ path: ":id", component: AuthorComponent }]
  },
  // { path: "authors/:id", component: AuthorComponent },
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "**", redirectTo: "books" }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
