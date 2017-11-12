import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-matrix-loader',
  templateUrl: './matrix-loader.component.html',
  styleUrls: ['./matrix-loader.component.css']
})
export class MatrixLoaderComponent implements OnInit {

  @Output()
  onload: EventEmitter<number[][]> = new EventEmitter<number[][]>();

  constructor() { }

  ngOnInit() {
  }

  parse(csv: string): number[][] {
    if (!csv || csv.length <= 1) {
      return [];
    }

    var max = 0;
    const result = csv.split(/[\r?\n]+/g).map(str => {
      const row = str.split(',').map(s => Number(s));
      if (row.length > max) {
        max = row.length;
      }
      return row;
    });

    return result.filter(row => row.length === max); // filter unwanted lines
  }

  handleInputChange(e) {
        const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

        const reader = new FileReader();

        reader.addEventListener("load", () => {
          const arr = this.parse(reader.result);
          this.onload.emit(arr);
        }, false);

        if (file) {
          reader.readAsText(file);
        }
    }
}
