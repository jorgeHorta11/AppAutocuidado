import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomeModule)
          }
        ]
      },
      {
        path: 'caa',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../caa/caa.module').then(m => m.CAAModule)
          }
        ]
      },
      {
        path: 'diagnostic',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../diagnostic/diagnostic.module').then(m => m.DiagnosticModule)
          }
        ]
      },
      {
        path: 'message',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../message/message.module').then(m => m.MessagePageModule)
          }
        ]
      },
      {
        path: 'inbox',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../inbox/inbox.module').then(m => m.InboxPageModule)
          }
        ]
      },
      {
        path: 'framingham',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../framingham/framingham.module').then(m => m.FraminghamModule)
          }
        ]
      },
      {
        path: 'alarma',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../alarma/alarma.module').then(m => m.AlarmaPageModule)
          }
        ]
      },
      
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
