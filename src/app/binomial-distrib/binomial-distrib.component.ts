import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";

import { bilawDistrib, expectedValue, variance, stdDev } from '../formulas';

@Component({
  selector: 'app-binomial-distrib',
  templateUrl: './binomial-distrib.component.html',
  styleUrls: ['./binomial-distrib.component.css']
})
export class BinomialDistribComponent {

  N: number;
  K: number;
  P: number;

  V: number;
  E: number;
  STD_DEV: number;

  result: [number, number][];

  options: any;

  constructor() { }

  compute() {
    this.result = bilawDistrib(this.N, this.P);
    this.E = expectedValue(this.N, this.P);
    this.V = variance(this.N, this.P);
    this.STD_DEV = stdDev(this.N, this.P);
    this.draw(this.result);
  }

  draw(data: [number, number][]) {
    this.options =  {
      chart: {
          type: 'column'
      },
      title: {
          text: 'Distribution binomiale'
      },
      xAxis: [{
          title: { text: 'Nombre de succès' }
      }],
      yAxis: [{
          title: { text: 'Probabilité' }
      }],

      series: [{
          data: data
      }]
    }
  }

}
