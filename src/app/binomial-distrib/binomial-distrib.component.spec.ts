import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinomialDistribComponent } from './binomial-distrib.component';

describe('BinomialDistribComponent', () => {
  let component: BinomialDistribComponent;
  let fixture: ComponentFixture<BinomialDistribComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinomialDistribComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinomialDistribComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
