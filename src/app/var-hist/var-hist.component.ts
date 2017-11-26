import { Component, OnInit } from '@angular/core';
import { CoinDeskApiService } from '../shared/api';
import { ITableHeader } from '../shared/matrix-table';

import * as moment from 'moment';

import 'mathjs'
import * as math from 'mathjs';
import Matrix = mathjs.Matrix;

import { stdDevMatrix } from '../formulas';

@Component({
  selector: 'app-var-hist',
  templateUrl: './var-hist.component.html',
  styleUrls: ['./var-hist.component.css']
})
export class VarHistComponent implements OnInit {

  I = 150;
  J = 7;
  data: any[][] = [];

  headers: ITableHeader[] = [
    { label: 'Date',    afterValue: undefined, type: 'string' },
    { label: 'Bitcoin', afterValue: 'USD', type: 'numeric' },
    { label: 'P&L', afterValue: 'USD', type: 'numeric' },
    { label: 'Confiance', afterValue: '%', type: 'numeric' },
    { label: 'VaR', afterValue: 'USD', type: 'numeric' }
  ];

  constructor(
    private coinDeskApi: CoinDeskApiService
  ) { }

  ngOnInit() {
    this.feed();
  }

  async feed() {
    const end = moment();

    const I = this.I > 500 ? 500 : this.I;
    const start = moment().subtract(I, 'day');

    const res = await this.coinDeskApi.getBpiHistory(start.format('YYYY-MM-DD'), end.format('YYYY-MM-DD'));
    this.data = res.bpi.reverse();

    const arr = this.toNumberArray(this.data);
    const pnl = this.getPnl(arr);

    const sPnl = this.getSortedPnl(pnl);
    const confidence = this.getConfidences(sPnl, pnl);

    const valueAtRisk = this.getValueAtRisk(pnl, 10);

    this.data = this.merge(this.data, pnl);
    this.data = this.merge(this.data, confidence);
    this.data = this.merge(this.data, valueAtRisk);
  }

  indexOf2D(j: number, arr: number[][], value: number): number {
    for (let i = 0, ii = arr.length; i<ii; i++) {
      if (arr[i][j] === value) {
        return i;
      }
    }
    return -1;
  }

  getConfidences(sPnl: number[][], pnl: number[][]): number[][] {
    return pnl.map((row, i) => {
      return row.map((value, j) => {
        const index = this.indexOf2D(j, sPnl, value);
        const confidence: number = 100 * (1 - (index + 1) / sPnl.length);
        return confidence;
      });
    });
  }

  getValueAtRisk(pnl: number[][], day: number): number[][] {
    return pnl.map(row => {
      return row.map(value=> {
        return Math.sqrt(day) * value;
      });
    });
  }

  merge(data: any[][], pnl: number[][]): any[][] {
    return data.map((row, i) => {
      return row.concat(pnl[i]);
    });
  }

  getSortedPnl(pnl: number[][]): number[][] {
    if (!pnl.length) {
      return [];
    }
    let result = <number[][]> math.transpose(pnl.slice());
    
    result = result.map(
      values => {
        values.sort((a,b) => a > b ? 1 : a === b ? 0 : -1);
        return values;
      }
    );
    return <number[][]> math.transpose(result);
  }

  getPnl(values: number[][]): number[][] {
    if (!values.length) {
      return [];
    }
    const lastRow = values[values.length -1];
    const otherRows = values.slice(0, -1);

    const result = otherRows.map(row => {
      return row.map((value, i) => {
        return value - lastRow[i];
      });
    });
    result.push(lastRow.map(() => 0));
    return result;
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
