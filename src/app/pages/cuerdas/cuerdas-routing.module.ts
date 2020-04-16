import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuerdasPage } from './cuerdas.page';

const routes: Routes = [
  {
    path: '',
    component: CuerdasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuerdasPageRoutingModule {}
