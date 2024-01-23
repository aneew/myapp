import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MybookPage } from './mybook.page';

const routes: Routes = [
  {
    path: '',
    component: MybookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MybookPageRoutingModule {}
