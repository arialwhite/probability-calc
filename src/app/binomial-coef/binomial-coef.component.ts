import { Component } from '@angular/core';

import { bicoeff } from '../formulas';

@Component({
  selector: 'app-binomial-coef',
  templateUrl: './binomial-coef.component.html',
  styleUrls: ['./binomial-coef.component.css']
})
export class BinomialCoefComponent {
  N: number;
  K: number;
  result: number;

  compute() {
    this.result = bicoeff(this.N, this.K)
  }
}
