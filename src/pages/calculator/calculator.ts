import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html'
})
export class CalculatorPage {
  coin: string = 'ethereum';
  coinData: any;
  coinAmount: number;
  dollarAmount: number;

  constructor(public navCtrl: NavController, public rest: RestProvider) {

  }

  ionViewWillEnter() {
    this.selectCoin();
  }

  selectCoin() {
    for (let coinInfo = 0; coinInfo < this.rest.coinData.length; coinInfo++) {
      if (this.coin == this.rest.coinData[coinInfo]['id']) {
        console.log('Coin found: ', this.rest.coinData[coinInfo]);
        this.coinData = this.rest.coinData[coinInfo];
        return;
      }
    }
    console.log('Coin data not found');
  }
}
