import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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

}
