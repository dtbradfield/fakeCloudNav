import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Iamc1Component } from './iamc1.component';

describe('Iamc1Component', () => {
  let component: Iamc1Component;
  let fixture: ComponentFixture<Iamc1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Iamc1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Iamc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
