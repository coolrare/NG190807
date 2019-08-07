import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorsComponent } from './colors/colors.component';
import { BordersComponent } from './borders/borders.component';


const routes: Routes = [
  { path: 'colors', component: ColorsComponent },
  { path: 'borders', component: BordersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilsRoutingModule { }
