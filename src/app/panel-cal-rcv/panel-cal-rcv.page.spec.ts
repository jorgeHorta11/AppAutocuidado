import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCalRcvPage } from './panel-cal-rcv.page';

describe('PanelCalRcvPage', () => {
  let component: PanelCalRcvPage;
  let fixture: ComponentFixture<PanelCalRcvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelCalRcvPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelCalRcvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
