import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixCorrelationComponent } from './matrix-correlation.component';

describe('MatrixCorrelationComponent', () => {
  let component: MatrixCorrelationComponent;
  let fixture: ComponentFixture<MatrixCorrelationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrixCorrelationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrixCorrelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
