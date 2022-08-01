import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EducPageRoutingModule } from './educ-routing.module';

import { EducPage } from './educ.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EducPageRoutingModule
  ],
  declarations: [EducPage]
})
export class EducPageModule {}
