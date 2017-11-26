import { Component, forwardRef, OnInit, Input, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { ITableHeader } from './table-header';

@Component({
  selector: 'app-matrix-table',
  templateUrl: './matrix-table.component.html',
  styleUrls: ['./matrix-table.component.css']
})
export class MatrixTableComponent implements OnInit {

  @Input()
  data: any[][];

  @Input()
  headers: ITableHeader[];

  constructor() { }

  ngOnInit() {
  }

  toCsv(): string {
    if (!this.data) {
      return '';
    }

    return this.data.map(row => row.map(n => this.normalize(n)).join(',')).join('\r\n');
  }

  normalize(value: any): any {
    return (typeof value === 'number')? this.round(value, 4) : value;
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
    a.download = 'table.csv';
    a.click();
    window.URL.revokeObjectURL(url);
    window.setTimeout(() => {
      document.body.removeChild(a);
    }, 500);
  }

}
