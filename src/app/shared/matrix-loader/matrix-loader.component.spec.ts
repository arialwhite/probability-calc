import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixLoaderComponent } from './matrix-loader.component';

describe('MatrixLoaderComponent', () => {
  let component: MatrixLoaderComponent;
  let fixture: ComponentFixture<MatrixLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrixLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrixLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
