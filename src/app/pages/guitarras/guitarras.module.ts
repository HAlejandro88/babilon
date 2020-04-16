import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuitarrasPageRoutingModule } from './guitarras-routing.module';

import { GuitarrasPage } from './guitarras.page';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    FormsModule,
    IonicModule,
    GuitarrasPageRoutingModule
  ],
  declarations: [GuitarrasPage]
})
export class GuitarrasPageModule {}
