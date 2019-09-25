import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PanelCalDia2Page } from './panel-cal-dia2.page';

const routes: Routes = [
  {
    path: '',
    component: PanelCalDia2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PanelCalDia2Page]
})
export class PanelCalDia2PageModule {}
