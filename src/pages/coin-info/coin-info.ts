import { Component, Input } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-coin-info',
  templateUrl: 'coin-info.html',
})
export class CoinInfoPage {
  @Input()  coinData: any;
  @Input()  currency: string;
  constructor(public navCtrl: NavController) {
  }
}
