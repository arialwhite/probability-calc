import { Component, forwardRef, OnInit, Input, OnChanges, SimpleChanges, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MatrixEditorComponent),
    multi: true
};

@Component({
  selector: 'app-matrix-editor',
  templateUrl: './matrix-editor.component.html',
  styleUrls: ['./matrix-editor.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class MatrixEditorComponent implements OnInit, OnChanges, AfterViewInit {

  @Output()
  onload: EventEmitter<number[][]> = new EventEmitter<number[][]>();

  @Input()
  I: number;

  @Input()
  J: number;

  private lines: number[] = [];
  private cols: number[] = [];
  private matrix: number[][] = [];

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  constructor() { }

  ngOnInit() : void {
    
  }

  ngAfterViewInit() {
    window.setTimeout(() => {
      this.onChangeCallback(this.matrix);
    }, 0);
  }

  handleOnload(matrix: number[][]) {
    this.onload.emit(matrix);
  }

  ngOnChanges(changes: SimpleChanges) : void {
    let I, J;
    if (changes['I']) {
      I = changes['I'].currentValue;
    } else {
      I = this.I || 0;
    }

    if (changes['J']) {
      J = changes['J'].currentValue;
    } else {
      J = this.J || 0;
    }

    if (changes['I'] || changes['J']) {
      this.createLines(I);
      this.createCols(J);
      if (!this.matrix || !this.matrix.length) {
        this.matrix = this.createMatrix(I, J);
        this.onChangeCallback(this.matrix);
      } else {
        this.updateMatrix(I, J);
        
      }
    }
  }

  updateMatrix(I: number, J: number) {
    if (I > this.matrix.length) {
      const diff = I - this.matrix.length;
      for (let i = 0; i <diff; i++) {
        this.matrix.push([]);
      }
    } else if (I < this.matrix.length) {
      const diff = this.matrix.length - I;
      this.matrix.splice(I, diff);
    }

    const mJ = this.matrix[0]? this.matrix[0].length: 0;
    if (J > mJ) {
      const diff = I - mJ;
      for (let i = 0; i <this.matrix.length; i++) {
        for (let j = 0; j< diff; j++) {
          this.matrix[i].push(0);
        }
      }
    } else if (J < mJ) {
      const diff = mJ - J;
      for (let i = 0; i <this.matrix.length; i++) {
        this.matrix[i].splice(J, diff);
      }
    }
  }

  createLines(I: number) {
      if (!isNaN(I) && I !== null) {
        this.lines = [];
        for (let i = 1; i <= I; i++) {
          this.lines.push(i);
        }
      } else {
        this.lines = [];
      }
  }

  createCols(J: number) {
      if (!isNaN(J) && J !== null) {
        this.cols = [];
        for (let i = 1; i <= J; i++) {
          this.cols.push(i);
        }
      } else {
        this.cols = [];
      }
  }

  createMatrix(I: number, J: number): number[][] {
    const result: number[][] = [];

    for (let i = 1; i <= I; i++) {
      const row: number[] = [];
      for (let j = 1; j <= J; j++) {
        row[j - 1] = 0;
      }
      result[i - 1] = row;
    }

    return result;
  }

      //get accessor
    get value(): any {
        return this.matrix;
    };

    //set accessor including call the onchange callback
    set value(v: any) {
        if (v) {
            this.matrix = v;
            this.onChangeCallback(v);
        }
    }

    //Set touched on blur
    onBlur() {
        this.onTouchedCallback();
    }

    //From ControlValueAccessor interface
    writeValue(value: any) {
        if (value) {
            this.matrix = value;
        }
    }

    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }

    onChange($event) {
      this.value = this.matrix;
    }

}
