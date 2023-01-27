import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NavbarItemComponent } from './navbar-item/navbar-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    NavbarItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
