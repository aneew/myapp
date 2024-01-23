import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MybookPageRoutingModule } from './mybook-routing.module';

import { MybookPage } from './mybook.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MybookPageRoutingModule
  ],
  declarations: [MybookPage]
})
export class MybookPageModule {}
