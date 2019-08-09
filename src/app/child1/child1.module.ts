import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Child1RoutingModule } from './child1-routing.module';
import { C11Component } from './c11/c11.component';
import { C12Component } from './c12/c12.component';
import { C13Component } from './c13/c13.component';

@NgModule({
  declarations: [C11Component, C12Component, C13Component],
  imports: [
    CommonModule,
    Child1RoutingModule
  ]
})
export class Child1Module { }
