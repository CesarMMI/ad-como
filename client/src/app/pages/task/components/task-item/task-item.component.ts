import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from 'src/app/shared/models/task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskItemComponent {
  @Input() task!: ITask;
  @Output() onSelect = new EventEmitter<ITask>();

  protected onClick() {
    this.onSelect.emit(this.task);
  }

}
