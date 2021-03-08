import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BooksService {

  getTitles(title: string) {
    return [
      'Aprende Java en 2 días',
      'Java para torpes',
      'Java para expertos'
    ];
  }
}
