import { Component } from '@angular/core';
import { BooksService } from './books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  books: string[] = [];

  constructor(private service: BooksService) { }

  search(title: string) {

    this.books = [];

    this.service.getBooks(title).subscribe(
      books => this.books = books,
      error => console.error(error)
    );
  }
}
