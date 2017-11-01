import { Component, OnInit } from '@angular/core';

import { bilaw } from '../formulas';

@Component({
  selector: 'app-binomial-law',
  templateUrl: './binomial-law.component.html',
  styleUrls: ['./binomial-law.component.css']
})
export class BinomialLawComponent {

  N: number;
  K: number;
  P: number;

  result: number;

  constructor() { }

  compute() {
    this.result = bilaw(this.N, this.P, this.K);
  }

}
