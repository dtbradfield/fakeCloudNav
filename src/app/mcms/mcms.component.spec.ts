import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McmsComponent } from './mcms.component';

describe('McmsComponent', () => {
  let component: McmsComponent;
  let fixture: ComponentFixture<McmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
