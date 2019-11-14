import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'framingham', loadChildren: './framingham/framingham.module#FraminghamModule' },
  { path: 'resultado', loadChildren: './diagnostic/diagnostic.module#DiagnosticModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterModule' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'prueba', loadChildren: './prueba/prueba.module#PruebaPageModule' },
  { path: 'message', loadChildren: './message/message.module#MessagePageModule' },
  { path: 'inbox', loadChildren: './inbox/inbox.module#InboxPageModule' },
  { path: 'alarma', loadChildren: './alarma/alarma.module#AlarmaPageModule' },


  

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
