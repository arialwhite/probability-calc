import { Component, OnInit } from '@angular/core';
import { AlphaVantageApiService, ITimeSerie } from '../shared/api';
import { ITableHeader } from '../shared/matrix-table';

import * as moment from 'moment';

import 'mathjs'
import * as math from 'mathjs';
import Matrix = mathjs.Matrix;

import { stdDevMatrix } from '../formulas';

@Component({
  selector: 'app-var-hist-two',
  templateUrl: './var-hist-two.component.html',
  styleUrls: ['./var-hist-two.component.css']
})
export class VarHistTwoComponent implements OnInit {
  
  bcCount = 50;
  ethCount = 300;

  I = 501;
  horizon = 10;
  data1: any[][] = [];
  data2: any[][] = [];
  data3: any[][] = [];

  isOffline = true;

  headers1: ITableHeader[] = [
    { label: 'Date',              afterValue: undefined, type: 'string', appendLineCount: true },
    { label: 'Bitcoin',           afterValue: 'USD',     type: 'numeric' },
    { label: 'Ethereum',          afterValue: 'USD',     type: 'numeric' },
    { label: 'Scenario Bitcoin',  afterValue: 'USD',     type: 'numeric' },
    { label: 'Scenario Ethereum', afterValue: 'USD',     type: 'numeric' }
  ];

  headers2: ITableHeader[] = [
    { label: 'Date',                afterValue: undefined, type: 'string', appendLineCount: true },
    { label: 'Valeur portefeuille', afterValue: 'USD',     type: 'numeric' },
    { label: 'Gain & Perte', afterValue: 'USD',     type: 'numeric' }
  ];

  headers3: ITableHeader[] = [
    { label: 'Rang',                afterValue: undefined, type: 'string'  },
    { label: 'Confiance',           afterValue: '%',       type: 'numeric' },
    { label: 'VaR 1J',         afterValue: 'USD',     type: 'numeric' },
    { label: 'VaR 10J',        afterValue: 'USD',     type: 'numeric' }
  ];

  constructor(
    private alphaVantageApi: AlphaVantageApiService
  ) { }

  ngOnInit() {
    this.feed();
  }

  getData(I: number): Promise<ITimeSerie[]> {
    return Promise.all([
      this.alphaVantageApi.getBitCoinHistory(I, !this.isOffline),
      this.alphaVantageApi.getEthereumHistory(I, !this.isOffline)
    ]);
  }

  /**
   * Get series with same dates number
   * 
   * At worst the number of obervation will be less than expected
   */
  withoutMissingDates(series: ITimeSerie[]) {
    const allSizesCorrect = series.every(serie => {
      return serie.data.length === this.I;
    });

    if (allSizesCorrect) { // no need to go further
      return series;
    }

    // Note: may be optimized

    // get available dates
    const dates: Set<string> = new Set<string>();
    for (const serie of series) {
      for (const item in serie.data) {
        dates.add(item[0]);
      }
    }

    // find dates that not every series contain
    const missingDates: Set<string> = new Set<string>();
    dates.forEach(dt => {
      const missing = false;
      for (const serie of series) {
        let found = false;
        for (const item in serie.data) {
          if(item[0] === dt) {
            found = true;
            break;
          }
        }
        if (!found) {
          missingDates.add(dt);
        }
      }
    });

    // return series with dates that every series contain
    return series.map(serie => {
      const result: ITimeSerie = {
        data: serie.data.filter(item => {
          return !missingDates.has(item[0]);
        })
      };
      return result;
    });
  }

  clear(): void {
    this.data1 = [];
    this.data2 = [];
    this.data3 = [];
  }

  clearAndFeed(): Promise<any> {
    this.clear();
    return this.feed();
  }

  async feed(): Promise<any> {
    const end = moment();

    const I = this.I > 501 ? 501 : this.I;
    const start = moment().subtract(I, 'day');

    const series = this.withoutMissingDates(await this.getData(I));

    const bitCoin = series[0];
    const ethereum = series[1];
    const dash = series[2];

    const scenarioBitCoin = this.toScenario(bitCoin);
    const scenarioEthereum = this.toScenario(ethereum);
    
    this.data1 = bitCoin.data;
    this.data1 = this.mergeTimeSerie(this.data1, ethereum);
    this.data1 = this.mergeTimeSerie(this.data1, scenarioBitCoin);
    this.data1 = this.mergeTimeSerie(this.data1, scenarioEthereum);

    this.data2 = this.colToMatrix(bitCoin.data, 0);

    const portfolioSerie = this.computePortfolioValues(
      [scenarioBitCoin, scenarioEthereum],
      [this.bcCount, this.ethCount]
    );

    this.data2 = this.mergeSerie(this.data2, portfolioSerie);

    const currentPortfolioValue = this.computeCurrentPortfolioValues(
      [bitCoin, ethereum],
      [this.bcCount, this.ethCount]
    );

    const pnl = this.computePortfolioPnL(portfolioSerie, currentPortfolioValue);
    this.data2 = this.mergeSerie(this.data2, pnl);

    const sPnl = this.sortPnl(pnl);
    const var10 = this.valueAtRisk10Days(sPnl);

    const ranks = this.getRanks(sPnl);
    const confidences = this.getConfidences(ranks);

    this.data3 = this.serieToMatrix(ranks);
    this.data3 = this.mergeSerie(this.data3, confidences);
    this.data3 = this.mergeSerie(this.data3, sPnl);
    this.data3 = this.mergeSerie(this.data3, var10);
  }

  getConfidences(ranks: number[]): number[] {
    return ranks.map(value => {
      return (1 - value / ranks.length) * 100;
    });
  }

  getRanks(serie: number[]): number[] {
    return serie.map((value, i) => i + 1);
  }

  sortPnl(values: number[]) {
    const result = values.slice();
    result.sort((a,b) => a > b ? 1 : a === b ? 0 : -1);
    return result;
  }

  valueAtRisk10Days(values: number[]) {
    return values.map(value => {
      return Math.sqrt(10) * value;
    });
  }

  toScenario(serie: ITimeSerie): ITimeSerie {
    const result: ITimeSerie = {
      data: new Array<[string, number]>()
    };

    const mostRecent = serie.data[0][1];

    for (let i = 0, ii = serie.data.length; i < ii -1; i++) {
      const dt = serie.data[i][0];
      const current = serie.data[i][1];

      const previous = serie.data[i+1][1];

      const scenario = mostRecent * current / previous;

      const item: [string, number] = [dt, scenario];

      result.data.push(item);
    }

    return result;
  }

  computeCurrentPortfolioValues(allSeries: ITimeSerie[], allCounts: number[]): number {
    let result = 0;

    for (let i = 0, ii = allSeries.length; i<ii; i++) {
      const serie = allSeries[i];
      const count = allCounts[i];

      const mostRecent = serie.data[0][1];
      result += mostRecent * count;
    }

    return result;
  }

  computePortfolioPnL(portfolioSerie: number[], currentPortfolioValue: number): number[] {
    return portfolioSerie.map(value => currentPortfolioValue - value);
  }

  computePortfolioValues(allScenarios: ITimeSerie[], allCounts: number[]): number[] {
    const results: number[][] = [];
    for (let i = 0, ii = allScenarios.length; i<ii; i++) {
      const scenarios = allScenarios[i];
      const count = allCounts[i];

      results[i] = scenarios.data.map(row => {
        return count * row[1];
      });
    }

    if (!results.length) {
      return [];
    }

    const I = results[0].length;
    const J = results.length;
    const portfolio: number[] = [];

    for (let i = 0; i < I; i++) {
      let value = 0;
      for (let j = 0; j < J; j++) {
        value += results[j][i];
      }
      portfolio[i] = value;
    }

    return portfolio;
  }

  mergeTimeSerie(data: any[][], serie: ITimeSerie): any[][] {
     return data.map((row, i) => {
      return row.concat([serie.data[i] ? serie.data[i][1] : undefined]);
    });
  }

  mergeSerie(data: any[][], serie: number[]): any[][] {
     return data.map((row, i) => {
      return row.concat([serie[i]]);
    });
  }

  getCol(data: any[][], index: number): number[] {
    return data.map((row, i) => {
      return row[index];
    });
  }

  colToMatrix(data: any[][], index: number): any[][] {
    return data.map((row, i) => {
      return [row[index]];
    });
  }

  serieToMatrix(data: number[]): any[][] {
    return data.map(value => [value]);
  }

  merge(data: any[][], matrix: number[][]): any[][] {
    return data.map((row, i) => {
      return row.concat(matrix[i]);
    });
  }

  toNumberArray(data: any[][]): number[][] {
    return data.map(row => {
      return row.slice(1);
    });
  }

  toMatrix(data: any[][]): Matrix {
    return math.matrix(data.map(row => {
      return row.slice(1);
    }));
  }
}
