import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticPage } from './diagnostic.page';

describe('PanelCalRcvPage', () => {
  let component: DiagnosticPage;
  let fixture: ComponentFixture<DiagnosticPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosticPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
