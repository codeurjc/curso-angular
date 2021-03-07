import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: string[] = [];
  fieldText: string; 

  addItem() {
    this.items.push(this.fieldText);
    this.fieldText = '';
  }

}
