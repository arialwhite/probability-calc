import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VarHistTwoComponent } from './var-hist-two.component';

describe('VarHistTwoComponent', () => {
  let component: VarHistTwoComponent;
  let fixture: ComponentFixture<VarHistTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VarHistTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VarHistTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
