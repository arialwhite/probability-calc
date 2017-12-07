import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiMatrixTableComponent } from './multi-matrix-table.component';

describe('MultiMatrixTableComponent', () => {
  let component: MultiMatrixTableComponent;
  let fixture: ComponentFixture<MultiMatrixTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiMatrixTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiMatrixTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
