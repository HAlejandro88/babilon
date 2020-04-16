import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  {
    path: 'guitarras',
    loadChildren: () => import('./pages/guitarras/guitarras.module').then( m => m.GuitarrasPageModule)
  },
  {
    path: 'ukuleles',
    loadChildren: () => import('./pages/ukuleles/ukuleles.module').then( m => m.UkulelesPageModule)
  },
  {
    path: 'cuerdas',
    loadChildren: () => import('./pages/cuerdas/cuerdas.module').then( m => m.CuerdasPageModule)
  },
  {
    path: 'bajos',
    loadChildren: () => import('./pages/bajos/bajos.module').then( m => m.BajosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
