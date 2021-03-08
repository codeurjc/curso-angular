import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Item } from './item.model';
import { ItemsService } from './items.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

	$items: Observable<Item[]>;

	constructor(private service: ItemsService) { }

	ngOnInit() {
		this.refresh();
	}

	refresh() {
		this.$items = this.service.getItems();
	}

	addItem(description: string) {
		const item = { description, checked: false };
		this.refreshWhenFinish(this.service.addItem(item));
	}

	removeItem(item: Item) {
		this.refreshWhenFinish(this.service.removeItem(item));
	}

	updateItem(item: Item) {
		this.refreshWhenFinish(this.service.updateItem(item));
	}

	refreshWhenFinish(items: Observable<any>) {
		items.subscribe(_ => this.refresh());
	}
}