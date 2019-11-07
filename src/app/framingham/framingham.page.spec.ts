  import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FraminghamClass } from './framingham.page';

describe('PanelCalDia2Page', () => {
  let component: FraminghamClass;
  let fixture: ComponentFixture<FraminghamClass>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraminghamClass ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraminghamClass);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
