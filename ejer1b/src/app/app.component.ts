import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  items: String[] = [];

  addContent(item: String){
    this.items.push(item);
  }

}
