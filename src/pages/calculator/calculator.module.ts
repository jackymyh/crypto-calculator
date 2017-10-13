import { NgModule } from '@angular/core';
import { CalculatorPage } from './calculator';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [CalculatorPage],
  imports: [IonicPageModule.forChild(CalculatorPage)],
  entryComponents: [CalculatorPage]
})
export class CalculatorPageModule {}
