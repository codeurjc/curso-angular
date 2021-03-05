import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BooksService {

  constructor(private httpClient: HttpClient) { }

  getBooks(title: string) {

    let url = "/books/v1/volumes?q=intitle:" + title;

    return this.httpClient.get(url).pipe(
      map(response => this.extractTitles(response as any)),
      catchError(error => throwError('Server error'))
    );
  }

  private extractTitles(response) {
    return response.items.map(book => book.volumeInfo.title)
  }
}
