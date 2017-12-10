import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolatHistComponent } from './volat-hist.component';

describe('VolatHistComponent', () => {
  let component: VolatHistComponent;
  let fixture: ComponentFixture<VolatHistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolatHistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolatHistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
