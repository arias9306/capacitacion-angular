import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthorsComponent } from './authors/authors.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';


const appRoutes: Route[] = [
  { path: '' , component: HomeComponent },
  { path: 'books' , component: BooksComponent },
  { path: 'authors' , component: AuthorsComponent },
  { path: '**', redirectTo: 'books' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BooksComponent,
    BookDetailComponent,
    BookListComponent,
    HomeComponent,
    AuthorsComponent
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
    RouterModule.forRoot(appRoutes),
    MatGridListModule,
    MatMenuModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
