import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { ChartModule } from 'angular2-highcharts';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BinomialCoefComponent } from './binomial-coef/binomial-coef.component';
import { BinomialLawComponent } from './binomial-law/binomial-law.component';
import { BinomialDistribComponent } from './binomial-distrib/binomial-distrib.component';
import { MatrixStddevComponent } from './matrix-stddev/matrix-stddev.component';
import { MatrixEditorComponent } from './shared/matrix-editor/matrix-editor.component';
import { MatrixCovarianceComponent } from './matrix-covariance/matrix-covariance.component';
import { MatrixViewComponent } from './shared/matrix-view/matrix-view.component';
import { MatrixLoaderComponent } from './shared/matrix-loader/matrix-loader.component';
import { MatrixCorrelationComponent } from './matrix-correlation/matrix-correlation.component';
import { VarHistComponent } from './var-hist/var-hist.component';
import { MatrixTableComponent } from './shared/matrix-table/matrix-table.component';

import { CoinDeskApiService } from './shared/api';

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
    BinomialDistribComponent,
    MatrixStddevComponent,
    MatrixEditorComponent,
    MatrixCovarianceComponent,
    MatrixViewComponent,
    MatrixLoaderComponent,
    MatrixCorrelationComponent,
    VarHistComponent,
    MatrixTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },
    CoinDeskApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
