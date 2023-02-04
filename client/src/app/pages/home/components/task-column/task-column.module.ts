import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { TaskCardModule } from '../task-card/task-card.module';
import { TaskColumnComponent } from './task-column.component';

@NgModule({
  declarations: [TaskColumnComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    TaskCardModule,
  ],
  exports: [TaskColumnComponent],
})
export class TaskColumnModule {}
