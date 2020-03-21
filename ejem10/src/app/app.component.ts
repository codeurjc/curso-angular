import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  books: string[] = [];

  constructor(private httpClient: HttpClient) { }

  search(title: string) {

    this.books = [];

    let url = "https://www.googleapis.com/books/v1/volumes?q=intitle:" + title;

    this.httpClient.get(url).subscribe(
      response => {
        let data: any = response;
        for (var i = 0; i < data.items.length; i++) {
          let bookTitle = data.items[i].volumeInfo.title;
          this.books.push(bookTitle);
        }
      },
      error => console.error(error)
    );
  }
}
