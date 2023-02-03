import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from 'src/app/models/task';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskCardComponent {
  @Output() onEdit = new EventEmitter<ITask>();
  @Output() onDelete = new EventEmitter<ITask>();

  @Input() task!: ITask;
}
