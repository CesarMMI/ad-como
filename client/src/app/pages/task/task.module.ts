import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TaskListComponent } from './pages/task-list/task-list.component';

import { TaskRoutingModule } from './task-routing.module';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { CategoryChipComponent } from './components/category-chip/category-chip.component';
import { TaskRunnerComponent } from './components/task-runner/task-runner.component';
import { ButtonModule } from 'src/app/shared/components/button/button.module';


@NgModule({
  declarations: [
    TaskListComponent,
    TaskItemComponent,
    CategoryChipComponent,
    TaskRunnerComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    ButtonModule
  ]
})
export class TaskModule { }
