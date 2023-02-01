import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ITask } from 'src/app/shared/models/task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskItemComponent {

  @Input() task!: ITask

}
