import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'src/app/shared/components/button/button.module';

import { InputsModule } from '../../shared/components/inputs/inputs.module';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TaskFormComponent } from './pages/task-form/task-form.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { TaskRoutingModule } from './task-routing.module';

@NgModule({
    declarations: [TaskListComponent, TaskItemComponent, TaskFormComponent],
    imports: [
        CommonModule,
        TaskRoutingModule,
        ReactiveFormsModule,
        ButtonModule,
        InputsModule,
    ],
})
export class TaskModule {}
