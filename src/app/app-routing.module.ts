import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Pag3Component } from './pag3/pag3.component';
import { Pag4Component } from './pag4/pag4.component';
import { Pag5Component } from './pag5/pag5.component';
import { Pag6Component } from './pag6/pag6.component';

const routes: Routes = [
  {
  path: 'home',
  loadChildren: () => import('./home/home.module').then(m =>
  m.HomePageModule)
  },
  {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
  },
  {
  path: 'about',
  component: AboutComponent,
  },
  {
  path: 'contact',
  component: ContactComponent,
  },
  {
  path: 'pag3',
  component: Pag3Component,
  },
  {
  path: 'pag4',
  component: Pag4Component,
  },
  {
  path: 'pag5',
  component: Pag5Component,
  },
  {
  path: 'pag6',
  component: Pag6Component,
  },
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
