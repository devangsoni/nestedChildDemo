import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path:'',
  redirectTo:'child1',
  pathMatch: 'full'
},{
  path:'child1',
  loadChildren:'./child1/child1.module#Child1Module'
},{
  path:'child2',
  loadChildren:'./child2/child2.module#Child2Module'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
