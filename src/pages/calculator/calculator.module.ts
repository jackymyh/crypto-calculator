import { NgModule } from '@angular/core';
import { CalculatorPage } from './calculator';
import { IonicPageModule } from 'ionic-angular';
import { CoinInfoPage } from '../coin-info/coin-info';

@NgModule({
  declarations: [CalculatorPage, CoinInfoPage],
  imports: [IonicPageModule.forChild(CalculatorPage)],
  entryComponents: [CalculatorPage],
})
export class CalculatorPageModule {}
