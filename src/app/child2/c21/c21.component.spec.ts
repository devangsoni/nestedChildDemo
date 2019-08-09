import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C21Component } from './c21.component';

describe('C21Component', () => {
  let component: C21Component;
  let fixture: ComponentFixture<C21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
