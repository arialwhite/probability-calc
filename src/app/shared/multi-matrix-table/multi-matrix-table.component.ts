import { Component, forwardRef, OnInit, Input, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { ITableHeader } from '../matrix-table';

@Component({
  selector: 'app-multi-matrix-table',
  templateUrl: './multi-matrix-table.component.html',
  styleUrls: ['./multi-matrix-table.component.css']
})
export class MultiMatrixTableComponent implements OnInit {

  page = 0;

  @Input()
  name: string

  @Input()
  data: any[][][];

  @Input()
  headers: ITableHeader[][];

  constructor() { }

  ngOnInit() {
    this.page = parseInt(localStorage.getItem(this.name), 10) || 0;
  }

  go(page: number) {
    this.page = page;
    localStorage.setItem(this.name, String(this.page));
  }

}
