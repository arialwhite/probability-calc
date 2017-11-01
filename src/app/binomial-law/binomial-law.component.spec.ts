import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinomialLawComponent } from './binomial-law.component';

describe('BinomialLawComponent', () => {
  let component: BinomialLawComponent;
  let fixture: ComponentFixture<BinomialLawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinomialLawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinomialLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
