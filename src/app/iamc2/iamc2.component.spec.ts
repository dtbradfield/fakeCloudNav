import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Iamc2Component } from './iamc2.component';

describe('Iamc2Component', () => {
  let component: Iamc2Component;
  let fixture: ComponentFixture<Iamc2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Iamc2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Iamc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
