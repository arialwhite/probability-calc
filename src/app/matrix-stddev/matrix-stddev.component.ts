import { Component, OnInit } from '@angular/core';

import 'mathjs'
import * as math from 'mathjs';
import Matrix = mathjs.Matrix;

import { stdDevMatrix } from '../formulas';

@Component({
  selector: 'app-matrix-stddev',
  templateUrl: './matrix-stddev.component.html',
  styleUrls: ['./matrix-stddev.component.css']
})
export class MatrixStddevComponent implements OnInit {

  I = 3;
  J = 3;
  matrix: number[][];
  result: Matrix;

  constructor() { }

  ngOnInit() {
  }

  compute(ma : Matrix) {
    const m = math.matrix(this.matrix);

    this.result = stdDevMatrix(m);
  }

  onload(matrix: number[][]) {
    this.I = matrix.length;
    this.J = matrix[0].length;
    this.matrix = matrix;
  }

}
