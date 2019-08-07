import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilsRoutingModule } from './utils-routing.module';
import { ColorsComponent } from './colors/colors.component';
import { BordersComponent } from './borders/borders.component';


@NgModule({
  declarations: [ColorsComponent, BordersComponent],
  imports: [
    CommonModule,
    UtilsRoutingModule
  ]
})
export class UtilsModule { }
