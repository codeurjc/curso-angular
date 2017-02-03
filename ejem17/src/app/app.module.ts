import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { AppComponent, DialogContent } from './app.component';

@NgModule({
  declarations: [AppComponent, DialogContent],
  imports: [MaterialModule.forRoot(), BrowserModule, FormsModule],
  entryComponents: [DialogContent],
  bootstrap: [AppComponent]
})
export class AppModule { }
