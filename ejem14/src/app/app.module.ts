import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list.component';
import { BookDetailComponent } from './book-detail.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [AppComponent, BookDetailComponent, BookListComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, routing],
  bootstrap: [AppComponent]
})
export class AppModule { }

