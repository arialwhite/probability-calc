import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinomialCoefComponent } from './binomial-coef.component';

describe('BinomialCoefComponent', () => {
  let component: BinomialCoefComponent;
  let fixture: ComponentFixture<BinomialCoefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinomialCoefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinomialCoefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
