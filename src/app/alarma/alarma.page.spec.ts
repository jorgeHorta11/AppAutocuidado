import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmaPage } from './alarma.page';

describe('AlarmaPage', () => {
  let component: AlarmaPage;
  let fixture: ComponentFixture<AlarmaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
