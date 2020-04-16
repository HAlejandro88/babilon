import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuitarrasPage } from './guitarras.page';

const routes: Routes = [
  {
    path: '',
    component: GuitarrasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuitarrasPageRoutingModule {}
