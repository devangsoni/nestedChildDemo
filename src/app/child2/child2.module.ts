import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Child2RoutingModule } from './child2-routing.module';
import { C21Component } from './c21/c21.component';
import { C22Component } from './c22/c22.component';
import { C23Component } from './c23/c23.component';

@NgModule({
  declarations: [C21Component, C22Component, C23Component],
  imports: [
    CommonModule,
    Child2RoutingModule
  ]
})
export class Child2Module { }
