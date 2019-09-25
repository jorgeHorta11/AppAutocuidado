import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCalDia2Page } from './panel-cal-dia2.page';

describe('PanelCalDia2Page', () => {
  let component: PanelCalDia2Page;
  let fixture: ComponentFixture<PanelCalDia2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelCalDia2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelCalDia2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
