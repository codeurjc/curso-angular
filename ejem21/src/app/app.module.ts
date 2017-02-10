import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { DetailsPage } from '../pages/details/details';
import { GitHubService } from '../services/github';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, DetailsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, GitHubService]
})
export class AppModule {}
