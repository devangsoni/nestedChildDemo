import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C23Component } from './c23.component';

describe('C23Component', () => {
  let component: C23Component;
  let fixture: ComponentFixture<C23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
