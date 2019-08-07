import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsComponent } from './charts/charts.component';
import { TablesComponent } from './tables/tables.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'utils',
    loadChildren: () => import('./utils/utils.module').then(m => m.UtilsModule)
  },
  {
    path: 'components',
    children: [
      {
        path: 'buttons',
        redirectTo: '/components/buttons/1',
        pathMatch: 'full'
      },
      {
        path: 'buttons/:type',
        component: ButtonsComponent
      },
      {
        path: 'cards',
        component: CardsComponent
      }
    ]
  },
  {
    path: 'charts',
    component: ChartsComponent
  },
  {
    path: 'tables',
    component: TablesComponent
  }
  // ,
  // {
  //   path: '**',
  //   component: NotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
