import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixCovarianceComponent } from './matrix-covariance.component';

describe('MatrixCovarianceComponent', () => {
  let component: MatrixCovarianceComponent;
  let fixture: ComponentFixture<MatrixCovarianceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrixCovarianceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrixCovarianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
