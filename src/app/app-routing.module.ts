import { HomeComponent } from './page/home/home.component';
import { CalculadoraAguaComponent } from './page/calculadora-agua/calculadora-agua.component';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'calculadora',
    component: CalculadoraAguaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
