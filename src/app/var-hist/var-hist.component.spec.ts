import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VarHistComponent } from './var-hist.component';

describe('VarHistComponent', () => {
  let component: VarHistComponent;
  let fixture: ComponentFixture<VarHistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VarHistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VarHistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
