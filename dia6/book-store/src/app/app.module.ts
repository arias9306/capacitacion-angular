import { LayoutModule } from "@angular/cdk/layout";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthorsComponent } from "./authors/authors.component";
import { BookDetailComponent } from "./books/book-detail/book-detail.component";
import { BookListComponent } from "./books/book-list/book-list.component";
import { BooksComponent } from "./books/books.component";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { AuthorComponent } from './authors/author/author.component';

// const appRoutes: Route[] = [
//   { path: 'books' , component: BooksComponent },
//   { path: 'authors' , component: AuthorsComponent },
//   { path: '' , component: HomeComponent, pathMatch: 'full' },
//   { path: '**', redirectTo: 'books' },
// ];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BooksComponent,
    BookDetailComponent,
    BookListComponent,
    HomeComponent,
    AuthorsComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatBadgeModule,
    MatButtonModule,
    // RouterModule.forRoot(appRoutes),
    MatGridListModule,
    MatMenuModule,
    LayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
