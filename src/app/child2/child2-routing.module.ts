import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { C21Component } from './c21/c21.component';
import { C22Component } from './c22/c22.component';
import { C23Component } from './c23/c23.component';

const routes: Routes = [
  {
  path:'',
  redirectTo:'c21',
  pathMatch: 'full'
},{
  path:'c21',
  component:C21Component
},{
  path:'c22',
  component:C22Component
},{
  path:'c23',
  component:C23Component
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Child2RoutingModule { }
