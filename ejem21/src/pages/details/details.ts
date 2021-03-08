import { Component } from '@angular/core';

import { NavParams} from 'ionic-angular';

@Component({
    templateUrl: 'details.html'
})
export class DetailsPage {

    elem: any;

    constructor(navParams: NavParams) {
        this.elem = navParams.get('elem');
    }
}
