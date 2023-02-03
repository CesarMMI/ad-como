import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesListRoutingModule } from './categories-list-routing.module';
import { CategoriesListComponent } from './categories-list.component';


@NgModule({
  declarations: [
    CategoriesListComponent
  ],
  imports: [
    CommonModule,
    CategoriesListRoutingModule
  ]
})
export class CategoriesListModule { }
