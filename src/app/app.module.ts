import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import {ChartModule} from 'angular2-highcharts';

import { AppComponent } from './app.component';
import { BinomialCoefComponent } from './binomial-coef/binomial-coef.component';
import { BinomialLawComponent } from './binomial-law/binomial-law.component';
import { BinomialDistribComponent } from './binomial-distrib/binomial-distrib.component';

declare var require: any;
export function highchartsFactory() {
    const hc = require('highcharts/highstock');
    const dd = require('highcharts/modules/exporting');
    dd(hc);
    return hc;
}


@NgModule({
  declarations: [
    AppComponent,
    BinomialCoefComponent,
    BinomialLawComponent,
    BinomialDistribComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartModule
  ],
  providers: [
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
