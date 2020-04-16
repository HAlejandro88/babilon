import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuerdasPageRoutingModule } from './cuerdas-routing.module';

import { CuerdasPage } from './cuerdas.page';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    FormsModule,
    IonicModule,
    CuerdasPageRoutingModule
  ],
  declarations: [CuerdasPage]
})
export class CuerdasPageModule {}
