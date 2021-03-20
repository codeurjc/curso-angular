import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Book } from './book.model';

const BASE_URL = 'http://127.0.0.1:8080/books/';

@Injectable({ providedIn: 'root' })
export class BooksService {

	constructor(private httpClient: HttpClient) { }

	getBooks(): Observable<Book[]> {
		return this.httpClient.get(BASE_URL).pipe(
			catchError(error => this.handleError(error))
		) as Observable<Book[]>;
	}

	getBook(id: number | string): Observable<Book> {
		return this.httpClient.get(BASE_URL + id).pipe(
			catchError(error => this.handleError(error))
		) as Observable<Book>;
	}

	addOrUpdateBook(book: Book) {
		if (!book.id) {
			return this.addBook(book);
		} else {
			return this.updateBook(book);
		}
	}

	private addBook(book: Book) {
		return this.httpClient.post(BASE_URL, book).pipe(
			catchError(error => this.handleError(error))
		);
	}

	private updateBook(book: Book) {
		return this.httpClient.put(BASE_URL + book.id, book).pipe(
			catchError(error => this.handleError(error))
		);
	}

	removeBook(book: Book) {
		return this.httpClient.delete(BASE_URL + book.id).pipe(
			catchError(error => this.handleError(error))
		);
	}

	private handleError(error: any) {
		console.error(error);
		return throwError("Server error (" + error.status + "): " + error.text())
	}
}