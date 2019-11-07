import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CAAPage } from './caa.page';

describe('Tab2Page', () => {
  let component: CAAPage;
  let fixture: ComponentFixture<CAAPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CAAPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CAAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
