import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VarCovComponent } from './var-cov.component';

describe('VarCovComponent', () => {
  let component: VarCovComponent;
  let fixture: ComponentFixture<VarCovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VarCovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VarCovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
