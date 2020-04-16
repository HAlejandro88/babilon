import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BajosPage } from './bajos.page';

const routes: Routes = [
  {
    path: '',
    component: BajosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BajosPageRoutingModule {}
