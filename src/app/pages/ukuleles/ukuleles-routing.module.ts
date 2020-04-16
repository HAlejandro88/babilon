import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UkulelesPage } from './ukuleles.page';

const routes: Routes = [
  {
    path: '',
    component: UkulelesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UkulelesPageRoutingModule {}
