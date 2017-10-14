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
  currency: string;
  coinAmount: number;
  dollarAmount: number;

  constructor(public navCtrl: NavController) {

  }

  selectCurrency() {
    console.log(this.currency)
  }
}
