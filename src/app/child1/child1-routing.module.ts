import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { C11Component } from './c11/c11.component';
import { C12Component } from './c12/c12.component';
import { C13Component } from './c13/c13.component';

const routes: Routes = [{
  path:'',
  redirectTo:'c11',
  pathMatch: 'full'
},{
  path:'c11',
  component:C11Component
},{
  path:'c12',
  component:C12Component
},{
  path:'c13',
  component:C13Component
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Child1RoutingModule { }
