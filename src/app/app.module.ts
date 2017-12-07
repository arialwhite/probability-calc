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

import { CoinDeskApiService, AlphaVantageApiService } from './shared/api';
import { VarCovComponent } from './var-cov/var-cov.component';

import { CacheModule, CacheLoader, CacheStaticLoader } from '@ngx-cache/core';
import { VarHistTwoComponent } from './var-hist-two/var-hist-two.component';
import { MultiMatrixTableComponent } from './shared/multi-matrix-table/multi-matrix-table.component';

declare var require: any;
export function highchartsFactory() {
    const hc = require('highcharts/highstock');
    const dd = require('highcharts/modules/exporting');
    dd(hc);
    return hc;
}

export function cacheFactory(): CacheLoader {
  return new CacheStaticLoader({
    key: 'NGX_CACHE',
    lifeSpan: {
      "expiry": 1000 * 3600,
      "TTL":  1000 * 3600
    }
  });
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
    MatrixTableComponent,
    VarCovComponent,
    VarHistTwoComponent,
    MultiMatrixTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ChartModule,
    CacheModule.forRoot({
      provide: CacheLoader,
      useFactory: (cacheFactory)
    })
  ],
  providers: [
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },
    CoinDeskApiService,
    AlphaVantageApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
