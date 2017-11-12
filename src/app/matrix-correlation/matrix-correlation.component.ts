import { Component, OnInit } from '@angular/core';

import 'mathjs';
import * as math from 'mathjs';
import Matrix = mathjs.Matrix;

import { maxtrixCorrUnbiased, maxtrixCorrBiased } from '../formulas';
@Component({
  selector: 'app-matrix-correlation',
  templateUrl: './matrix-correlation.component.html',
  styleUrls: ['./matrix-correlation.component.css']
})
export class MatrixCorrelationComponent implements OnInit {

  I = 3;
  J = 3;
  matrix: number[][];
  unbiased: Matrix;

  constructor() { }

  ngOnInit() {
  }

  compute(ma : Matrix) {
    const m = math.matrix(this.matrix);

    this.unbiased = math.matrix(maxtrixCorrUnbiased(this.matrix));
  }

  onload(matrix: number[][]) {
    this.I = matrix.length;
    this.J = matrix[0].length;
    this.matrix = matrix;
  }
}