import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Item } from './item.model';

const BASE_URL = 'http://127.0.0.1:8080/items/';

@Injectable({ providedIn: 'root' })
export class ItemsService {

	constructor(private httpClient: HttpClient) { }

	getItems(): Observable<Item[]> {
		return this.httpClient.get(BASE_URL).pipe(			
			catchError(error => this.handleError(error))
		) as Observable<Item[]>;
	}

	addItem(item: Item) {
		return this.httpClient.post(BASE_URL, item).pipe(			
			catchError(error => this.handleError(error))
		);
	}

	removeItem(item: Item) {
		return this.httpClient.delete(BASE_URL + item.id).pipe(			
			catchError(error => this.handleError(error))
		);
	}

	updateItem(item: Item) {
		return this.httpClient.put(BASE_URL + item.id, item).pipe(			
			catchError(error => this.handleError(error))
		);
	}

	private handleError(error: any) {
		console.error(error);
		return Observable.throw("Server error (" + error.status + "): " + error.text())
	}
}