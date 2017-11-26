import { Component, OnInit } from '@angular/core';

import 'mathjs';
import * as math from 'mathjs';
import Matrix = mathjs.Matrix;

import { maxtrixCovUnbiased, maxtrixCovBiased } from '../formulas';
@Component({
  selector: 'app-matrix-covariance',
  templateUrl: './matrix-covariance.component.html',
  styleUrls: ['./matrix-covariance.component.css']
})
export class MatrixCovarianceComponent implements OnInit {

  I = 3;
  J = 3;
  matrix: number[][];
  unbiased: Matrix;
  biased: Matrix;

  constructor() { }

  ngOnInit() {
  }

  compute(ma : Matrix) {
    const m = math.matrix(this.matrix);

    this.biased = maxtrixCovBiased(m);
    this.unbiased = math.matrix(maxtrixCovUnbiased(this.matrix));
  }

  onload(matrix: number[][]) {
    this.I = matrix.length;
    this.J = matrix[0].length;
    this.matrix = matrix;
  }
}