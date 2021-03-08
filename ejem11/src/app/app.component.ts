import { Component } from '@angular/core';
import { BooksService } from './books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  titles: string[] = [];

  constructor(private booksService: BooksService) { }

  search(title: string) {
    this.titles = this.booksService.getTitles(title);
  }
}
