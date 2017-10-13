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

  constructor(public navCtrl: NavController, public rest: RestProvider) {

  }

  ionViewDidLoad() {
    this.getTicker();
  }

  getTicker() {
    this.rest.getTicker()
       .subscribe(
         coins => this.coins = coins,
         error =>  this.errorMessage = <any>error);
  }

}
