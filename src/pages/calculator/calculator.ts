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
  coinName: string = 'Ethereum';
  coinList: any;
  coinData: any;
  coinAmount: number;
  dollarAmount: number;

  constructor(public navCtrl: NavController, public rest: RestProvider) {
  }

  ionViewWillEnter() {
    this.selectCoin();
  }

  selectCoin() {
    console.log('Looking for: ', this.coinName);
    for (let coin = 0; coin < this.rest.coinData.length; coin++) {
      if (this.coinName == this.rest.coinData[coin]['name']) {
        this.coinData = this.rest.coinData[coin];
        this.coinData.conversion = this.getConversionRate(this.rest.coinData[coin]['price_cad']);
        this.calcCoin();
        return;
      }
    }
    console.log('Coin data not found');
  }

  getConversionRate(price) {
    let rate = 1/price;
    return rate;
  }

  calcDollar() {
    console.log('calcDollar');
    this.dollarAmount = this.coinAmount * this.coinData.price_cad;
  }

  calcCoin() {
    console.log('calcCoin');
    this.coinAmount = this.dollarAmount * this.coinData.conversion;
  }
}
