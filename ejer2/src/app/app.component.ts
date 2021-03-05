import { Component } from '@angular/core';

interface Item {
	description: string;
	checked: boolean;
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {

	items: Item[] = [];

	addItem(description: string) {
		let item = { description, checked: false };
		this.items.push(item);
	}

	removeItem(item: Item) {
		let index = this.items.indexOf(item);
		if (index > -1) {
			this.items.splice(index, 1);
		}
	}
}