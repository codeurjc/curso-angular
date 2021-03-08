import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Book, BookService } from './book.service';

@Component({
  template: `
  <h2>{{book.title}}</h2>
  <div>
    <label>Id: </label>{{book.id}}
  </div>
  <div>
    <label>Description: </label>{{book.description}}
  </div>
  <p>
    <button (click)="gotoBooks()">Back</button>
    <br><a *ngIf="exists(book.id-1)" [routerLink]="['/book', book.id-1]">&lt; Prev</a>&nbsp; 
    <a *ngIf="exists(book.id+1)" [routerLink]="['/book', book.id+1]">Next &gt;</a>
  </p>`
})
export class BookDetailComponent {

  book: Book;

  constructor(private router: Router, activatedRoute: ActivatedRoute, private service: BookService) {
    activatedRoute.params.subscribe(
      params => this.book = service.getBook(params['id']),
      error => console.log(error)
    );
  }

  gotoBooks() {
    this.router.navigate(['/books']);
  }

  exists(id: number){
    return this.service.getBook(id) !== undefined;
  }
}
