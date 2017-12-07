import { Component, OnInit } from '@angular/core';
import { AlphaVantageApiService, ITimeSerie } from '../shared/api';
import { ITableHeader } from '../shared/matrix-table';

import * as moment from 'moment';

import 'mathjs'
import * as math from 'mathjs';
import Matrix = mathjs.Matrix;

import { stdDevMatrix } from '../formulas';

@Component({
  selector: 'app-var-cov',
  templateUrl: './var-cov.component.html',
  styleUrls: ['./var-cov.component.css']
})
export class VarCovComponent implements OnInit {

  I = 150;
  horizon = 10;
  data: any[][] = [];

  headers: ITableHeader[] = [
    { label: 'Date',     afterValue: undefined, type: 'string' },
    { label: 'Bitcoin',  afterValue: 'USD',     type: 'numeric' },
    { label: 'Ethereum', afterValue: 'USD',     type: 'numeric' },
    { label: 'Dash',     afterValue: 'USD',     type: 'numeric' }
  ];

  constructor(
    private alphaVantageApi: AlphaVantageApiService
  ) { }

  ngOnInit() {
    this.feed();
  }

  getData(I: number): Promise<ITimeSerie[]> {
    return Promise.all([
      this.alphaVantageApi.getBitCoinHistory(I),
      this.alphaVantageApi.getEthereumHistory(I),
      this.alphaVantageApi.getDashHistory(I)
    ]);
  }

  async feed() {
    const end = moment();

    const I = this.I > 501 ? 501 : this.I;
    const start = moment().subtract(I, 'day');

    const series = await this.getData(I);

    const bitCoin = series[0];
    const ethereum = series[1];
    const dash = series[2];
    
    this.data = bitCoin.data;
    this.data = this.mergeTimeSerie(this.data, ethereum);
    this.data = this.mergeTimeSerie(this.data, dash);
  }

  mergeTimeSerie(data: any[][], serie: ITimeSerie): any[][] {
     return data.map((row, i) => {
      return row.concat([serie.data[i][1]]);
    });
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
