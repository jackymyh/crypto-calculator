import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  coins: string[];
  errorMessage: string;
  limit:number = 20;

  constructor(public navCtrl: NavController, public rest: RestProvider) {

  }

  ionViewWillEnter() {
    this.getTicker(this.limit);
  }

  getTicker(limit) {
    this.rest.getTicker(limit)
       .subscribe(
         coins => this.coins = coins,
         error =>  this.errorMessage = <any>error);
  }

}
