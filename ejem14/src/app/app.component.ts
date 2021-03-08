import { Component } from '@angular/core';
import { BooksService } from './books.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  $titles: Observable<string>;

  constructor(private service: BooksService) { }

  search(title: string) {
    this.$titles = this.service.getTitles(title);
  }
}
