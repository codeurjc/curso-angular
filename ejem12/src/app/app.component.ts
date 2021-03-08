import { Component } from '@angular/core';
import { BooksService } from './books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  titles: string[] = [];

  constructor(private service: BooksService) { }

  search(title: string) {

    this.titles = [];

    this.service.getTitles(title).subscribe(
      titles => this.titles = titles,
      error => console.error(error)
    );
  }
}
