import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BooksService } from './books.service';
import { Book } from './book.model';

@Component({
  template: `
  <div *ngIf="book">
    <h2>Book "{{book.title}}"</h2>
    <div *ngIf="book.id">
      <label>Id: </label>{{book.id}}
    </div>
    <div>
      <label>Title: </label>
      <input [(ngModel)]="book.title" placeholder="title"/>
    </div>
    <div>
      <label>Description: </label>
      <textarea [(ngModel)]="book.description" placeholder="description"></textarea>
    </div>
    <p>
      <button (click)="cancel()">Cancel</button>
      <button (click)="save()">Save</button>
    </p>
  </div>`
})
export class BookFormComponent {

  book: Book;

  constructor(activatedRoute: ActivatedRoute, private service: BooksService) {

    let id = activatedRoute.snapshot.params['id'];
    if (id) {
      service.getBook(id).subscribe(
        book => this.book = book,
        error => console.error(error)
      );
    } else {
      this.book = { title: '', description: '' };
    }
  }

  cancel() {
    window.history.back();
  }

  save() {
    this.service.addOrUpdateBook(this.book).subscribe(
      book => { },
      error => console.error('Error creating new book: ' + error)
    );
    window.history.back();
  }
}
