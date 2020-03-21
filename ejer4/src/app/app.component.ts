import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Item } from './item.model';

const BASE_URL = 'http://127.0.0.1:8080/items/';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

	items: Item[] = [];

	constructor(private httpClient: HttpClient) { }

	ngOnInit() {
		this.refresh();
	}

	private refresh() {
		this.httpClient.get(BASE_URL).subscribe(
			response => this.items = response as any,
			error => this.handleError(error)
		);
	}

	addItem(description: string) {

		let item = { description, checked: false };

		this.httpClient.post(BASE_URL, item).subscribe(
			response => this.refresh(),
			error => this.handleError(error)
		);
	}

	removeItem(item: Item) {

		this.httpClient.delete(BASE_URL + item.id).subscribe(
			response => this.refresh(),
			error => this.handleError(error)
		);
	}

	updateItem(item: Item) {

		return this.httpClient.put(BASE_URL + item.id, item).subscribe(
			response => this.refresh(),
			error => this.handleError(error)
		);
	}

	private handleError(error: any) {
		console.error(error);
	}
}