import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public elems = [
      {name:"Elem1", desc: "Elem1 description"},
      {name:"Elem2", desc: "Elem2 description"},
      {name:"Elem3", desc: "Elem3 description"}
    ];

    constructor(private navCtrl: NavController) {}

    goToDetails(elem){
      this.navCtrl.push(DetailsPage, {elem: elem})
    }
}

