import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { AppWrapperComponent } from './app-wrapper.component';

@NgModule({
  declarations: [AppWrapperComponent],
  imports: [CommonModule, RouterModule, MatSidenavModule, MatIconModule, MatToolbarModule],
  exports: [AppWrapperComponent],
})
export class AppWrapperModule {}
