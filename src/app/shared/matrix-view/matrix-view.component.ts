import { Component, forwardRef, OnInit, Input, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-matrix-view',
  templateUrl: './matrix-view.component.html',
  styleUrls: ['./matrix-view.component.css']
})
export class MatrixViewComponent implements OnInit, OnChanges {

  @Input()
  matrix: any;

  arr: number[][];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) : void {
    let matrix;
    if (changes['matrix']) {
      matrix = changes['matrix'].currentValue;
      if (matrix) {
        this.arr = matrix.toArray();
      }
    }
  }

  toCsv(): string {
    if (!this.arr) {
      return '';
    }

    return this.arr.map(row => row.map(n => this.round(n, 4)).join(',')).join('\r\n');
  }

  round(value, decimals): number {
    let val;
    val = Number(value)+'e'+decimals;
    return Number(Math.round(val)+'e-'+decimals);
  }

  saveAsCsv () {
    const csv = this.toCsv();

    var a = document.createElement("a");
    a.setAttribute('style', 'display: none');
    document.body.appendChild(a);

    const blob = new Blob([csv], {type: "octet/stream"}),
    url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'matrice.csv';
    a.click();
    window.URL.revokeObjectURL(url);
    window.setTimeout(() => {
      document.body.removeChild(a);
    }, 500);
}

}
