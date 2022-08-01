import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EducPage } from './educ.page';

const routes: Routes = [
  {
    path: '',
    component: EducPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EducPageRoutingModule {}
