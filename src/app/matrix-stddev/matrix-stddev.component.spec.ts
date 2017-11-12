import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StddevVectorComponent } from './stddev-vector.component';

describe('StddevVectorComponent', () => {
  let component: StddevVectorComponent;
  let fixture: ComponentFixture<StddevVectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StddevVectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StddevVectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
