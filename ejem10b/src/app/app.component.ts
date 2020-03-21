import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    response: object;

    constructor(private httpClient: HttpClient) { }

    newAnuncio(title: string) {

        let url = "http://127.0.0.1:9001/anuncios/";

        let anuncio = {
            nombre : title,
            asunto : title
        }

        this.httpClient.post(url, anuncio).subscribe(
            response => this.response = response,
            error => console.error(error)
        );
    }
}
