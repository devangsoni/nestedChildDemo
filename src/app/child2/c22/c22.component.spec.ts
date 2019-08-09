import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C22Component } from './c22.component';

describe('C22Component', () => {
  let component: C22Component;
  let fixture: ComponentFixture<C22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
