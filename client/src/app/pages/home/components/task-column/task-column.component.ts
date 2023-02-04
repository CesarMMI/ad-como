import { Component, Input } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ITask } from 'src/app/models/task';
import { TaskFormComponent } from 'src/app/pages/task-form/task-form.component';

@Component({
  selector: 'app-task-column',
  templateUrl: './task-column.component.html',
  styleUrls: ['./task-column.component.scss'],
})
export class TaskColumnComponent {
  @Input() title: 'Do' | 'Doing' | 'Done' = 'Do';

  constructor(private _bottomSheet: MatBottomSheet) {}

  protected addTask() {
    this._bottomSheet.open(TaskFormComponent);
  }
}
