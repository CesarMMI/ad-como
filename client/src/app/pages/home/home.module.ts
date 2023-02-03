import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TaskCardModule } from './components/task-card/task-card.module';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    TaskCardModule,
  ],
})
export class HomeModule {}
