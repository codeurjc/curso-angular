import { Component, OnInit } from '@angular/core';

import { Item } from './item.model';
import { ItemsService } from './items.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

	items: Item[] = [];

	constructor(private itemsService: ItemsService) { }

	ngOnInit() {
		this.refresh();
	}

	private refresh() {
		this.itemsService.getItems().subscribe(
			items => this.items = items
		);
	}

	addItem(description: string) {
		let item = { description, checked: false };
		this.itemsService.addItem(item).subscribe(
			result => this.refresh()
		);
	}

	removeItem(item: Item) {
		this.itemsService.removeItem(item).subscribe(
			result => this.refresh()
		);
	}

	updateItem(item: Item) {
		this.itemsService.updateItem(item).subscribe(
			result => this.refresh()
		);
	}
}