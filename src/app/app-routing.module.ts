import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'panel-cal-dia2', loadChildren: './panel-cal-dia2/panel-cal-dia2.module#PanelCalDia2PageModule' },
  { path: 'resultado', loadChildren: './panel-cal-rcv/panel-cal-rcv.module#PanelCalRcvPageModule' },
  { path: 'register', loadChildren: './PanelRegistroLogin/tab1.module#Tab1PageModule' },
  { path: 'home', loadChildren: './Panelinicio/tab3.module#Tab3PageModule' },

  

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
