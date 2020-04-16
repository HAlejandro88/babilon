import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BajosPageRoutingModule } from './bajos-routing.module';

import { BajosPage } from './bajos.page';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    FormsModule,
    IonicModule,
    BajosPageRoutingModule
  ],
  declarations: [BajosPage]
})
export class BajosPageModule {}
