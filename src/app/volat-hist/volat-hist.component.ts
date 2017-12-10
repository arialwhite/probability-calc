import { Component, OnInit } from '@angular/core';
import { AlphaVantageApiService, ITimeSerie } from '../shared/api';
import { ITableHeader } from '../shared/matrix-table';

import * as moment from 'moment';

import 'mathjs'
import * as math from 'mathjs';
import Matrix = mathjs.Matrix;

import { mean, sum } from '../formulas';

@Component({
  selector: 'app-volat-hist',
  templateUrl: './volat-hist.component.html',
  styleUrls: ['./volat-hist.component.css']
})
export class VolatHistComponent implements OnInit {
  
  I = 501;
  data1: any[][] = [];

  isOffline = true;

  dailyVariancePercent: number;
  dailyVolatilityPercent: number;

  headers1: ITableHeader[] = [
    { label: 'Date',                         afterValue: undefined, type: 'string', appendLineCount: true },
    { label: 'Bitcoin',                      afterValue: 'USD',     type: 'numeric' },
    { label: 'Rentabilité journalière',      afterValue: '%',     type: 'numeric' }
  ];

  constructor(
    private alphaVantageApi: AlphaVantageApiService
  ) { }

  ngOnInit() {
    this.feed();
  }

  getData(I: number): Promise<ITimeSerie> {
    return this.alphaVantageApi.getBitCoinHistory(I, !this.isOffline);
  }

  clear(): void {
    this.data1 = [];
  }

  clearAndFeed(): Promise<any> {
    this.clear();
    return this.feed();
  }

  async feed(): Promise<any> {
    const end = moment();

    const I = this.I > 501 ? 501 : this.I;

    const bitCoin = await this.getData(I);

    const rprice = this.getRelativePrices(bitCoin);
    const dailyReturns = this.getDailyReturns(rprice);
    const dailyReturnsPercent = this.toPercents(dailyReturns);

    const dailyVariance = this.computeDailyVariance(dailyReturns);
    this.dailyVariancePercent = dailyVariance ;
    const dailyVolatility = Math.sqrt(dailyVariance);
    this.dailyVolatilityPercent = dailyVolatility ;

    this.data1 = bitCoin.data;
    this.data1 = this.mergeSerie(this.data1, dailyReturnsPercent);
  }

  getRelativePrices(serie: ITimeSerie): number[] {
    const result: number[] = [];

    const mostRecent = serie.data[0][1];

    for (let i = 0, ii = serie.data.length; i < ii -1; i++) {
      const current = serie.data[i][1];
      const previous = serie.data[i+1][1];

      result.push(current / previous);
    }

    return result;
  }

  getDailyReturns(rprices: number[]): number[] {
    return rprices.map(value => Math.log(value));
  }

  computeDailyVariance(returns: number[]) {
    const rMean = mean(returns);

    const allSum = sum(
      returns.map(r => Math.pow(r - rMean, 2))
    );

    return allSum / (returns.length -1);
  }

  toPercents(values: number[]): number[] {
    return values.map(value => value * 100);
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
