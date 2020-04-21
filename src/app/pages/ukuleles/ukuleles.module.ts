import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UkulelesPageRoutingModule } from './ukuleles-routing.module';

import { UkulelesPage } from './ukuleles.page';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    FormsModule,
    IonicModule,
    UkulelesPageRoutingModule
  ],
  declarations: [UkulelesPage]
})
export class UkulelesPageModule {}
